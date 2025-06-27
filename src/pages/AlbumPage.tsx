import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';
import SongListItem from '@/components/SongListItem';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// Icons
import { Play, Heart, MoreHorizontal, Clock4 } from 'lucide-react';

const albumInfo = {
  name: "Doraemon no Uta",
  artist: "Kumiko Osugi",
  year: 1979,
  imageUrl: "https://i.scdn.co/image/ab67616d0000b27383992b15258628ac96c1432f",
};

const songData = [
  {
    trackNumber: 1,
    title: "Doraemon no Uta",
    duration: "3:01",
  },
  {
    trackNumber: 2,
    title: "Aoi Sora wa Pocket sa",
    duration: "2:45",
  },
  {
    trackNumber: 3,
    title: "Yojigen Pocket",
    duration: "3:15",
  },
  {
    trackNumber: 4,
    title: "Mirai no Museum",
    duration: "4:02",
  },
  {
    trackNumber: 5,
    title: "Tomodachi",
    duration: "3:30",
  },
];

const AlbumPage = () => {
  return (
    <div className=\"relative flex min-h-screen w-full bg-background text-foreground\">\n      <LeftSidebar />\n      <div className=\"flex flex-1 flex-col md:ml-64\">\n        <Header />\n        <ScrollArea className=\"flex-1 px-8 py-6\">\n          <main className=\"pb-24\">\n            {/* Album Header */}\n            <section className=\"flex flex-col items-center gap-8 text-center md:flex-row md:text-left\">\n              <img\n                src={albumInfo.imageUrl}\n                alt={`Cover for ${albumInfo.name}`}\n                className=\"h-48 w-48 rounded-lg object-cover shadow-2xl\"\n              />\n              <div className=\"flex flex-col gap-3\">\n                <span className=\"text-sm font-bold uppercase\">Album</span>\n                <h1 className=\"text-5xl font-black tracking-tighter md:text-7xl\">\n                  {albumInfo.name}\n                </h1>\n                <div className=\"flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start\">\n                  <Avatar className=\"h-6 w-6\">\n                    <AvatarImage src=\"https://i.pravatar.cc/150?u=kumiko\" alt={albumInfo.artist} />\n                    <AvatarFallback>KO</AvatarFallback>\n                  </Avatar>\n                  <Link to=\"/artist\" className=\"font-semibold text-foreground hover:underline\">\n                    {albumInfo.artist}\n                  </Link>\n                  <span>•</span>\n                  <span>{albumInfo.year}</span>\n                  <span>•</span>\n                  <span>{songData.length} songs</span>\n                </div>\n              </div>\n            </section>\n\n            {/* Action Bar */}\n            <section className=\"my-8 flex items-center gap-4\">\n              <Button size=\"icon\" className=\"h-14 w-14 rounded-full\">\n                <Play className=\"h-6 w-6 fill-current\" />\n                <span className=\"sr-only\">Play album</span>\n              </Button>\n              <Button variant=\"ghost\" size=\"icon\">\n                <Heart className=\"h-6 w-6\" />\n                <span className=\"sr-only\">Save to library</span>\n              </Button>\n              <Button variant=\"ghost\" size=\"icon\">\n                <MoreHorizontal className=\"h-6 w-6\" />\n                <span className=\"sr-only\">More options</span>\n              </Button>\n            </section>\n\n            <Separator className=\"my-4\" />\n\n            {/* Song List */}\n            <section>\n              <div className=\"grid grid-cols-[32px_4fr_2fr_1fr_48px] items-center gap-4 px-4 py-2 text-sm text-muted-foreground\">\n                <div className=\"text-center\">#</div>\n                <div>Title</div>\n                <div>Album</div>\n                <div className=\"justify-self-end\"><Clock4 className=\"h-4 w-4\" /></div>\n                <div className=\"w-8\"></div>\n              </div>\n              <div className=\"mt-2 flex flex-col\">\n                {songData.map((song) => (\n                  <SongListItem\n                    key={song.trackNumber}\n                    trackNumber={song.trackNumber}\n                    title={song.title}\n                    artist={albumInfo.artist}\n                    album={albumInfo.name}\n                    duration={song.duration}\n                    imageUrl={albumInfo.imageUrl}\n                  />\n                ))}\n              </div>\n            </section>\n          </main>\n        </ScrollArea>\n      </div>\n      <MusicPlayerBar />\n    </div>\n  );\n};\n\nexport default AlbumPage;