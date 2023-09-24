import LargeHeading2 from "@/components/ui/LargeHeading2";
import Track from "@/components/Track/Track";
import Image from "next/image";
import ParallaxText from "@/components/ui/ParallaxText";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { Plaster } from "next/font/google";
import LargeHeading from "@/components/ui/LargeHeading";

const plaster = Plaster({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <div className="max-h-screen ">
        <Track />

        <div className="relative h-screen flex flex-col overflow-hidden">
          <div className="absolute top-0 left-0">
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

          <div className="relative h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
            <LargeHeading size={"lg"} className="ml-20 mt-20">
              Joji <br />
              <span className="text-light-gold dark:text-light-gold">
                The Smithereens
              </span>
            </LargeHeading>

            <div className="relative pt-5 lg:pt-0 w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute lg:top-1/2 -translate-y-1/2">
              <Image
                alt="Joji Smithereens"
                src={
                  "https://res.cloudinary.com/purplesoda/image/upload/v1695532757/Test%20Projects/Joji%20Album%20Collection/replicate-prediction-3nspaozbl6x6rrib2n2mgujzbq_1_v0daac.webp"
                }
                quality={100}
                className="object-contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
