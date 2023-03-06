import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Box, Input } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>iMeat</title>
        <meta name="description" content="Meat ordering app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bgColor={'red'}>
        <Header />
        imeat, your quality meat portal!

        <Footer />
        
      </Box>
    </>
  )
}
