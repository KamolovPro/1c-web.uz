import { useEffect, useRef, useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import { useApp } from './AppContext'

// Модальное окно заявки. Отправляет данные на /api/lead.
// Пока биллинг работает по ручным счетам, это главный канал конверсии:
// клиент оставляет контакт и интересующий тариф, менеджер перезванивает.
export default function LeadModal() {
  const { t, modalOpen, closeModal, selectedPlan } = useApp()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const firstFieldRef = useRef(null)
  const f = t.form

  // Сброс состояния и автофокус при открытии.
  useEffect(() => {
    if (modalOpen) {
      setStatus('idle')
      const id = setTimeout(() => firstFieldRef.current?.focus(), 50)
      return () => clearTimeout(id)
    }
  }, [modalOpen])

  // Закрытие по Escape.
  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e) => e.key === 'Escape' && closeModal()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalOpen, closeModal])

  if (!modalOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      company: form.company.value.trim(),
      comment: form.comment.value.trim(),
      plan: selectedPlan || '',
    }
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onMouseDown={closeModal}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={f.title}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeModal} aria-label={f.close}>
          <X size={22} />
        </button>

        {status === 'success' ? (
          <div className="form-success">
            <CheckCircle2 size={56} className="form-success-icon" />
            <h3>{f.thanks}</h3>
            <p>{f.thanksText}</p>
            <button className="btn btn-primary" onClick={closeModal}>
              {f.close}
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">{f.title}</h3>
            <p className="modal-subtitle">{f.subtitle}</p>
            <form onSubmit={handleSubmit} noValidate>
              {selectedPlan && (
                <div className="form-field">
                  <label>{f.planLabel}</label>
                  <div className="form-plan-pill">{selectedPlan}</div>
                </div>
              )}
              <div className="form-field">
                <label htmlFor="lead-name">{f.name}</label>
                <input ref={firstFieldRef} id="lead-name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="lead-phone">{f.phone}</label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+998 __ ___ __ __"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lead-company">{f.company}</label>
                <input id="lead-company" name="company" type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="lead-comment">{f.comment}</label>
                <textarea id="lead-comment" name="comment" rows={3} />
              </div>

              {status === 'error' && <p className="form-error">{f.error}</p>}

              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? f.sending : f.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
