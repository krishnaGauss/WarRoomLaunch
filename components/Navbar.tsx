"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconInfoCircle, IconMessage, IconUser } from "@tabler/icons-react";
import SvgComponent from "@/assets/logo";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Vision",
      link: "/vision",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Testinomial",
        link: "/testinomial",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
   
    {
      name: "Team",
      link: "/team",
      icon: (
        < IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
      ), }
  ];
  return (
   
      
    <div className="relative  w-full">
        
      <FloatingNav navItems={navItems} />
      
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
   
    <div className="grid grid-cols-1 h-[200rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
     
    </div>
  );
};
