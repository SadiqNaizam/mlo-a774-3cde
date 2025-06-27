import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Hash, Play } from 'lucide-react';

// Import custom layout and component elements
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';
import SongListItem from '@/components/SongListItem';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for a playlist's contents
const mockPlaylist = {
  id: '1',
  name: "Doraemon's Pocket Hits",
  creator: 'Doraefy',
  description: 'A collection of upbeat and nostalgic tracks perfect for any adventure.',
  coverArtUrl: 'https://i.pinimg.com/736x/8e/5e/97/8e5e97011d6b2c80f4f539955c36663a.jpg',
  songs: [
    {
      trackNumber: 1,
      title: 'Yume wo Kanaete Doraemon',
      artist: 'MAO',
      album: 'Doraemon OST',
      duration: '4:06',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e0283992b15258628ac96c1432f',
    },
    {
      trackNumber: 2,
      title: 'Hoshi-Zora No POKETTO',
      artist: 'Shunsuke Kikuchi',
      album: 'Classic Anison',
      duration: '3:22',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e02f4f6e1f2a3c1c4e7a8a1b2c3',
    },
    {
      trackNumber: 3,
      title: 'Blue-sky Dream',
      artist: 'Future Sound',
      album: 'Anime Lo-fi',
      duration: '2:58',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a9b1c0b0c1d2e3f4a5b6c7d8',
    },
    {
      trackNumber: 4,
      title: 'Gadget Groove',
      artist: 'DJ Nobi',
      album: 'Future Funk',
      duration: '3:45',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e02b3d4e5f6a7b8c9d0e1f2a3b4',
    },
    {
      trackNumber: 5,
      title: 'Anywhere Doorstep',
      artist: 'The Dorayakis',
      album: 'Indie Pop Journey',
      duration: '3:15',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e02c4d5e6f7a8b9c0d1e2f3a4b5',
    },
     {
      trackNumber: 6,
      title: 'Time-warp Echo',
      artist: 'Shizuka Wave',
      album: 'Chillwave Dreams',
      duration: '4:10',
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e02d5e6f7a8b9c0d1e2f3a4b5c6',
    },
  ],
};

const PlaylistPage = () => {
  console.log('PlaylistPage loaded');
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('id');

  // In a real app, you would fetch playlist data based on playlistId
  const playlistData = mockPlaylist; 

  return (
    <div className="relative min-h-screen bg-background text-white">
      <LeftSidebar />
      <MusicPlayerBar />
      <main className="pl-0 md:pl-64 pb-28">
        <Header />
        <ScrollArea className="h-[calc(100vh-7rem)]">
          <div className="px-6 py-8">
            {/* Playlist Header Section */}
            <section className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
              <img
                src={playlistData.coverArtUrl}
                alt={`${playlistData.name} cover art`}
                className="h-48 w-48 rounded-lg shadow-2xl object-cover"
              />
              <div className="flex flex-col gap-2 text-center md:text-left">
                <p className="text-sm font-bold">Playlist</p>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                  {playlistData.name}
                </h1>
                <p className="text-muted-foreground mt-2">{playlistData.description}</p>
                <p className="text-sm mt-1">
                  Created by <span className="font-semibold text-white">{playlistData.creator}</span> • {playlistData.songs.length} songs
                </p>
              </div>
            </section>

            {/* Action Bar & Song List Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <Button size="icon" className="h-14 w-14 bg-blue-500 hover:bg-blue-400 rounded-full">
                  <Play className="h-7 w-7 fill-black text-black" />
                </Button>
              </div>

              {/* Song List Header */}
              <div className="grid grid-cols-[32px_4fr_2fr_1fr_48px] items-center gap-4 px-4 py-2 text-muted-foreground border-b border-white/10 text-sm">
                <div className="flex items-center justify-center">
                  <Hash className="h-4 w-4" />
                </div>
                <div>Title</div>
                <div>Album</div>
                <div className="justify-self-end">
                  <Clock className="h-4 w-4" />
                </div>
                <div /> {/* Empty div for dropdown menu column */}
              </div>

              {/* Song Items */}
              <div className="mt-2">
                {playlistData.songs.map((song) => (
                  <SongListItem
                    key={song.trackNumber}
                    trackNumber={song.trackNumber}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    duration={song.duration}
                    imageUrl={song.imageUrl}
                  />
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default PlaylistPage;