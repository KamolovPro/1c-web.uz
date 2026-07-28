import { getUserByCredentials } from '../../../lib/mockDb'
import { createToken, sessionCookie } from '../../../lib/auth'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false })
  }
  const { email, password } = req.body || {}
  const user = getUserByCredentials(email, password)
  if (!user) {
    return res.status(401).json({ ok: false, error: 'invalid_credentials' })
  }
  const token = createToken({ uid: user.id })
  res.setHeader('Set-Cookie', sessionCookie(token))
  return res.status(200).json({ ok: true })
}
