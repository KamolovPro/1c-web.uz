import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { User } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from '../Reveal'
import { useApp } from '../AppContext'

// Отзывы — демо-плейсхолдеры. Замените на реальные перед публикацией.
export default function Testimonials() {
  const { t } = useApp()
  const tm = t.testimonials

  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeader tag={tm.tag} title={tm.title} light />
        <Reveal>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            navigation
            className="testimonials-swiper"
          >
            {tm.items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <p className="testimonial-quote">{item.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <User size={26} />
                    </div>
                    <div className="author-info">
                      <h4>{item.author}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
