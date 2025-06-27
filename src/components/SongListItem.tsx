import React from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal, Play, Plus, ListPlus, Music } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SongListItemProps {
  trackNumber: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

const SongListItem: React.FC<SongListItemProps> = ({
  trackNumber,
  title,
  artist,
  album,
  duration,
  imageUrl,
}) => {
  console.log('SongListItem loaded for:', title);

  return (
    <div className="group grid grid-cols-[32px_4fr_2fr_1fr_48px] items-center gap-4 px-4 py-2 rounded-md hover:bg-white/10 transition-colors text-sm">
      {/* Track Number / Play Button */}
      <div className="flex items-center justify-center text-muted-foreground">
        <span className="group-hover:hidden">{trackNumber}</span>
        <Button
          variant="ghost"
          size="icon"
          className="hidden group-hover:flex w-8 h-8 rounded-full"
        >
          <Play className="h-4 w-4 fill-current" />
        </Button>
      </div>

      {/* Song Title, Artist, and Cover Art */}
      <div className="flex items-center gap-3">
        <img
          src={imageUrl || 'https://via.placeholder.com/40'}
          alt={album}
          className="h-10 w-10 rounded-sm object-cover"
        />
        <div className="flex flex-col">
          <p className="font-medium text-white truncate">{title}</p>
          <Link to="/artist" className="text-muted-foreground hover:underline truncate">
            {artist}
          </Link>
        </div>
      </div>

      {/* Album */}
      <div className="text-muted-foreground truncate">
        <Link to="/album" className="hover:underline">
          {album}
        </Link>
      </div>

      {/* Duration */}
      <div className="text-muted-foreground justify-self-end">{duration}</div>
      
      {/* Context Menu */}
      <div className="justify-self-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options for {title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add to Queue</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ListPlus className="mr-2 h-4 w-4" />
                <span>Add to Playlist</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Create new playlist</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Music className="mr-2 h-4 w-4" />
                  <span>80s Rock Anthems</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Music className="mr-2 h-4 w-4" />
                  <span>Chill Focus Mix</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SongListItem;