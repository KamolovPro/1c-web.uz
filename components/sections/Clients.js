import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

// ВНИМАНИЕ: логотипы ниже — демо-плейсхолдеры (известные бренды из стартового шаблона).
// Замените на логотипы ваших реальных клиентов или удалите секцию.
const CLIENT_LOGOS = [
  { src: 'https://logobank.uz:8005/media/logos_png/Artel-01.png', alt: 'Клиент' },
  { src: 'https://logobank.uz:8005/media/logos_png/texnomart-01.png', alt: 'Клиент' },
  { src: 'https://logobank.uz:8005/media/logos_png/korzinka-01.png', alt: 'Клиент' },
  { src: 'https://logobank.uz:8005/media/logos_png/Uztelecom-01.png', alt: 'Клиент' },
  { src: 'https://logobank.uz:8005/media/logos_png/Akfa-01.png', alt: 'Клиент' },
]

export default function Clients() {
  const { t } = useApp()

  return (
    <section className="section clients-section">
      <div className="container">
        <Reveal className="clients-heading">{t.clients.heading}</Reveal>
        <Reveal delay={100}>
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="clients-swiper"
          >
            {CLIENT_LOGOS.map((logo, i) => (
              <SwiperSlide key={i} className="client-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
