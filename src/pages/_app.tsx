import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout, Navbar, Footer } from 'components'
import { useTheme } from 'hooks'

export default function App({ Component, pageProps }: AppProps) {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className="font-raleway bg-[#fffbf9] dark:bg-[#1e1e1e]">
      <Navbar handleTheme={{theme, toggleTheme}}/>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </div>
  )
}
