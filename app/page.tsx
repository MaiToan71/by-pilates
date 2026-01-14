import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import Programs from '@/components/sections/Programs'
import Instructor from '@/components/sections/Instructor'
import Transformations from '@/components/sections/Transformations'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <Programs />
        <Instructor />
        <Transformations />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
