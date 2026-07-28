import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  LayoutDashboard,
  Database,
  Receipt,
  User,
  LogOut,
  Globe,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react'
import { useApp } from '../AppContext'
import LeadModal from '../LeadModal'

const NAV = [
  { href: '/cabinet', key: 'dashboard', icon: LayoutDashboard, exact: true },
  { href: '/cabinet/databases', key: 'databases', icon: Database },
  { href: '/cabinet/billing', key: 'billing', icon: Receipt },
  { href: '/cabinet/profile', key: 'profile', icon: User },
]

export default function CabinetLayout({ user, title, children }) {
  const { t, switchLang } = useApp()
  const c = t.cabinet
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (item) =>
    item.exact ? router.pathname === item.href : router.pathname.startsWith(item.href)

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  const initials = (user?.companyName || 'K')
    .replace(/[«»"']/g, '')
    .trim()
    .charAt(0)
    .toUpperCase()

  return (
    <div className="cab">
      <Head>
        <title>{`${title} — ${c.brand} · 1C-Web.Uz`}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <aside className={`cab-sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="cab-sidebar-top">
          <Link href="/cabinet" className="cab-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-brand">1С</span>
            <span className="cab-logo-name">
              -Web<span className="logo-domain">.Uz</span>
            </span>
          </Link>
          <button className="cab-close" onClick={() => setMenuOpen(false)} aria-label="Закрыть">
            <X size={22} />
          </button>
        </div>

        <nav className="cab-nav">
          {NAV.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`cab-nav-item ${isActive(item) ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={19} />
                <span>{c.nav[item.key]}</span>
              </Link>
            )
          })}
        </nav>

        <div className="cab-sidebar-bottom">
          <a href="/" className="cab-nav-item">
            <ExternalLink size={19} />
            <span>{c.nav.site}</span>
          </a>
          <button className="cab-nav-item" onClick={logout}>
            <LogOut size={19} />
            <span>{c.nav.logout}</span>
          </button>
        </div>
      </aside>

      {menuOpen && <div className="cab-backdrop" onClick={() => setMenuOpen(false)} />}

      <div className="cab-main">
        <header className="cab-topbar">
          <button className="cab-burger" onClick={() => setMenuOpen(true)} aria-label="Меню">
            <Menu size={24} />
          </button>
          <h1 className="cab-title">{title}</h1>
          <div className="cab-topbar-actions">
            <button className="lang-switch" onClick={switchLang}>
              <Globe size={16} />
              <span>{t.langName}</span>
            </button>
            <div className="cab-user">
              <span className="cab-avatar">{initials}</span>
              <span className="cab-company">{user?.companyName}</span>
            </div>
          </div>
        </header>

        <div className="cab-content">{children}</div>
      </div>

      <LeadModal />
    </div>
  )
}
