import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      
      <Component {...pageProps} />

      <footer className="py-3 text-center">
        <span>
          © Copyright 2022 ImDinnerCat - All Rights Reserved.
        </span>
        <span className="mb-1">
          Made with <i className="fa-solid fa-heart"></i> by ImDinnerCat using Next.js, Bootstrap & Font Awesome
        </span>
      </footer>
    </>
  )
}

export default MyApp