'use client';

import Link from 'next/link';
import { Phone, Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Contact Number - Left */}
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            <span>1800-123-4567</span>
          </div>
          
          {/* Company Name - Center */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MoneyMoney
          </Link>
          
          {/* Logo - Right */}
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}