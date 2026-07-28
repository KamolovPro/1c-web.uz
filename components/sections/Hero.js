import { ArrowDownToLine, Rocket, CheckCircle } from 'lucide-react'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

const HERO_IMAGE =
  'https://1solution.uz/upload/medialibrary/556/aha7xbqjq68zuuz88f1ibhbbrlgzarzt/Picsart_25_03_28_11_36_30_957.png'

export default function Hero() {
  const { t, openModal } = useApp()
  const h = t.hero

  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal as="h1">{h.title}</Reveal>
        <Reveal className="subtitle" as="p" delay={80}>
          {h.subtitle}
        </Reveal>

        <Reveal className="hero-cta-buttons" delay={160}>
          <a href="#prices" className="btn btn-primary hero-pulse">
            <ArrowDownToLine size={18} />
            <span>{h.ctaPrimary}</span>
          </a>
          <button className="btn btn-outline" onClick={() => openModal()}>
            <Rocket size={18} />
            <span>{h.ctaSecondary}</span>
          </button>
        </Reveal>

        <Reveal className="hero-trust-bar" delay={240}>
          {h.trust.map((item) => (
            <div className="trust-item" key={item}>
              <CheckCircle size={18} />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="hero-image-mockup" delay={320}>
          {/* Внешнее изображение из существующего проекта — при желании замените на своё. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMAGE} alt={h.mockupAlt} loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}
