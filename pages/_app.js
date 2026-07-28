import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { AppProvider } from '../components/AppContext'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
