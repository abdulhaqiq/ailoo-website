import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Statistics from '@/components/sections/statistics'
import ReserveAccount from '@/components/sections/reserve-account'
import CompanyStats from '@/components/sections/company-stats'
import Pricing from '@/components/sections/pricing'
import CTA from '@/components/sections/cta'
import FAQ from '@/components/sections/faq'
import DriverCTA from '@/components/sections/driver-cta'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <ReserveAccount />
        <CompanyStats />
        <Pricing />
        <CTA />
        <FAQ />
        <DriverCTA />
      </main>
      <Footer />
    </div>
  );
}
