import React from 'react';

// Import custom layout components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// Import custom UI components
import MediaCoverItem, { MediaCoverItemProps } from '@/components/MediaCoverItem';

// Import shadcn/ui components
import { ScrollArea } from '@/components/ui/scroll-area';

// --- Placeholder Data ---
// This data simulates what would come from an API, providing content for the home page.

const featuredPlaylists: MediaCoverItemProps[] = [
  {
    href: '/playlist?id=dora-favorites',
    imageUrl: 'https://i.scdn.co/image/ab67706c0000bebb5723b6b7617a86f455145c36',
    title: "Dora's Gadget Grooves",
    description: 'Upbeat tunes for future inventions',
  },
  {
    href: '/playlist?id=nobitas-chill-mix',
    imageUrl: 'https://i.scdn.co/image/ab67706f000000021b33985169a8505e3f357601',
    title: "Nobita's Naptime Beats",
    description: 'Relax and unwind with these lofi tracks',
  },
  {
    href: '/playlist?id=shizukas-serenade',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002c011e1418e9c2f821b873f44',
    title: "Shizuka's Serenade",
    description: 'Sweet and melodic study sessions',
  },
  {
    href: '/playlist?id=gian-karaoke',
    imageUrl: 'https://i.scdn.co/image/ab67706f000000029bb5322262141555531481b4',
    title: 'Gian\'s Karaoke Hits',
    description: 'Powerful anthems to sing your heart out',
  },
  {
    href: '/playlist?id=suneos-show-off',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002a2dfc8a2cc0f79333a388909',
    title: "Suneo's Show-off Sounds",
    description: 'The most exclusive and trending tracks',
  },
];

const newReleases: MediaCoverItemProps[] = [
  {
    href: '/album?id=future-funk',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    title: 'Future Funk',
    description: 'Vaporwave Vibes',
  },
  {
    href: '/album?id=cyber-dreams',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e028b58a56281c54326466f8517',
    title: 'Cyber Dreams',
    description: 'Synthwave Society',
  },
  {
    href: '/album?id=sakura-fall',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e7db49959e41c0966b27b3e0',
    title: 'Sakura Fall',
    description: 'Lofi Girl',
  },
  {
    href: '/album?id=ocean-drive',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a2a0d9e262c050d27a694e9f',
    title: 'Ocean Drive',
    description: 'Night Rider',
  },
    {
    href: '/album?id=cosmic-gate',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a9b49757f43391ad1a7bdfa5',
    title: 'Cosmic Gate',
    description: 'Starlight',
  },
  {
    href: '/album?id=tokyo-nights',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e024f33165b533a3394c341399f',
    title: 'Tokyo Nights',
    description: 'City Pop',
  },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="relative flex min-h-screen bg-background text-foreground">
      {/* Sidebar - fixed and responsive from its own styles */}
      <LeftSidebar />

      {/* Main Content Area - adjusts for the sidebar on medium screens and up */}
      <main className="flex-1 md:pl-64">
        <div className="flex h-screen flex-col">
          {/* Header sits at the top of the main content */}
          <Header />

          {/* Scrollable content takes the remaining space, with padding for the player bar */}
          <ScrollArea className="flex-1 pb-20">
            <div className="space-y-8 p-6">
              {/* Section: Featured Playlists */}
              <section>
                <h2 className="mb-4 text-2xl font-bold">Featured Playlists</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {featuredPlaylists.map((item) => (
                    <MediaCoverItem key={item.href} {...item} />
                  ))}
                </div>
              </section>

              {/* Section: New Releases */}
              <section>
                <h2 className="mb-4 text-2xl font-bold">New Releases</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {newReleases.map((item) => (
                    <MediaCoverItem key={item.href} {...item} />
                  ))}
                </div>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>

      {/* Music Player Bar - fixed at the bottom */}
      <MusicPlayerBar />
    </div>
  );
};

export default HomePage;