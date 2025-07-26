'use client';
import Link from 'next/link';
import { Phone, Building2, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { getCompanyData, getContactData } from '@/lib/data-parser';

export default function Navbar() {
  const company = getCompanyData();
  const contacts = getContactData();

  return (
    <nav className="bg-blue-800 text-white border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name - Left */}
          <div className="flex items-center">
            <div className='h-6 w-6 p-1 overflow-hidden md:h-8 w-8 mr-3 md:mr-3 bg-white rounded-full'>
              <Image className="h-full w-full object-cover" src={company.logo} width={10} height={10} alt='logo' />
            </div>
            <Link href="/" className="text-xl font-bold">
              {company.name}
            </Link>
          </div>

          {/* Contact Number and Theme Toggle - Right */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-base">
              <Phone className="h-4 w-4 mr-2" />
              <a href={`tel:91${contacts.whatsapp.number}`}>{contacts.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}