import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SongListItem from '@/components/SongListItem'; // Assuming this component exists
import MediaCoverItem from '@/components/MediaCoverItem'; // Assuming this component exists

// Mock data structures - based on component descriptions
interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

interface Artist {
  id: string;
  name: string;
  imageUrl: string;
}

interface Album {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

interface Playlist {
  id: string;
  name: string;
  creator: string;
  imageUrl: string;
}

// Mock data for demonstration
const mockSongs: Song[] = [
  { id: 's1', title: 'Blue Bird', artist: 'Ikimonogakari', album: 'My song Your song', duration: '3:38', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02c6c6e7f7f3d5f4f5f1f1e7f7' },
  { id: 's2', title: 'Silhouette', artist: 'KANA-BOON', album: 'TIME', duration: '4:01', imageUrl: 'https://i.scdn.co/image/ab67616d00001e029c6e7f7f3d5f4f5f1f1e7f7' },
  { id: 's3', title: 'Gurenge', artist: 'LiSA', album: 'LEO-NiNE', duration: '3:57', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a1b1b1b1b1b1b1b1b1b1b1b1' },
];

const mockArtists: Artist[] = [
  { id: 'ar1', name: 'YOASOBI', imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebc96f7c5a5a5a5a5a5a5a5a5a' },
  { id: 'ar2', name: 'Ado', imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebe2e2e2e2e2e2e2e2e2e2e2e2' },
];

const mockAlbums: Album[] = [
  { id: 'al1', title: 'THE BOOK', artist: 'YOASOBI', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02d8b8b8b8b8b8b8b8b8b8b8b8' },
  { id: 'al2', title: 'Uta\'s Songs: One Piece Film Red', artist: 'Ado', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02f8b8b8b8b8b8b8b8b8b8b8b8' },
];

const mockPlaylists: Playlist[] = [
  { id: 'pl1', name: 'Anime Hits', creator: 'Doraefy', imageUrl: 'https://i.scdn.co/image/ab67706c0000da84f1b1b1b1b1b1b1b1b1b1b1b1' },
  { id: 'pl2', name: 'J-Rock Anthems', creator: 'Doraefy', imageUrl: 'https://i.scdn.co/image/ab67706c0000da84e2e2e2e2e2e2e2e2e2e2e2e2' },
];

// In a real app, this data would come from props or a query hook
// interface SearchResultsDisplayProps {
//   songs: Song[];
//   artists: Artist[];
//   albums: Album[];
//   playlists: Playlist[];
// }

const SearchResultsDisplay: React.FC = () => {
  console.log('SearchResultsDisplay loaded');

  return (
    <div className="mt-6">
      <Tabs defaultValue="songs" className="w-full">
        <TabsList>
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>

        <TabsContent value="songs" className="mt-4">
          <div className="flex flex-col gap-2">
            {mockSongs.map((song, index) => (
              <SongListItem
                key={song.id}
                index={index + 1}
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
                imageUrl={song.imageUrl}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artists" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mockArtists.map((artist) => (
              <MediaCoverItem
                key={artist.id}
                title={artist.name}
                description="Artist"
                imageUrl={artist.imageUrl}
                type="artist"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="albums" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mockAlbums.map((album) => (
              <MediaCoverItem
                key={album.id}
                title={album.title}
                description={album.artist}
                imageUrl={album.imageUrl}
                type="album"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="playlists" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mockPlaylists.map((playlist) => (
              <MediaCoverItem
                key={playlist.id}
                title={playlist.name}
                description={`By ${playlist.creator}`}
                imageUrl={playlist.imageUrl}
                type="playlist"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchResultsDisplay;