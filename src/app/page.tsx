import LargeHeading2 from "@/components/ui/LargeHeading2";
import Image from "next/image";
import ParallaxText from "@/components/ui/ParallaxText";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { Plaster } from "next/font/google";
import LargeHeading from "@/components/ui/LargeHeading";
import Button from "@/components/ui/Button";
import TrackTable from "@/components/TrackTable";
import Track from "@/components/Track";
import Disc from "@/components/Disc";

const plaster = Plaster({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Track />

      <div className="relative flex flex-col overflow-hidden ">
        <div className="relative top-0 left-0">
          <ParallaxWrapper>
            <ParallaxSection baseVelocity={4}>
              <ParallaxText size={"lg"} className={plaster.className}>
                JOJI NEW COMING TRACKS
              </ParallaxText>
            </ParallaxSection>
          </ParallaxWrapper>
          <ParallaxWrapper>
            <ParallaxSection baseVelocity={-4}>
              <ParallaxText size={"lg"} className={plaster.className}>
                JOJI NEW COMING TRACKS
              </ParallaxText>
            </ParallaxSection>
          </ParallaxWrapper>
        </div>

        <div className="relative h-full gap-6 flex justify-start lg:justify-between container items-center lg:items-center mt-[10rem]">
          <div className=" flex flex-col justify-start lg:justify-center items-center lg:items-start">
            <LargeHeading size={"lg"}>
              Joji <br />
              <span className="text-light-gold dark:text-light-gold">
                The Smithereens
              </span>
            </LargeHeading>
            <Button
              className="mt-5"
              round={"non-rounded"}
              size={"lg"}
              variant={"outline"}
            >
              Buy disc
            </Button>
          </div>

          <Disc
            className="relative w-full max-w-lg lg:max-w-lg mb-[15rem] right-20"
            // className="relative mt-5 lg:pt-0 w-full max-w-lg lg:max-w-lg lg:right-[10rem]  lg:absolute lg:top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="relative  w-full container gap-6 flex flex-col mt-[5rem] pb-20">
        <TrackTable></TrackTable>
      </div>

      <div className="relative h-screen w-full dark:bg-oblivion">
        <div className="container flex-col flex justify-center items-center pt-20">
          <LargeHeading2 size={"lg"}>Buy Joji Official Merch</LargeHeading2>
        </div>
      </div>
    </>
  );
}
