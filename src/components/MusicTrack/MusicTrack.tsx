import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./MusicTrack.module.css";
import { cn } from "@/lib/cn";
import Image from "next/image";
import MusicSingleTrack from "../MusicSingleTrack/MusicSingleTrack";

interface MusicTrackProps {
  currentTrack: number;
}

const MusicTrack: FC<MusicTrackProps> = ({ currentTrack }) => {
  const controls = useAnimation();
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    controls.start("rotate");
    setRotate(rotate + 1);
  }, [currentTrack]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-1 bg-slate-100 dark:bg-slate-900"
      style={{ overflow: "hidden" }}
    >
      <MusicSingleTrack
        controls={controls}
        currentTrack={currentTrack}
        delayLevel={0}
        rotate={rotate}
        className={`z-20 ${styles.first_circle}`}
      ></MusicSingleTrack>
      <MusicSingleTrack
        controls={controls}
        currentTrack={currentTrack}
        delayLevel={1}
        rotate={rotate}
        className={`z-10 ${styles.second_circle}`}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-slate-900 opacity-40 z-20"></div>
      </MusicSingleTrack>
      <MusicSingleTrack
        controls={controls}
        currentTrack={currentTrack}
        delayLevel={2}
        rotate={rotate}
        className={`z-0 ${styles.third_circle}`}
      ></MusicSingleTrack>

      <div className="absolute top-0 left-0 opacity-40 w-full h-full bg-slate-950 z-40"></div>
    </motion.div>
  );
};

export default MusicTrack;
