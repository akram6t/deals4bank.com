'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white backdrop-blur-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-blue-600 mb-2">MoneyMoney</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Your trusted financial partner</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-teal-600" />
              <span>1800-123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-blue-600" />
              <span>info@moneymoney.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
          <p>&copy; 2024 MoneyMoney.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}