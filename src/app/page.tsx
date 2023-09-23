import LargeHeading2 from "@/components/ui/LargeHeading2";
import Track from "@/sections/Track/Track";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Track />
    </>
    // <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
    //   <div className="absolute top-0 left-0 w-full h-full z-1">
    //     <div className="relative w-full h-full">
    //       <Image
    //         alt="Slow dancing in the dark"
    //         src={
    //           "https://res.cloudinary.com/purplesoda/image/upload/v1695479593/Test%20Projects/Joji%20Album%20Collection/pexels-isaac-weatherly-2131647_fgj8gs.webp"
    //         }
    //         fill
    //         sizes="(max-width: 576px) 100vw, (max-width: 768px) 85vw, (max-width: 1200px) 75vw, 66vw"
    //       />
    //     </div>
    //     <div className="absolute top-0 left-0 opacity-40 z-2 w-full h-full bg-slate-950"></div>
    //   </div>
    //   <div className="relative z-10 container max-w-7xl mx-auto w-full h-full ">
    //     <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start ">
    //       <LargeHeading2 size={"lg"}>Slow dancing in the dark</LargeHeading2>
    //     </div>
    //   </div>
    // </div>
  );
}
