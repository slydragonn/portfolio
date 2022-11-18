import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout, Navbar, Footer } from 'components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-raleway">
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </div>
  )
}
