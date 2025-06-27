import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface MediaCoverItemProps {
  /** The URL the card should link to. E.g., /album/123 or /playlist/abc */
  href: string;
  /** The URL of the cover art image. */
  imageUrl: string;
  /** The main title, e.g., album name or playlist name. */
  title: string;
  /** The secondary text, e.g., artist name or playlist creator. */
  description: string;
}

const MediaCoverItem: React.FC<MediaCoverItemProps> = ({
  href,
  imageUrl,
  title,
  description,
}) => {
  console.log('MediaCoverItem loaded for:', title);

  return (
    <Link to={href} className="group block w-full">
      <Card className="w-full overflow-hidden transition-all duration-300 bg-neutral-800/50 hover:bg-neutral-700/80 border-transparent">
        <CardContent className="p-4">
          <div className="relative mb-4">
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <img
                src={imageUrl || 'https://placehold.co/300x300/1DB954/FFFFFF/png?text=Music'}
                alt={`Cover for ${title}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black shadow-lg opacity-0 transition-all duration-300 group-hover:bottom-4 group-hover:opacity-100">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-white truncate">{title}</p>
            <p className="text-sm text-neutral-400 truncate">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MediaCoverItem;