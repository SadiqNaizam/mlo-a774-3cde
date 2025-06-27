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
  { id: 'al2', title: 'Uta\\'s Songs: One Piece Film Red', artist: 'Ado', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02f8b8b8b8b8b8b8b8b8b8b8b8' },
];

const mockPlaylists: Playlist[] = [
  { id: 'pl1', name: 'Anime Hits', creator: 'Doraefy', imageUrl: 'https://i.scdn.co/image/ab67706c0000da84f1b1b1b1b1b1b1b1b1b1b1b1' },
  { id: 'pl2', name: 'J-Rock Anthems', creator: 'Doraefy', imageUrl: 'https://i.scdn.co/image/ab67706c0000da84e2e2e2e2e2e2e2e2e2e2e2e2' },
];

// In a real app, this data would come from props or a query hook
// interface SearchResultsDisplayProps {\n//   songs: Song[];\n//   artists: Artist[];\n//   albums: Album[];\n//   playlists: Playlist[];\n// }\n\nconst SearchResultsDisplay: React.FC = () => {\n  return (\n    <div className=\"mt-6\">\n      <Tabs defaultValue=\"songs\" className=\"w-full\">\n        <TabsList>\n          <TabsTrigger value=\"songs\">Songs</TabsTrigger>\n          <TabsTrigger value=\"artists\">Artists</TabsTrigger>\n          <TabsTrigger value=\"albums\">Albums</TabsTrigger>\n          <TabsTrigger value=\"playlists\">Playlists</TabsTrigger>\n        </TabsList>\n\n        <TabsContent value=\"songs\" className=\"mt-4\">\n          <div className=\"flex flex-col gap-2\">\n            {mockSongs.map((song, index) => (\n              <SongListItem\n                key={song.id}\n                trackNumber={index + 1}\n                title={song.title}\n                artist={song.artist}\n                album={song.album}\n                duration={song.duration}\n                imageUrl={song.imageUrl}\n              />\n            ))}\n          </div>\n        </TabsContent>\n\n        <TabsContent value=\"artists\" className=\"mt-4\">\n          <div className=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4\">\n            {mockArtists.map((artist) => (\n              <MediaCoverItem\n                key={artist.id}\n                href={`/artist?id=${artist.id}`}\n                title={artist.name}\n                description=\"Artist\"\n                imageUrl={artist.imageUrl}\n              />\n            ))}\n          </div>\n        </TabsContent>\n\n        <TabsContent value=\"albums\" className=\"mt-4\">\n          <div className=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4\">\n            {mockAlbums.map((album) => (\n              <MediaCoverItem\n                key={album.id}\n                href={`/album?id=${album.id}`}\n                title={album.title}\n                description={album.artist}\n                imageUrl={album.imageUrl}\n              />\n            ))}\n          </div>\n        </TabsContent>\n\n        <TabsContent value=\"playlists\" className=\"mt-4\">\n          <div className=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4\">\n            {mockPlaylists.map((playlist) => (\n              <MediaCoverItem\n                key={playlist.id}\n                href={`/playlist?id=${playlist.id}`}\n                title={playlist.name}\n                description={`By ${playlist.creator}`}\n                imageUrl={playlist.imageUrl}\n              />\n            ))}\n          </div>\n        </TabsContent>\n      </Tabs>\n    </div>\n  );\n};\n\nexport default SearchResultsDisplay;