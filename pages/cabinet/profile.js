import { Building2, User, Phone, Mail, Package, CalendarDays } from 'lucide-react'
import CabinetLayout from '../../components/cabinet/CabinetLayout'
import { useApp } from '../../components/AppContext'
import { withAuth } from '../../lib/withAuth'
import { getTariff } from '../../lib/mockDb'
import { formatDate, formatMoney } from '../../lib/format'

export default function Profile({ user, tariff }) {
  const { t, lang, openModal } = useApp()
  const c = t.cabinet
  const p = c.profile
  const locale = lang === 'ru' ? 'ru-RU' : 'uz-UZ'
  const tariffName = tariff ? (lang === 'ru' ? tariff.name : tariff.nameUz) : '—'

  const rows = [
    { icon: Building2, label: p.company, value: user.companyName },
    { icon: User, label: p.contact, value: user.contactName },
    { icon: Phone, label: p.phone, value: user.phone },
    { icon: Mail, label: p.email, value: user.email },
    {
      icon: Package,
      label: p.tariff,
      value: tariff?.monthly ? `${tariffName} · ${formatMoney(tariff.monthly)}/мес` : tariffName,
    },
    { icon: CalendarDays, label: p.memberSince, value: formatDate(user.memberSince, locale) },
  ]

  return (
    <CabinetLayout user={user} title={p.title}>
      <p className="cab-lead">{p.subtitle}</p>

      <div className="profile-card">
        <div className="profile-rows">
          {rows.map((r) => {
            const Icon = r.icon
            return (
              <div className="profile-row" key={r.label}>
                <div className="profile-row-label">
                  <Icon size={18} />
                  <span>{r.label}</span>
                </div>
                <div className="profile-row-value">{r.value}</div>
              </div>
            )
          })}
        </div>

        <div className="profile-actions">
          <button className="btn btn-primary" onClick={() => openModal(tariffName)}>
            {p.changeTariff}
          </button>
        </div>
        <p className="profile-note">{p.note}</p>
      </div>
    </CabinetLayout>
  )
}

export const getServerSideProps = withAuth(async (ctx, user) => {
  return { props: { tariff: getTariff(user.tariffId) } }
})
