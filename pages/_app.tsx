import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// import { Modak } from '@next/font/google';

// const modak = Modak({subsets: ['latin'], weight: ['400']});
// <div className={modak.className}> </div>

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <Component {...pageProps} />
    
  );
}

