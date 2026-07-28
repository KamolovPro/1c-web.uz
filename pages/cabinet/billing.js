import { useState } from 'react'
import { X } from 'lucide-react'
import CabinetLayout from '../../components/cabinet/CabinetLayout'
import StatusBadge from '../../components/cabinet/StatusBadge'
import CopyButton from '../../components/cabinet/CopyButton'
import { useApp } from '../../components/AppContext'
import { withAuth } from '../../lib/withAuth'
import { getInvoicesByUser } from '../../lib/mockDb'
import { paymentRequisites } from '../../lib/mockDb'
import { formatMoney, formatDate, formatPeriod } from '../../lib/format'

function statusLabel(status, statusDict) {
  return { paid: statusDict.paid, pending: statusDict.pending, overdue: statusDict.overdue }[status]
}

export default function Billing({ user, invoices }) {
  const { t, lang } = useApp()
  const c = t.cabinet
  const b = c.billing
  const locale = lang === 'ru' ? 'ru-RU' : 'uz-UZ'
  const [payInvoice, setPayInvoice] = useState(null)

  const requisitesText = [
    `${b.number} ${payInvoice?.number || ''}`,
    `${c.profile.company}: ${paymentRequisites.company}`,
    `ИНН: ${paymentRequisites.inn}`,
    `Р/с: ${paymentRequisites.account}`,
    `${paymentRequisites.bank}`,
    `МФО: ${paymentRequisites.mfo}`,
  ].join('\n')

  return (
    <CabinetLayout user={user} title={b.title}>
      <p className="cab-lead">{b.subtitle}</p>

      {invoices.length === 0 ? (
        <div className="cab-empty">{b.empty}</div>
      ) : (
        <div className="table-wrap">
          <table className="cab-table">
            <thead>
              <tr>
                <th>{b.number}</th>
                <th>{b.period}</th>
                <th>{b.amount}</th>
                <th>{b.statusCol}</th>
                <th>{b.due}</th>
                <th className="ta-right">{b.action}</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td data-label={b.number}>
                    <strong>№ {inv.number}</strong>
                  </td>
                  <td data-label={b.period}>{formatPeriod(inv.periodFrom, inv.periodTo, locale)}</td>
                  <td data-label={b.amount}>{formatMoney(inv.amount, inv.currency)}</td>
                  <td data-label={b.statusCol}>
                    <StatusBadge status={inv.status} label={statusLabel(inv.status, c.status)} />
                  </td>
                  <td data-label={b.due}>{formatDate(inv.dueAt, locale)}</td>
                  <td data-label={b.action} className="ta-right">
                    {inv.status !== 'paid' && (
                      <button className="btn btn-primary btn-sm" onClick={() => setPayInvoice(inv)}>
                        {b.pay}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Модалка реквизитов для оплаты */}
      {payInvoice && (
        <div className="modal-overlay" onMouseDown={() => setPayInvoice(null)}>
          <div className="modal-content" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="modal-close" onClick={() => setPayInvoice(null)} aria-label={b.close}>
              <X size={22} />
            </button>
            <h3 className="modal-title">{b.requisitesTitle}</h3>
            <p className="modal-subtitle">
              {b.number} № {payInvoice.number} · {formatMoney(payInvoice.amount, payInvoice.currency)}
            </p>

            <div className="req-list">
              <div className="req-row">
                <span>{c.profile.company}</span>
                <b>{paymentRequisites.company}</b>
              </div>
              <div className="req-row">
                <span>ИНН</span>
                <b>{paymentRequisites.inn}</b>
              </div>
              <div className="req-row">
                <span>Р/с</span>
                <b>{paymentRequisites.account}</b>
              </div>
              <div className="req-row">
                <span>Банк</span>
                <b>{paymentRequisites.bank}</b>
              </div>
              <div className="req-row">
                <span>МФО</span>
                <b>{paymentRequisites.mfo}</b>
              </div>
              <div className="req-row">
                <span>{b.purpose}</span>
                <b>
                  {b.purposeValue} № {payInvoice.number}
                </b>
              </div>
            </div>

            <p className="req-note">{b.requisitesNote}</p>

            <div className="req-actions">
              <CopyButton value={requisitesText} labelCopy={b.copyAll} labelCopied={c.databases.copied} />
              <button className="btn btn-dark" onClick={() => setPayInvoice(null)}>
                {b.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </CabinetLayout>
  )
}

export const getServerSideProps = withAuth(async (ctx, user) => {
  return { props: { invoices: getInvoicesByUser(user.id) } }
})
