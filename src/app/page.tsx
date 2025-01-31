import { validateRequest } from '@/auth'
import Clients from '@/components/Home/Clients'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import LogosTicker from '@/components/Home/LogosTicker'
import Princing from '@/components/Home/Princing'
import ProductShowcase from '@/components/Home/ProductShowcase'
import Service from '@/components/Home/Services'
import SignToPage from '@/components/Home/SignToPage'

export default async function Home() {
  const { username } = await validateRequest(); 
  return (
    <main>
      <Header username={username}  />
      <Hero />
      <LogosTicker />
      <ProductShowcase />
      <Princing />
      <Service />
      <Clients/>
      <SignToPage />
      <Footer />
    </main>
  )
}