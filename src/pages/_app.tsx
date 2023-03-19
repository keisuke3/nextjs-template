import { Global } from '@emotion/react'
import { Noto_Sans_JP } from '@next/font/google'

import { globalCss } from '@/styles/globals'
import { resetCss } from '@/styles/reset'

import type { AppProps } from 'next/app'

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '700'],
  subsets: ['japanese'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={[resetCss, globalCss]} />
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
