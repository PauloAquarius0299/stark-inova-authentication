import Clients from '@/components/Home/Clients'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Hero from '@/components/Home/Hero'
import LogosTicker from '@/components/Home/LogosTicker'
import Princing from '@/components/Home/Princing'
import ProductShowcase from '@/components/Home/ProductShowcase'
import SignToPage from '@/components/Home/SignToPage'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogosTicker />
      <ProductShowcase />
      <Princing />
      <Clients/>
      <SignToPage />
      <Footer />
    </main>
  )
}