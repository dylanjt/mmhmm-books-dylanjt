import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container mx-auto md:px-96 md:mt-20">
      <Component {...pageProps} />
    </div>
  )
}

export default App
