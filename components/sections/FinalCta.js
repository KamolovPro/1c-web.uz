import { Rocket } from 'lucide-react'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

export default function FinalCta() {
  const { t, openModal } = useApp()
  const c = t.finalCta

  return (
    <section className="final-cta">
      <div className="container">
        <Reveal className="final-cta-inner">
          <h2>{c.title}</h2>
          <p>{c.subtitle}</p>
          <button className="btn btn-primary" onClick={() => openModal()}>
            <Rocket size={18} />
            <span>{c.button}</span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
