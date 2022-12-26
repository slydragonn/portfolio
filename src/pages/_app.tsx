import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout, Navbar, Footer } from 'components'
import { useTheme } from 'hooks'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function App({ Component, pageProps }: AppProps) {
  const {theme, toggleTheme} = useTheme()
  const {route} = useRouter()

  return (
    <>
      <Head>
          <link rel="icon" href="/dragon.png" />
        </Head>
      <div className="font-raleway bg-[#fffbf9] dark:bg-[#1e1e1e]">
        <Navbar handleTheme={{theme, toggleTheme}}/>
        <MainLayout>
          <AnimatePresence 
            mode='wait' 
            initial={true} 
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={route}/>
          </AnimatePresence>
        </MainLayout>
        <Footer />
      </div>
    </>
  )
}
