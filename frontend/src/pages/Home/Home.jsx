import React from 'react'
import HeroSlider from '../../components/ui/Hero'
import BrandMarquee from '../../components/ui/Home/BrandMarquee'
import Transforming from '../../components/ui/Home/Transforming'
import ServicesSection from '../../components/ui/Home/ServicesSection'
import StatsSection from '../../components/ui/Home/StatsSection'
import IndustryPresence from '../../components/ui/Home/IndustryPresence'
import HighlightsSection from '../../components/ui/Home/HighlightsSection'
import BlogAndTestimonials from '../../components/ui/Home/BlogAndTestimonials'
import Process from '../../components/ui/Home/Process'
import BlogSection from '../../components/ui/Home/BlogSection'
import ContactUs from '../../components/ui/Home/ContactUs'

function Home() {
  return (
    <div>
         <HeroSlider />
    <BrandMarquee />
    <Transforming />

    {/* what we do  */}
    <ServicesSection />
     {/* counting section */}
    <StatsSection />   
   <IndustryPresence />

   {/* why chose us  */}
    <HighlightsSection />


    <BlogAndTestimonials />

    
    <Process />
     <BlogSection />
    <ContactUs />
    </div>
  )
}

export default Home