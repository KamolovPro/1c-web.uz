import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import LeadModal from './LeadModal'
import { useApp } from './AppContext'

export default function Layout({ children }) {
  const { t } = useApp()

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <LeadModal />
    </>
  )
}
