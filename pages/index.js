import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import Clients from '../components/sections/Clients'
import Features from '../components/sections/Features'
import Pricing from '../components/sections/Pricing'
import Steps from '../components/sections/Steps'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/sections/Faq'
import FinalCta from '../components/sections/FinalCta'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Clients />
      <Features />
      <Pricing />
      <Steps />
      <Testimonials />
      <Faq />
      <FinalCta />
    </Layout>
  )
}
