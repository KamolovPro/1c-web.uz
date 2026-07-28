import { Database, Users, HardDrive, Server } from 'lucide-react'
import CabinetLayout from '../../components/cabinet/CabinetLayout'
import StatusBadge from '../../components/cabinet/StatusBadge'
import CopyButton from '../../components/cabinet/CopyButton'
import { useApp } from '../../components/AppContext'
import { withAuth } from '../../lib/withAuth'
import { getDatabasesByUser } from '../../lib/mockDb'

export default function Databases({ user, databases }) {
  const { t } = useApp()
  const c = t.cabinet
  const db = c.databases

  return (
    <CabinetLayout user={user} title={db.title}>
      <p className="cab-lead">{db.subtitle}</p>

      {databases.length === 0 ? (
        <div className="cab-empty">{db.empty}</div>
      ) : (
        <div className="db-grid">
          {databases.map((item) => (
            <div className="db-card" key={item.id}>
              <div className="db-card-head">
                <div className="db-card-icon">
                  <Database size={22} />
                </div>
                <div className="db-card-title">
                  <h3>{item.name}</h3>
                  <p>{item.config}</p>
                </div>
                <StatusBadge
                  status={item.status}
                  label={item.status === 'running' ? c.status.running : c.status.stopped}
                />
              </div>

              <div className="db-meta">
                <div className="db-meta-item">
                  <Users size={16} />
                  <span>{item.users}</span>
                  <small>{db.users}</small>
                </div>
                <div className="db-meta-item">
                  <HardDrive size={16} />
                  <span>{item.sizeGb} ГБ</span>
                  <small>{db.size}</small>
                </div>
                <div className="db-meta-item">
                  <Server size={16} />
                  <span>{item.server}</span>
                  <small>{db.server}</small>
                </div>
              </div>

              <div className="db-connect">
                <div className="db-connect-title">{db.connectTitle}</div>
                <div className="db-connect-row">
                  <span className="db-connect-label">{db.protocol}</span>
                  <span className="db-connect-value">{item.protocol}</span>
                </div>
                <div className="db-connect-row">
                  <span className="db-connect-label">{db.address}</span>
                  <span className="db-connect-value">
                    <code>{item.server}</code>
                    <CopyButton value={item.server} labelCopy={db.copy} labelCopied={db.copied} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </CabinetLayout>
  )
}

export const getServerSideProps = withAuth(async (ctx, user) => {
  return { props: { databases: getDatabasesByUser(user.id) } }
})
