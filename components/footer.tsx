'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';


const getMailUri = (): string => {
  const email = "info@deals4bank.com";
  const subject = "Enquiry for your service";
  const body = "Hello, I am interested in your service. Please contact me!";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return mailtoUrl;
}

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="mt-10 bg-blue-800 dark:bg-neutral-900 text-gray-100 dark:text-white backdrop-blur-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-50 dark:text-blue-400 mb-2">Deals4Bank</h3>
            <p className="text-gray-50 dark:text-gray-300 text-sm">Your trusted financial partner</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-50 dark:text-gray-300">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-green-500" />
              <a href='https://wa.me/9243956990' target='_blank'>+91-9243956990</a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-blue-400" />
              <a href={getMailUri()}>info@deals4bank.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-4 pt-4 text-center text-gray-50 dark:text-gray-400 text-sm transition-colors duration-200">
          <p>&copy; 2024 deals4bank.com. All rights reserved.</p>
        </div>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute right-3 bottom-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </footer>
  );
}