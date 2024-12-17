
import Footer from '@/components/ui/Footer'
import Logo from '@/components/ui/logo'
import { Navbar } from '@/components/ui/Navbar'
import React from 'react'
import Vision from './vision/page'
import Testimonial from './testimonials/page'
import Team from './team/page'


const App = () => {
  return (
    <div className='text-4xl justify-center bg-black'> 
      
    <Navbar/>
    <Logo/>
    <Vision/>
    <Testimonial/>
    <Team/>
    <hr className="w-full mb-8"/>
    <Footer/>
   
    </div>
  )
}

export default App