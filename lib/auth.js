// Простая подписанная cookie-сессия для прототипа кабинета.
//
// Токен = base64url(payloadJSON).base64url(HMAC-SHA256).
// Подпись защищает от подмены userId на клиенте. Это НЕ полноценная
// авторизация: перед продакшеном используйте проверенное решение
// (NextAuth.js / iron-session) и хеширование паролей.

import crypto from 'crypto'

export const SESSION_COOKIE = 'cabinet_session'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 дней

// Секрет берём из окружения; для локального прототипа есть фолбэк.
const SECRET = process.env.SESSION_SECRET || 'dev-insecure-secret-change-me'

function b64url(buf) {
  return Buffer.from(buf).toString('base64url')
}

function sign(data) {
  return crypto.createHmac('sha256', SECRET).update(data).digest('base64url')
}

export function createToken(payload) {
  const body = b64url(JSON.stringify(payload))
  return `${body}.${sign(body)}`
}

export function verifyToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null
  const [body, sig] = token.split('.')
  if (!body || !sig) return null
  const expected = sign(body)
  // Сравнение постоянного времени.
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
  try {
    return JSON.parse(Buffer.from(body, 'base64url').toString('utf8'))
  } catch {
    return null
  }
}

export function sessionCookie(token) {
  const attrs = [
    `${SESSION_COOKIE}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${MAX_AGE}`,
  ]
  if (process.env.NODE_ENV === 'production') attrs.push('Secure')
  return attrs.join('; ')
}

export function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}

// Разбор cookie из заголовка запроса (getServerSideProps / API).
export function parseCookies(req) {
  const header = req.headers?.cookie || ''
  return header.split(';').reduce((acc, part) => {
    const idx = part.indexOf('=')
    if (idx > -1) {
      const k = part.slice(0, idx).trim()
      acc[k] = decodeURIComponent(part.slice(idx + 1).trim())
    }
    return acc
  }, {})
}

// Возвращает payload сессии ({ uid }) или null.
export function getSession(req) {
  const token = parseCookies(req)[SESSION_COOKIE]
  return verifyToken(token)
}
