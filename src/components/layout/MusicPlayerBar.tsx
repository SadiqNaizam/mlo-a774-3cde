import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Heart, 
  PlayCircle, 
  PauseCircle,
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  ListMusic, 
  Laptop2, 
  Volume2 
} from 'lucide-react';

const MusicPlayerBar: React.FC = () => {
  console.log('MusicPlayerBar loaded');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid h-20 grid-cols-3 items-center">
        {/* Left Side: Song Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14 rounded-md">
            <AvatarImage src="https://i.scdn.co/image/ab67616d0000485183992b15258628ac96c1432f" alt="Album Art" />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Doraemon no Uta</p>
            <p className="text-sm text-muted-foreground">Kumiko Osugi</p>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Like</span>
          </Button>
        </div>

        {/* Center: Player Controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <PauseCircle className="h-8 w-8" /> : <PlayCircle className="h-8 w-8" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex w-full max-w-md items-center gap-2">
            <span className="text-xs text-muted-foreground">1:12</span>
            <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
            <span className="text-xs text-muted-foreground">3:01</span>
          </div>
        </div>
        
        {/* Right Side: Volume & Other Controls */}
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="icon">
            <ListMusic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Laptop2 className="h-4 w-4" />
          </Button>
          <div className="flex w-32 items-center gap-2">
            <Button variant="ghost" size="icon">
              <Volume2 className="h-4 w-4" />
            </Button>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayerBar;