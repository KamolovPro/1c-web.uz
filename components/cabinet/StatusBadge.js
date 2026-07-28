// Цветной бейдж статуса (счёт / база / подписка).
const TONE = {
  paid: 'ok',
  running: 'ok',
  pending: 'warn',
  overdue: 'danger',
  stopped: 'muted',
}

export default function StatusBadge({ status, label }) {
  const tone = TONE[status] || 'muted'
  return <span className={`badge badge-${tone}`}>{label}</span>
}
