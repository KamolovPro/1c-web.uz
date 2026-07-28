import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Globe } from 'lucide-react'
import { useApp } from '../components/AppContext'
import { getSession } from '../lib/auth'

export default function Login() {
  const { t, switchLang } = useApp()
  const c = t.cabinet.login
  const router = useRouter()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.value, password: form.password.value }),
      })
      if (!res.ok) throw new Error('bad')
      const next = typeof router.query.next === 'string' ? router.query.next : '/cabinet'
      router.push(next)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>{`${c.title} · 1C-Web.Uz`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="login-page">
        <button className="lang-switch login-lang" onClick={switchLang}>
          <Globe size={16} />
          <span>{t.langName}</span>
        </button>
        <div className="login-card">
          <a href="/" className="login-logo">
            <span className="logo-brand">1С</span>
            <span className="logo-name">
              -Web<span className="logo-domain">.Uz</span>
            </span>
          </a>
          <h1>{c.title}</h1>
          <p className="login-sub">{c.subtitle}</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="email">{c.email}</label>
              <input id="email" name="email" type="email" autoComplete="username" required />
            </div>
            <div className="form-field">
              <label htmlFor="password">{c.password}</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
            {status === 'error' && <p className="form-error">{c.error}</p>}
            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? c.sending : c.submit}
            </button>
          </form>

          <div className="login-demo">
            <strong>{c.demoHint}</strong> demo@1c-web.uz / demo1234
          </div>
          <a href="/" className="login-back">
            {c.backToSite}
          </a>
        </div>
      </div>
    </>
  )
}

// Если уже авторизован — сразу в кабинет.
export async function getServerSideProps(ctx) {
  const session = getSession(ctx.req)
  if (session) {
    return { redirect: { destination: '/cabinet', permanent: false } }
  }
  return { props: {} }
}
