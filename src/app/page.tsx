import LargeHeading2 from "@/components/ui/LargeHeading2";
import Track from "@/components/Track/Track";
import Image from "next/image";
import ParallaxText from "@/components/ui/ParallaxText";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { Plaster } from "next/font/google";

const plaster = Plaster({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <div className="max-h-screen ">
        <div className="">
          <Track />
        </div>

        <div className="relative h-screen flex flex-col overflow-x-hidden">
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
      </div>
    </>
  );
}
