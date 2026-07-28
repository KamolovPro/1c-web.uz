import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { GaugeCircle, ShieldCheck, PiggyBank, Headphones, Globe } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

const ICONS = {
  gauge: GaugeCircle,
  shield: ShieldCheck,
  savings: PiggyBank,
  support: Headphones,
  globe: Globe,
}

export default function Features() {
  const { t } = useApp()

  return (
    <section id="features" className="section">
      <div className="container">
        <SectionHeader tag={t.features.tag} title={t.features.title} />
        <Reveal>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="features-swiper"
          >
            {t.features.items.map((item) => {
              const Icon = ICONS[item.icon] || Globe
              return (
                <SwiperSlide key={item.title}>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Icon size={32} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
