import { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '@/components';
import { HomeHero } from '../Layout';
import { PageCV } from '@/Layout/Home/PageCV';
import { Porto } from '@/Layout/Home/PortoList';
import { Footer } from '@/Layout/Home/Footer';

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>My Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-auto">
        <Header />     
          <section>              
          <div>
            <HomeHero />
          </div>  
          <PageCV />                
          <div className="bg-black overflow-hidden relative" >
            <Porto />
          </div>      
        </section>   
          <Footer />          
      </main>
    </div>
  );
}
