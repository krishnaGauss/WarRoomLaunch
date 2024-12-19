'use client'

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function Logo() {
 
  return (
    <main>
    <div className="flex justify-center items-center h-[80vh] w-[120vw] -translate-x-32 overflow-x-hidden">  
     
     <Spline 
        scene="https://prod.spline.design/u5O5egtW3yr1T84D/scene.splinecode" 
      />
      
      {/* <div className="relative top-[70vh] right-40 bg-gradient-to-r from-green-300 to-violet-500 p-4 h-12 text-black font-semibold font-mono w-40 text-sm rounded-full">Made with love</div> */}
      </div>

    </main>
  );
}