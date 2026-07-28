import Link from 'next/link'
import { Database, Users, HardDrive, AlertTriangle, CheckCircle2, LifeBuoy, ArrowUpCircle, UserPlus } from 'lucide-react'
import CabinetLayout from '../../components/cabinet/CabinetLayout'
import StatusBadge from '../../components/cabinet/StatusBadge'
import { useApp } from '../../components/AppContext'
import { withAuth } from '../../lib/withAuth'
import { getDatabasesByUser, getInvoicesByUser, getTariff } from '../../lib/mockDb'
import { formatMoney, formatDate } from '../../lib/format'

export default function Dashboard({ user, stats, unpaid, tariffName }) {
  const { t, lang } = useApp()
  const c = t.cabinet
  const d = c.dashboard

  return (
    <CabinetLayout user={user} title={d.greeting + ', ' + user.contactName}>
      <p className="cab-lead">{d.subtitle}</p>

      {/* Статус оплаты */}
      {unpaid ? (
        <div className="cab-alert cab-alert-warn">
          <AlertTriangle size={22} />
          <div>
            <strong>{d.unpaidTitle}</strong>
            <p>{d.unpaidText}</p>
          </div>
          <Link href="/cabinet/billing" className="btn btn-primary">
            {d.goToBilling}
          </Link>
        </div>
      ) : (
        <div className="cab-alert cab-alert-ok">
          <CheckCircle2 size={22} />
          <div>
            <strong>{d.allPaidTitle}</strong>
            <p>{d.allPaidText}</p>
          </div>
        </div>
      )}

      {/* Карточки-метрики */}
      <div className="cab-stats">
        <div className="cab-stat">
          <div className="cab-stat-label">{d.subscription}</div>
          <div className="cab-stat-value">
            <StatusBadge status="running" label={c.status.active} />
          </div>
        </div>
        <div className="cab-stat">
          <div className="cab-stat-label">{d.tariff}</div>
          <div className="cab-stat-value">{tariffName}</div>
        </div>
        <div className="cab-stat">
          <div className="cab-stat-label">{d.nextPayment}</div>
          <div className="cab-stat-value">
            {stats.nextAmount ? formatMoney(stats.nextAmount) : '—'}
            {stats.nextDate && <span className="cab-stat-sub">{formatDate(stats.nextDate)}</span>}
          </div>
        </div>
      </div>

      <div className="cab-stats">
        <div className="cab-stat cab-stat-icon">
          <Database size={22} />
          <div>
            <div className="cab-stat-value">{stats.databases}</div>
            <div className="cab-stat-label">{d.databases}</div>
          </div>
        </div>
        <div className="cab-stat cab-stat-icon">
          <Users size={22} />
          <div>
            <div className="cab-stat-value">{stats.users}</div>
            <div className="cab-stat-label">{d.users}</div>
          </div>
        </div>
        <div className="cab-stat cab-stat-icon">
          <HardDrive size={22} />
          <div>
            <div className="cab-stat-value">{stats.storage} ГБ</div>
            <div className="cab-stat-label">{d.storage}</div>
          </div>
        </div>
      </div>

      {/* Быстрые действия */}
      <h2 className="cab-section-title">{d.quickTitle}</h2>
      <div className="cab-quick">
        <Link href="/cabinet/billing" className="cab-quick-card">
          <ArrowUpCircle size={22} />
          <span>{d.actionUpgrade}</span>
        </Link>
        <Link href="/cabinet/databases" className="cab-quick-card">
          <UserPlus size={22} />
          <span>{d.actionAddUser}</span>
        </Link>
        <a href="/#faq" className="cab-quick-card">
          <LifeBuoy size={22} />
          <span>{d.actionSupport}</span>
        </a>
      </div>
    </CabinetLayout>
  )
}

export const getServerSideProps = withAuth(async (ctx, user) => {
  const dbs = getDatabasesByUser(user.id)
  const invoices = getInvoicesByUser(user.id)
  const tariff = getTariff(user.tariffId)
  const pending = invoices.find((i) => i.status === 'pending' || i.status === 'overdue')

  const stats = {
    databases: dbs.length,
    users: dbs.reduce((sum, d) => sum + d.users, 0),
    storage: dbs.reduce((sum, d) => sum + d.sizeGb, 0),
    nextAmount: pending ? pending.amount : tariff?.monthly || null,
    nextDate: pending ? pending.dueAt : null,
  }

  return {
    props: {
      stats,
      unpaid: Boolean(pending),
      tariffName: tariff ? tariff.name : '—',
    },
  }
})
