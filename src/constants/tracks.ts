export const TRACK_TITLES = [
  "Slow dancing in the dark",
  "Nitrous",
  "1AM Freestyle",
];
export const TRACK_MP3_URL = [
  "/tracks/slow_dancing.mp3",
  "/tracks/nitrous.mp3",
  "/tracks/1am_freestyle.mp3",
];

interface ITrackItem {
  title: string;
  musicUrl: string;
  imageUrl: string;
}

export const TRACKS: ITrackItem[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1695479593/Test%20Projects/Joji%20Album%20Collection/pexels-isaac-weatherly-2131647_fgj8gs.webp",
    musicUrl: "/tracks/slow_dancing.mp3",
    title: "Slow Dancing in the dark",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/ilona-bellotto-rbPplWrpgcU-unsplash_djyw93.webp",
    musicUrl: "/tracks/nitrous.mp3",
    title: "Nitrous",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1695479594/Test%20Projects/Joji%20Album%20Collection/pexels-alex-umbelino-18280489_f5kdqu.webp",
    musicUrl: "/tracks/1am_freestyle.mp3",
    title: "1AM Freestyle",
  },
];
