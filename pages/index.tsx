import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Header from '../components/Header';

const Home: NextPage = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    if (!isAuthenticated) {
        return (
           <Login />
        );
    }

  return (
    <div className="h-screen  overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse World 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <div className="max-w-screen-2xl mx-auto">
                <Header />

            </div>
        <button onClick={logout}>Logout from here ❤️</button>
    </div>
  )
}

export default Home
