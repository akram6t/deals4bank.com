'use client';

import Link from 'next/link';
import { Phone, Building2, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-neutral-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name - Left */}
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <Link href="/" className="text-xl text-blue-600 font-bold dark:text-blue-400">
              Deal4bank
            </Link>
          </div>
          
          {/* Contact Number and Theme Toggle - Right */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-base text-gray-700 dark:text-gray-300">
              <Phone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span>1800-123-4567</span>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}