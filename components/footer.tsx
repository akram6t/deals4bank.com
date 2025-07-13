'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">MoneyMoney</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all financial needs. We provide comprehensive 
              insurance and loan solutions with competitive rates and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">General Insurance</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Life Insurance</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Health Insurance</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Personal Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Business Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Home Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Mortgage Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Gadi Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Investment Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@moneymoney.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>123 Financial District, Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MoneyMoney.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}