import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    if (!isAuthenticated) {
        return (
           <Login />
        );
    }

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse World 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>Welcome to the app</h1>
        {/* Header */}
        {/* Messages */}
        {/* Footer */}
        <button onClick={logout}>Logout from here ❤️</button>
    </div>
  )
}

export default Home
