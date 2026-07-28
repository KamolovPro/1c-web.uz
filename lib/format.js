// Форматирование сумм и дат для кабинета.

export function formatMoney(amount, currency = 'сум') {
  if (amount == null) return '—'
  const s = Number(amount).toLocaleString('ru-RU').replace(/,/g, ' ')
  return `${s} ${currency}`
}

export function formatDate(iso, locale = 'ru-RU') {
  if (!iso) return '—'
  try {
    return new Date(iso).toLocaleDateString(locale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export function formatPeriod(from, to, locale = 'ru-RU') {
  return `${formatDate(from, locale)} — ${formatDate(to, locale)}`
}
