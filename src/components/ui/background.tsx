'use client'

import Spline from "@splinetool/react-spline";

export default function Background() {
 
  return (
    <main>
    <div className="-z-10 fixed top-0 w-[110vw]">     
     <Spline 
        scene="https://prod.spline.design/SaZYhmR8Ga5Uy6Av/scene.splinecode" 
      />
      </div>

    </main>
  );
}