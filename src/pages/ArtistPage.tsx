import React from 'react';
import { Link } from 'react-router-dom';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// Custom Components
import SongListItem from '@/components/SongListItem';
import MediaCoverItem from '@/components/MediaCoverItem';

// Shadcn UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

// Placeholder Data
const artist = {
  name: 'Gen Hoshino',
  imageUrl: 'https://images.genius.com/b523b73f27f125a484c6c2217f25954c.1000x1000x1.jpg',
  verified: true,
};

const popularTracks = [
  { id: 1, title: 'Doraemon', album: 'Doraemon', duration: '3:59', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27320f045d3765187e59b2169da' },
  { id: 2, title: 'Koi', album: 'Pop Virus', duration: '4:13', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f5509b5523b0d5a37f2a1bde' },
  { id: 3, title: 'Comedy', album: 'Comedy', duration: '3:50', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a0272ba3550a1200f37c35e3' },
  { id: 4, title: 'Fushigi', album: 'Fushigi/Create', duration: '4:49', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f1d8c09a804155e1a3c54093' },
  { id: 5, title: 'Sun', album: 'Yellow Dancer', duration: '4:18', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d1b32948e35a16361a2432a' },
];

const albums = [
  { href: '/album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f5509b5523b0d5a37f2a1bde', title: 'Pop Virus', description: 'Album • 2018' },
  { href: '/album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d1b32948e35a16361a2432a', title: 'Yellow Dancer', description: 'Album • 2015' },
  { href: '/album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27320f045d3765187e59b2169da', title: 'Doraemon', description: 'Single • 2018' },
  { href: '/album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a0272ba3550a1200f37c35e3', title: 'Comedy', description: 'Single • 2022' },
  { href: '/album', imageUrl: 'https://i.scdn.co/image/ab67616d00001e028b3f2f4a3e74b1e7c8a6a2d9', title: 'Episode', description: 'Album • 2011' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <LeftSidebar />
      <MusicPlayerBar />

      <main className="ml-0 md:ml-64 pb-20">
        <Header />
        <ScrollArea className="h-[calc(100vh-6rem)]">
          {/* Artist Banner */}
          <section className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-blue-800 to-neutral-900">
            <Avatar className="w-40 h-40 border-4 border-background shadow-lg">
              <AvatarImage src={artist.imageUrl} alt={artist.name} />
              <AvatarFallback>{artist.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight">{artist.name}</h1>
            <Button className="mt-6 bg-green-500 hover:bg-green-600 text-black rounded-full px-8 py-3 text-lg font-bold">
              <Play className="mr-2 h-6 w-6 fill-current" />
              Play
            </Button>
          </section>

          {/* Popular Songs */}
          <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <div className="flex flex-col">
              {popularTracks.map((track, index) => (
                <SongListItem
                  key={track.id}
                  trackNumber={index + 1}
                  title={track.title}
                  artist={artist.name}
                  album={track.album}
                  duration={track.duration}
                  imageUrl={track.imageUrl}
                />
              ))}
            </div>
          </section>

          {/* Discography */}
          <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">Discography</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {albums.map((album) => (
                <MediaCoverItem
                  key={album.title}
                  href={album.href}
                  imageUrl={album.imageUrl}
                  title={album.title}
                  description={album.description}
                />
              ))}
            </div>
          </section>
        </ScrollArea>
      </main>
    </div>
  );
};

export default ArtistPage;