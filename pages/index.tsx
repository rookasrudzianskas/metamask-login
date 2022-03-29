import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Metaverse World 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>Welcome to the Metaverse world 🚀</h1>
        <Login />

    </div>
  )
}

export default Home
