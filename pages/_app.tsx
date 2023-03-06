import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout';
import { DynaPuff } from '@next/font/google';

const dynaPuff = DynaPuff({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <main className= { dynaPuff.className }>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ChakraProvider>
  )
}
