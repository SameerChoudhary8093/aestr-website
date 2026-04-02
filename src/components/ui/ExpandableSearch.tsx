'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const ExpandableSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setSearchValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log('Searching for:', searchValue);
  };

  return (
    <div ref={containerRef} className="flex justify-end mb-8">
      <div className="relative">
        {!isExpanded ? (
          /* Collapsed state - only search icon */
          <button
            onClick={handleExpand}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-accent hover:scale-105"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        ) : (
          /* Expanded state - full search input */
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-black/40 border border-white/10 rounded-full px-4 py-3 shadow-lg backdrop-blur-md transition-all duration-300">
              <Search className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by course name, code, skill, or concept..."
                className="bg-transparent border-none outline-none text-foreground placeholder-foreground/50 text-sm md:text-base w-48 md:w-64 lg:w-80 xl:w-96"
              />
              {searchValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-foreground/60 hover:text-foreground" />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExpandableSearch;
