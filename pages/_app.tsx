import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Bookshelf</title>
      </Head>
      <div className="container mx-auto p-4 lg:px-96 lg:mt-20">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
