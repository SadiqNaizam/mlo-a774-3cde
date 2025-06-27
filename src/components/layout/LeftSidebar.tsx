import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const mockPlaylists = [
  { id: '1', name: 'Chill Vibes' },
  { id: '2', name: 'Workout Hits' },
  { id: '3', name: 'Late Night Jazz' },
  { id: '4', name: '80s Flashback' },
  { id: '5', name: 'Indie Discovery' },
  { id: '6', name: 'Acoustic Mornings' },
  { id: '7', name: 'Road Trip Anthems' },
  { id: '8', name: 'Focus Flow' },
  { id: '9', name: 'Lofi Beats' },
  { id: '10', name: 'Rock Classics' },
  { id: '11', name: 'Summer Party' },
];

const LeftSidebar: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
      isActive && "bg-muted text-primary"
    );

  return (
    <aside className="fixed left-0 top-0 hidden h-full w-64 flex-col gap-4 border-r bg-muted/40 p-4 md:flex">
      <div className="flex flex-col gap-2">
        <div className="rounded-lg bg-background p-2">
          <nav className="grid gap-1">
            <NavLink to="/" className={navLinkClass}>
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink to="/search" className={navLinkClass}>
              <Search className="h-4 w-4" />
              Search
            </NavLink>
          </nav>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col rounded-lg bg-background p-2">
        <div className="mb-2 flex items-center justify-between px-3">
          <div className="flex items-center gap-4">
            <Library className="h-4 w-4" />
            <span className="text-sm font-medium">Your Library</span>
          </div>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Create Playlist</span>
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <nav className="grid gap-1 px-3 py-1">
            {mockPlaylists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist?id=${playlist.id}`}
                className="truncate rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {playlist.name}
              </Link>
            ))}</nav>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default LeftSidebar;