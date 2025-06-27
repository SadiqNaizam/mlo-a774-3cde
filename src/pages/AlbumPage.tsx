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
  console.log('AlbumPage loaded');

  return (
    <div className="relative flex min-h-screen w-full bg-background text-foreground">
      <LeftSidebar />
      <div className="flex flex-1 flex-col md:ml-64">
        <Header />
        <ScrollArea className="flex-1 px-8 py-6">
          <main className="pb-24">
            {/* Album Header */}
            <section className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <img
                src={albumInfo.imageUrl}
                alt={`Cover for ${albumInfo.name}`}
                className="h-48 w-48 rounded-lg object-cover shadow-2xl"
              />
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase">Album</span>
                <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
                  {albumInfo.name}
                </h1>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://i.pravatar.cc/150?u=kumiko" alt={albumInfo.artist} />
                    <AvatarFallback>KO</AvatarFallback>
                  </Avatar>
                  <Link to="/artist" className="font-semibold text-foreground hover:underline">
                    {albumInfo.artist}
                  </Link>
                  <span>•</span>
                  <span>{albumInfo.year}</span>
                  <span>•</span>
                  <span>{songData.length} songs</span>
                </div>
              </div>
            </section>

            {/* Action Bar */}
            <section className="my-8 flex items-center gap-4">
              <Button size="icon" className="h-14 w-14 rounded-full">
                <Play className="h-6 w-6 fill-current" />
                <span className="sr-only">Play album</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Save to library</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-6 w-6" />
                <span className="sr-only">More options</span>
              </Button>
            </section>

            <Separator className="my-4" />

            {/* Song List */}
            <section>
              <div className="grid grid-cols-[32px_4fr_2fr_1fr_48px] items-center gap-4 px-4 py-2 text-sm text-muted-foreground">
                <div className="text-center">#</div>
                <div>Title</div>
                <div>Album</div>
                <div className="justify-self-end"><Clock4 className="h-4 w-4" /></div>
                <div className="w-8"></div>
              </div>
              <div className="mt-2 flex flex-col">
                {songData.map((song) => (
                  <SongListItem
                    key={song.trackNumber}
                    trackNumber={song.trackNumber}
                    title={song.title}
                    artist={albumInfo.artist}
                    album={albumInfo.name}
                    duration={song.duration}
                    imageUrl={albumInfo.imageUrl}
                  />
                ))}
              </div>
            </section>
          </main>
        </ScrollArea>
      </div>
      <MusicPlayerBar />
    </div>
  );
};

export default AlbumPage;