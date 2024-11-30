'use client'

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function Logo() {
 
  return (
    <main>
    <div className="flex justify-center mx-auto h-[80vh] w-full overflow-hidden">  
     
     <Spline 
        scene="https://prod.spline.design/Wlr6i8woXkR33qxp/scene.splinecode" 
      />
      
      <div className="relative top-[70vh] right-40 bg-gradient-to-r from-green-300 to-violet-500 p-4 h-12 text-black font-semibold font-mono w-40 text-sm rounded-full">Made with love</div>
      </div>

    </main>
  );
}