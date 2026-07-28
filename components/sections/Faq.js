import { ChevronDown } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

export default function Faq() {
  const { t } = useApp()

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeader tag={t.faq.tag} title={t.faq.title} />
        <Reveal className="faq-list">
          {t.faq.items.map((item, i) => (
            <details key={i}>
              <summary>
                <span>{item.q}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
