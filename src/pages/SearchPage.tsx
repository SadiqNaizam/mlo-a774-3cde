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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className=\"relative min-h-screen bg-background text-foreground\">\n      {/* Fixed Sidebar */}\n      <LeftSidebar />\n\n      {/* Main Content Area */}\n      <main className=\"md:ml-64 pb-20\">\n        <Header />\n\n        <div className=\"px-6 py-4\">\n          {/* Search Input Section */}\n          <div className=\"relative mb-8\">\n            <SearchIcon className=\"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground\" />\n            <Input\n              type=\"search\"\n              placeholder=\"What do you want to listen to?\"\n              className=\"pl-10 h-12 text-lg bg-muted border-transparent focus-visible:ring-2 focus-visible:ring-ring\"\n              value={searchQuery}\n              onChange={(e) => setSearchQuery(e.target.value)}\n            />\n          </div>\n\n          {/* Conditional Rendering of Search Results */}\n          {/* In a real app, you might show 'Browse All' or recent searches here if searchQuery is empty */}\n          <section>\n            <h2 className=\"text-2xl font-bold mb-4\">\n              {searchQuery ? `Results for \"${searchQuery}\"` : 'Browse All'}\n            </h2>\n            <SearchResultsDisplay />\n          </section>\n        </div>\n      </main>\n\n      {/* Fixed Music Player */}\n      <MusicPlayerBar />\n    </div>\n  );\n};\n\nexport default SearchPage;