
import Footer from '@/components/ui/Footer'
import Logo from '@/components/ui/logo'
import { Navbar } from '@/components/ui/Navbar'
import React, { Suspense } from 'react'
import Vision from './vision/page'
import Testimonial from './testimonials/page'
import Team from './team/page'
import Background from '@/components/ui/background'
import Loading from '@/components/ui/Loading'



const App = () => {
  return (
      
    <div className='text-4xl justify-center overflow-x-hidden bg-transparent'> 
    <Suspense fallback={<Loading/>}>
    <Navbar/>
   
    <Logo/>
    
    <Vision/>
    <Testimonial/>
    <Team/>
    <Background/>
    <hr className="w-full mb-8"/>
    <Footer/>
    </Suspense>
    </div>
    
  )
}

export default App