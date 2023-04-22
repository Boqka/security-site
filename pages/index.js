import Head from 'next/head'
import Header from '@/pages/sections/Header';
import ReviewsSection from '@/pages/sections/ReviewsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Security Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <ReviewsSection />
      </main>
    </>
  )
}
