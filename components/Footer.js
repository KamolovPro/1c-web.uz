import { Send, Instagram, Facebook } from 'lucide-react'
import { useApp } from './AppContext'
import { contacts } from '../lib/translations'
import Logo from './Logo'

export default function Footer() {
  const { t, lang } = useApp()
  const address = lang === 'ru' ? contacts.addressRu : contacts.addressUz

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logo />
            <p style={{ marginTop: 20 }}>{t.footer.about}</p>
            <div className="footer-socials">
              <a href={contacts.telegram} aria-label="Telegram">
                <Send size={18} />
              </a>
              <a href={contacts.instagram} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={contacts.facebook} aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>
              {t.footer.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactsTitle}</h4>
            <ul>
              <li>
                <a href={contacts.phoneHref}>{contacts.phone}</a>
              </li>
              <li>
                <a href={contacts.emailHref}>{contacts.email}</a>
              </li>
              <li>
                <p>{address}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
