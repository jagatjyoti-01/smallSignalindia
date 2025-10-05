import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/shared/Header'
import HeroSlider from './components/ui/Hero'
import Footer from './components/shared/Fotter'
import BrandMarquee from './components/ui/Home/BrandMarquee'
import Transforming from './components/ui/Home/Transforming'
import ServicesSection from './components/ui/Home/ServicesSection'
import StatsSection from './components/ui/Home/StatsSection'
import BlogAndTestimonials from './components/ui/Home/BlogAndTestimonials'
import BlogSection from './components/ui/Home/BlogSection'
import HighlightsSection from './components/ui/Home/HighlightsSection'
import Process from './components/ui/Home/Process'
import IndustryPresence from './components/ui/Home/IndustryPresence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <div className="text-4xl font-[var(--font-display)] bg-[var(--color-avocado-100)] text-[var(--color-blue-500)]">
  hello
</div>    */}

    <Header />
    <HeroSlider />
    <BrandMarquee />
    <Transforming />
    <ServicesSection />
    <StatsSection />
   <IndustryPresence />
    <HighlightsSection />
    <BlogAndTestimonials />
    <Process />
     <BlogSection />

   <Footer />

 </>
  )
}

export default App
