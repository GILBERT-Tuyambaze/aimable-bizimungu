import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import SportsPhysio from '@/components/SportsPhysio'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FutureGoals from '@/components/FutureGoals'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PWAInstallBanner from '@/components/PWAInstallBanner'

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <SportsPhysio />
      <Experience />
      <Skills />
      <Gallery />
      <Testimonials />
      <FutureGoals />
      <Contact />
      <Footer />
      <PWAInstallBanner />
    </div>
  )
}