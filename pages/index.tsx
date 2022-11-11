import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Martin Unix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
        <a
          className="flex items-center justify-center gap-2"
          href="https://j03yk1n9.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          .   Made with love by{' '}
          <Image src="/heart.svg" alt="JoeyKing Logo" width={36} height={8} />
          J03y K1n9
        </a>
      </footer>
    </div>
  )
}

export default Home
