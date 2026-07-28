import { useEffect, useState } from 'react'
import { Phone, Menu, X, UserCircle } from 'lucide-react'
import { useApp } from './AppContext'
import Logo from './Logo'

export default function Header() {
  const { t, lang, switchLang, openModal, mobileMenuOpen, setMobileMenuOpen } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#prices', label: t.nav.pricing },
    { href: '#how', label: t.nav.how },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-content">
          <Logo />
          <nav className="main-nav">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="lang-switch" onClick={switchLang} aria-label="Сменить язык">
              {t.langName}
            </button>
            <a href="/login" className="header-login" aria-label={t.cabinet.nav.dashboard}>
              <UserCircle size={20} />
              <span>{t.cabinet.brand}</span>
            </a>
            <button className="btn btn-primary header-cta" onClick={() => openModal()}>
              <Phone size={18} />
              <span>{t.nav.contact}</span>
            </button>
            <button
              className="hamburger"
              aria-label="Меню"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="/login" onClick={() => setMobileMenuOpen(false)}>
          {t.cabinet.brand}
        </a>
        <button
          className="btn btn-primary"
          onClick={() => {
            setMobileMenuOpen(false)
            openModal()
          }}
        >
          <Phone size={18} />
          <span>{t.nav.contact}</span>
        </button>
        <button className="lang-switch mobile-lang" onClick={switchLang}>
          {lang === 'ru' ? "O'zbekcha" : 'Русский'}
        </button>
      </div>
    </>
  )
}
