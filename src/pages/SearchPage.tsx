import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerBar from '@/components/layout/MusicPlayerBar';

// UI and Custom Components
import { Input } from '@/components/ui/input';
import SearchResultsDisplay from '@/components/SearchResultsDisplay';

const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-screen bg-background text-primary-foreground">
      {/* Fixed Sidebar */}
      <LeftSidebar />

      {/* Main Content Area */}
      <main className="md:ml-64 pb-20">
        <Header />

        <div className="px-6 py-4">
          {/* Search Input Section */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What do you want to listen to?"
              className="pl-10 h-12 text-lg bg-neutral-700/80 border-transparent focus:bg-neutral-600 focus-visible:ring-2 focus-visible:ring-ring"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Conditional Rendering of Search Results */}
          {/* In a real app, you might show 'Browse All' or recent searches here if searchQuery is empty */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {searchQuery ? `Results for "${searchQuery}"` : 'Browse All'}
            </h2>
            <SearchResultsDisplay />
          </section>
        </div>
      </main>

      {/* Fixed Music Player */}
      <MusicPlayerBar />
    </div>
  );
};

export default SearchPage;