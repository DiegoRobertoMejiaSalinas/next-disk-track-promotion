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

            <BuyDiscButton className="mt-5 sator px-10 h-15"></BuyDiscButton>
          </div>

          <Disc
            className="relative w-full max-w-lg lg:max-w-lg mb-[15rem] right-20"
            // className="relative mt-5 lg:pt-0 w-full max-w-lg lg:max-w-lg lg:right-[10rem]  lg:absolute lg:top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="relative  w-full container gap-6 flex flex-col mt-[3rem] -mb-40">
        <TrackTable></TrackTable>
      </div>

      <div className="relative w-full bg-light-oblivion dark:bg-oblivion">
        <div className="container flex-col flex justify-center items-center pt-60 pb-20">
          <LargeHeading2 size={"xl"} className="sator">
            Buy Joji Official Merch
          </LargeHeading2>
          <Paragraph size={"lg"} className="mt-5">
            Due this is an unofficial page, we can&apos;t sell Joji merchandise,
            however, we want to redirect you to the official store where
            you&apos;ll be able to purchase Joji merchandise.
          </Paragraph>

          <div className="flex gap-40 container pt-32">
            <div className="w-full">
              <div className="relative aspect-square">
                <Image
                  className="object-contain"
                  alt="Diego Mejia BicoDev Joji"
                  src={
                    "https://res.cloudinary.com/purplesoda/image/upload/v1695590296/Test%20Projects/Joji%20Album%20Collection/SMITHEREENS_Standard_CD_58e3cf9b-3060-409c-87c7-4887794aea05_1_x5imcw.webp"
                  }
                  fill
                />
              </div>
              <Paragraph
                size={"xl"}
                className="text-dark-gold dark:text-light-gold font-regular mt-5 sator"
              >
                SMITHEREENS CD
              </Paragraph>
            </div>
            <div className="w-full">
              <div className="relative aspect-square">
                <Image
                  className="object-contain"
                  alt="Diego Mejia BicoDev Joji"
                  src={
                    "https://res.cloudinary.com/purplesoda/image/upload/v1695590296/Test%20Projects/Joji%20Album%20Collection/JOJI-Sudadera-con-cuello-redondo-para-hombre-y-mujer-jersey-de-manga-larga-estilo-urbano-Invierno_1_tukcg9.webp"
                  }
                  fill
                />
              </div>
              <Paragraph
                size={"xl"}
                className="text-dark-gold dark:text-light-gold font-regular mt-5 sator"
              >
                SMITHEREENS HOODIE
              </Paragraph>
            </div>
            <div className="w-full">
              <div className="relative aspect-square">
                <Image
                  className="object-contain"
                  alt="Diego Mejia BicoDev Joji"
                  src={
                    "https://res.cloudinary.com/purplesoda/image/upload/v1695610072/Test%20Projects/Joji%20Album%20Collection/replicate-prediction-i5v3zxrb2fafnpyex3vq6db5r4_wsz5dn.webp"
                  }
                  fill
                />
              </div>
              <Paragraph
                size={"xl"}
                className={`text-dark-gold dark:text-light-gold font-regular mt-5 sator`}
              >
                SMITHEREENS VINYL
              </Paragraph>
            </div>
          </div>

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
        <div className="flex flex-col gap-20 justify-start lg:justify-center items-center lg:items-start pt-20 container">
          <LargeHeading2
            size={"xl"}
            className="sator text-dark-gold dark:text-dark-gold"
          >
            Get Tickets for Upcoming Concerts
          </LargeHeading2>

          <div className="w-1/2 mt-24">
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
              className="text-left mt-16 text-slate-800 dark:text-slate-300"
              size={"xl"}
            >
              We want to remember you this isn&apos; an official Joji website,
              this is a personal project made by Diego Mejia, a big Joji fan.
            </Paragraph>
            <a
              href="https://jojimusic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="mt-16 sator"
                round={"non-rounded"}
                variant={"outline"}
                size={"xl"}
              >
                Get Tickets
              </Button>
            </a>
          </div>
        </div>

        <JojiPerson className="absolute bottom-0 right-0" />
      </div>
    </>
  );
}
