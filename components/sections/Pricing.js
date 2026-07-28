import { Check } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

export default function Pricing() {
  const { t, openModal } = useApp()
  const p = t.pricing

  return (
    <section id="prices" className="section">
      <div className="container">
        <SectionHeader tag={p.tag} title={p.title} subtitle={p.subtitle} />
        <div className="pricing-grid">
          {p.plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              className={`price-card ${plan.highlighted ? 'popular' : ''}`}
              delay={i * 100}
            >
              {plan.highlighted && <span className="tag">{p.popularLabel}</span>}
              <h3>{plan.name}</h3>
              <p>{plan.desc}</p>
              <div className={`price ${plan.priceNote ? '' : 'price-custom'}`}>
                {plan.price}
                {plan.priceNote && <span> {plan.priceNote}</span>}
              </div>
              <ul>
                {plan.features.map((feat) => (
                  <li key={feat}>
                    <Check size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-dark'} price-cta`}
                onClick={() => openModal(plan.name)}
              >
                {plan.cta}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
