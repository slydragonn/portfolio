import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Main from '../components/layouts/main'

export default function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Main>
        <AnimatePresence exitBeforeEnter={true} initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </Chakra>
  )
}
