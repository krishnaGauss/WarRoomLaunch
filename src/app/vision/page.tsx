import { WobbleCard } from "@/components/ui/wobble-card";

const Vision = () => {
  return (<div className="flex flex-col items-center">
      <h1 className="text-white text-6xl m-12 font-mono font-semibold">Vision</h1>
    <div className="bg-black items-center mx-auto  min-h-screen rounded-lg  border-stone-500 w-[90vw]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-8 lg:px-10 py-8">
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 md:h-[60vh] h-[60vh] bg-[#12f286]/70">
          <div className="grid grid-cols-4  gap-2">
            <div className="col-span-4 text-white font-dynapuff tracking-wider font-semibold text-3xl sm:text-4xl md:text-5xl -mt-14 sm:pb-2 md:pb-0">
              <h2>Community builder for your Community.</h2>
            </div>
            <div className="flex items-start justify-center col-span-4 md:col-span-2 mt-1 md:mt-0  text-white font-poppins font-normal sm:text-base md:text-xl ">
              <p className="md:mt-10 ">
                Empowering communities, one connection at a time. Build, grow,
                and thrive together because strong communities create a better
                world.
              </p>
            </div>
            <div className="col-end-1 col-span-2 md:col-span-2   sm:mt-2 md:mt-0 h-[40vh] flex items-end justify-end">
              <img
                src="/vision_globe2.png"
                alt="connecting_people"
                height={200}
                width={300}
                className="w-[40vh] md:w-[60vh] md:h-[40vh] rounded-tl-xl relative -right-14 md:-right-11 -bottom-10"
              />
            </div>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-black/80 md:h-[60vh] sm:h-[45vh]">
          <div className="text-white font-dynapuff font-semibold tracking-wider text-2xl sm:text-3xl md:text-4xl  p-4 flex items-center justify-center">
            <h2>Connect with people across the globe and learn new things</h2>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#630ce5]/80 h-[50vh] sm:h-[40vh]">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-3 -mt-16 text-white  p-4">
              <h2 className="font-dynapuff font-semibold tracking-wider text-3xl sm:text-4xl md:text-5xl">
                Rolling our brainchild soon !!
              </h2>
            </div>
            <div className="pl-4 col-span-2 ">
              <p className="mt-2 font-poppins text-sm text-white sm:text-base md:text-xl">
                Join us on Discord for the latest updates.
              </p>
            </div>
            <div className="flex items-end justify-end  col-start-2 w-[50vw]">
              <img
                src="/vision_web.png"
                alt="wrcc website"
                height={400}
                width={400}
                className="relative sm:-right-10 right-2 md:-right-14 -bottom-10 rounded-tl-lg md:bottom-16 w-[50vw] md:w-[35vw] h-[30vh] md:h-[50vh]"
              />
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
    </div>
  );
};

export default Vision;
