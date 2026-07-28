import SectionHeader from './SectionHeader'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

export default function Steps() {
  const { t } = useApp()
  const s = t.steps

  return (
    <section id="how" className="section">
      <div className="container">
        <SectionHeader tag={s.tag} title={s.title} subtitle={s.subtitle} />
        <div className="how-it-works-grid">
          {s.items.map((step, i) => (
            <Reveal key={step.title} className="step" delay={i * 150}>
              <div className="step-icon">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
