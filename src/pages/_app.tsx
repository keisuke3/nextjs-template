import '@/styles/reset.css'
import '@/styles/globals.css'
import { Noto_Sans_JP } from '@next/font/google'

import type { AppProps } from 'next/app'

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '700'],
  subsets: ['japanese'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJp.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default App
