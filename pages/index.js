import Layout from '../components/Layout'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons()
    }
  }, [])

  return (
    <Layout>
      {(t) => (
        <main>
          <section className="hero">
            <div className="container">
              <h1>{t.heroTitle}</h1>
              <p className="subtitle">{t.heroSubtitle}</p>
              <div className="hero-cta-buttons">
                <a href="#prices" className="btn btn-primary">
                  {t.heroBtnTariff}
                </a>
                <a href="#faq" className="btn">
                  {t.heroBtnTrial}
                </a>
              </div>
              <div className="hero-trust-bar">
                <div className="trust-item">{t.trustUptime}</div>
                <div className="trust-item">{t.trustSupport}</div>
                <div className="trust-item">{t.trustEfaktura}</div>
              </div>
            </div>
          </section>
          <section id="features" className="section">
            <div className="container">
              <div className="section-header">
                <h2>{t.navFeatures}</h2>
              </div>
              <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="features-swiper">
                <SwiperSlide>
                  <div className="feature-card">Молниеносная работа</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card">Банковский уровень защиты</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card">Экономия</div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </main>
      )}
    </Layout>
  )
}
