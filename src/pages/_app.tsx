import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout, Navbar, ContentLayout } from 'components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <Component {...pageProps} />
      </ContentLayout>
    </MainLayout>
  )
}
