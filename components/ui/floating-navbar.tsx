"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SvgComponent from "@/assets/logo";
import { TbBrandDiscord } from "react-icons/tb";
import { HiMenu } from "react-icons/hi"; 
import { HiX } from "react-icons/hi"; 

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
     
      <SvgComponent className="h-20 w-20 fixed top-0 left-0 ml-2 mt-2 z-[10000]" />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-5 inset-x-0 mx-auto dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-10",
            className
          )}
        >
         
          <div className="hidden sm:flex space-x-10">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
            <Link href="https://discord.com" target="_blank">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-30">
                <span className="flex items-center space-x-2">
                  <TbBrandDiscord className="text-xl" />
                  <span>Discord</span>
                </span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </Link>
          </div>

          
          <div className="sm:hidden flex items-center justify-between w-full " style={{marginLeft: "300px"}}>
            <button
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-gray-500 focus:outline-none"
              
            >
              {isOpen ? (
                <HiX className="w-8 h-8" /> 
              ) : (
                <HiMenu className="w-8 h-8" /> 
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      
      {isOpen && (
        <div className="sm:hidden absolute top-20 inset-x-0 bg-white dark:bg-black z-[10000] py-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className={cn(
                  "text-neutral-600 dark:text-neutral-50 text-lg hover:text-neutral-500 dark:hover:text-neutral-300"
                )}
              >
                {navItem.name}
              </Link>
            ))}
            
            <Link href="https://discord.com" target="_blank">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-30">
                <span className="flex items-center space-x-2">
                  <TbBrandDiscord className="text-xl" />
                  <span>Discord</span>
                </span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};