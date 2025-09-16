import { useState, useEffect } from 'react'
import Head from 'next/head'
import { translations } from '../lib/translations'
import { Phone } from 'lucide-react'

export default function Layout({ children }) {
  const [lang, setLang] = useState('ru')
  const t = translations[lang]

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null
    if (saved) setLang(saved)
  }, [])

  const switchLang = () => {
    const nextLang = lang === 'ru' ? 'uz' : 'ru'
    setLang(nextLang)
    if (typeof window !== 'undefined') localStorage.setItem('language', nextLang)
  }

  return (
    <>
      <Head>
        <title>{t.heroTitle}</title>
        <meta name="description" content={t.heroSubtitle} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Rubik:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </Head>
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <span className="logo-brand">1С</span>
            <span className="logo-name">-Web<span className="logo-domain">.Uz</span></span>
          </a>
          <nav className="main-nav">
            <a href="#features">{t.navFeatures}</a>
            <a href="#prices">{t.navPrices}</a>
            <a href="#faq">{t.navFaq}</a>
          </nav>
          <div className="header-actions">
            <div className="lang-switcher">
              <button className="lang-btn" onClick={switchLang}>{lang === 'ru' ? 'UZ' : 'RU'}</button>
            </div>
            <a href="#" className="btn btn-primary">
              <Phone size={18} />
              <span>{t.navContact}</span>
            </a>
          </div>
        </div>
      </header>
      {children(t)}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            © 2025 1C-Web.Uz
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/lucide@latest"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </>
  )
}
