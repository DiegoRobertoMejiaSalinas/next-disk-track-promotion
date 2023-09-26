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
import Paragraph from "@/components/ui/Paragraph";
import JojiPerson from "@/components/JojiPerson";
import BuyDiscButton from "@/components/BuyDiscButton";
import Merch from "@/components/Merch";

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

        <div className="relative gap-6 flex flex-col lg:flex-row justify-start lg:justify-between container items-center lg:items-center mt-20 md:mt-[10rem] px-5 md:px-0 lg:px-10 xl:px-0 overflow-x-hidden overflow-y-hidden">
          <div className="flex flex-col justify-start lg:justify-center items-center lg:items-start lg:basis-2/3">
            <LargeHeading size={"lg"}>
              Joji <br />
              <span className="text-light-gold dark:text-light-gold">
                The Smithereens
              </span>
            </LargeHeading>
            <BuyDiscButton className="mt-5 sator px-10 h-15"></BuyDiscButton>
          </div>

          <Disc className="relative w-full max-w-lg lg:max-w-lg mb-20 lg:mb-[10rem] xl:mb-[15rem] right-0 lg:right-20 lg:basis-1/3" />
        </div>
      </div>

      <div className="relative w-full container gap-6 flex flex-col mt-10 md:mt-[3rem] lg:mt-[3rem] -mb-40 overflow-x-hidden overflow-y-hidden px-4 md:px-10 lg:px-16">
        <TrackTable></TrackTable>
      </div>

      <div className="relative w-full bg-light-oblivion dark:bg-oblivion">
        <div className="container flex-col flex justify-center items-center pt-60 xl:pt-72 pb-16 md:pb-20 px-4 md:px-10 lg:px-32">
          <LargeHeading2 size={"xl"} className="sator">
            Buy Joji Official Merch
          </LargeHeading2>
          <Paragraph size={"lg"} className="mt-5">
            Due this is an unofficial page, we can&apos;t sell Joji merchandise,
            however, we want to redirect you to the official store where
            you&apos;ll be able to purchase Joji merchandise.
          </Paragraph>

          <Merch className="store gap-10 md:gap-x-20 md:gap-y-20 lg:gap-y-32 xl:gap-x-60 xl:gap-y-40 container pt-12 md:pt-32 lg:pt-20 xl:pt-28 px-10 md:px-12 lg:px-0" />

          <a
            href={"https://shop.jojimusic.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={"xl"}
              round={"non-rounded"}
              variant={"outline"}
              className="sator mt-20"
            >
              Go to Store
            </Button>
          </a>
        </div>
      </div>

      <div className="relative w-full h-screen">
        <div className="flex flex-col gap-4 lg:gap-20 justify-start lg:justify-center items-center lg:items-start pt-20 container px-5 md:px-0 lg:px-28">
          <LargeHeading2
            size={"xl"}
            className="sator text-dark-gold dark:text-dark-gold"
          >
            Get Tickets for Upcoming Concerts
          </LargeHeading2>

          <div className="w-full md:w-2/3 mt-10 md:mt-24 lg:mt-10">
            <Paragraph
              className="text-left text-slate-800 dark:text-slate-300"
              size={"doubleXl"}
            >
              You can watch the Upcoming concerts <br />
              by following the{" "}
              <a
                href="https://jojimusic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-gold dark:text-dark-gold font-semibold"
              >
                Official Joji Pandemonium Website.
              </a>
            </Paragraph>
            <Paragraph
              className="text-left mt-10 md:mt-12 lg:mt-16 text-slate-800 dark:text-slate-300"
              size={"xl"}
            >
              We want to remember you this isn&apos;t an official Joji website,
              this is a personal project made by Diego Mejia, a big Joji fan.
            </Paragraph>
            <a
              href="https://jojimusic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="mt-16 sator mx-auto w-2/3 md:w-3/4 lg:w-1/4 md:px-0"
                round={"non-rounded"}
                variant={"outline"}
                size={"xl"}
              >
                Get Tickets
              </Button>
            </a>
          </div>
        </div>

        <JojiPerson className="relative mt-16 md:mt-24 lg:absolute bottom-0 right-0" />
      </div>
    </>
  );
}
