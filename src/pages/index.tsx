import Head from 'next/head'

import { TopPage } from '@/components/page/Top'

const Top = () => {
  return (
    <>
      <Head>
        <title>Top Page</title>
        <meta name='description' content='Top Page' />
      </Head>
      <TopPage />
    </>
  )
}

export default Top
