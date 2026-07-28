// API-роут приёма заявок с лендинга.
//
// Пока (этап «ручные счета») заявка просто валидируется и логируется на сервере —
// менеджер перезванивает клиенту. Дальше сюда легко добавить:
//   • сохранение в БД / Google Sheets;
//   • уведомление в Telegram-бот или на e-mail;
//   • создание клиента и счёта в биллинге.
//
// Точка расширения помечена ниже комментарием TODO.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, phone, company = '', comment = '', plan = '' } = req.body || {}

  // Минимальная валидация обязательных полей.
  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ ok: false, error: 'Некорректное имя' })
  }
  const digits = String(phone || '').replace(/\D/g, '')
  if (digits.length < 9) {
    return res.status(400).json({ ok: false, error: 'Некорректный телефон' })
  }

  const lead = {
    name: String(name).trim(),
    phone: String(phone).trim(),
    company: String(company).trim(),
    comment: String(comment).trim(),
    plan: String(plan).trim(),
    createdAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
  }

  // TODO(biling): здесь подключить хранилище/уведомления (Telegram, e-mail, БД).
  console.log('[lead] новая заявка:', lead)

  return res.status(200).json({ ok: true })
}
