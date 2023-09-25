"use client";

import { FC, Key } from "react";
import {
  Table as NextTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { AppleMusic } from "@/icons/apple-music";
import { Spotify } from "@/icons/spotify";

export interface ITableColumn {
  key: string;
  label: string;
}

export interface ITableRow {
  key: string;
  [additionalKey: string]: string;
}

interface TableProps {}

const columns: ITableColumn[] = [
  {
    key: "number",
    label: "TRACK NUMBER",
  },
  {
    key: "name",
    label: "SONG",
  },
  {
    key: "duration",
    label: "DURATION",
  },
  {
    key: "musicUrl",
    label: "LISTEN IT ON",
  },
];

const rows: ITableRow[] = [
  {
    key: "1",
    number: "1",
    name: "Glimpse Of Us",
    duration: "3:53 min",
    appleMusicLink:
      "https://music.apple.com/pe/album/glimpse-of-us/1625328890?i=1625328892",
    spotifyMusicLink: "https://open.spotify.com/track/4ewazQLXFTDC8XvCbhvtXs",
  },
  {
    key: "2",
    number: "2",
    name: "Feeling Like The End",
    duration: "1:42 min",
    appleMusicLink:
      "https://music.apple.com/pe/album/feeling-like-the-end/1640829780?i=1640829783",
    spotifyMusicLink: "https://open.spotify.com/track/1abwytAhbWeHrbsA9eODOy",
  },
  {
    key: "3",
    number: "3",
    name: "Die For You",
    duration: "3:31 min",
    appleMusicLink: "https://open.spotify.com/track/26hOm7dTtBi0TdpDGl141t",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/die-for-you/1640832989?i=1640832993",
  },
  {
    key: "4",
    number: "4",
    name: "Before the Day is Over",
    duration: "3:33 min",
    appleMusicLink: "https://open.spotify.com/track/7zBscbZUCr4jEABrfV9g03",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/before-the-day-is-over/1640829780?i=1640829785",
  },
  {
    key: "5",
    number: "5",
    name: "Dissolve",
    duration: "2:57 min",
    appleMusicLink: "https://open.spotify.com/track/4DYKah8mcZf0O4l9Gt7woU",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/dissolve/1640829780?i=1640829786",
  },
  {
    key: "6",
    number: "6",
    name: "Night Rider",
    duration: "2:07 min",
    appleMusicLink: "https://open.spotify.com/track/1c39AwcrkN9srI7Az5662I",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/night-rider/1640829780?i=1640829788",
  },
  {
    key: "7",
    number: "7",
    name: "BlahBlahBlah Demo",
    duration: "2:22 min",
    appleMusicLink: "https://open.spotify.com/track/0B9D5rzkRgtuAVy4hQ84bD",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/blahblahblah-demo/1640829780?i=1640829789",
  },
  {
    key: "8",
    number: "8",
    name: "Yukon (Interlude)",
    duration: "2:21 min",
    appleMusicLink: "https://open.spotify.com/track/5IPl8JpkbtSH1mdyq5ctSx",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/yukon-interlude/1640829780?i=1640829790",
  },
  {
    key: "9",
    number: "9",
    name: "1AM Freestyle",
    duration: "1:53 min",
    appleMusicLink: "https://open.spotify.com/track/0FqBNLXlTNimxmVRdDMj6b",
    spotifyMusicLink:
      "https://music.apple.com/pe/album/1am-freestyle/1640829780?i=1640829791",
  },
];

const getRows = (rows: ITableRow[]) => (
  <TableBody items={rows}>
    {(item) => (
      <TableRow key={item.key}>
        {(columnKey) => (
          <TableCell style={{ height: "80px" }}>
            {getSingleRowContent(item, columnKey)}
          </TableCell>
        )}
      </TableRow>
    )}
  </TableBody>
);

const getSingleRowContent = (row: ITableRow, key: Key) => {
  if (key == "musicUrl") {
    return <MusicCell row={row} />;
  }
  return getKeyValue(row, key);
};

const MusicCell = ({ row }: { row: ITableRow }) => {
  return (
    <div className="flex gap-8">
      <a href={row.spotifyMusicLink} target="_blank" rel="noopener noreferrer">
        <Spotify />
      </a>
      <a href={row.appleMusicLink} target="_blank" rel="noopener noreferrer">
        <AppleMusic />
      </a>
    </div>
  );
};

const TrackTable: FC<TableProps> = ({}) => {
  return (
    <NextTable aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={`${column.key}`}>{column.label}</TableColumn>
        )}
      </TableHeader>
      {getRows(rows)}
    </NextTable>
  );
};

export default TrackTable;
