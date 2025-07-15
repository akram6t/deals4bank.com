'use client';

import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import { States } from '@/components/states';
import { useState } from 'react';

// Main page component with hero section
export default function Home() {
    const [activeTab, setActiveTab] = useState('Loan');

  return (
    <main className="bg-blue-50 dark:bg-neutral-950 transition-colors duration-200 relative">
      {/* Navigation bar */}
      <Navbar />

      {/* Title and Description Section */}
      <States
        onLinkClick={tabId => setActiveTab(tabId)}
      />

      {/* Hero section with benefits and form */}
      <HeroSection
        openedTab={activeTab}
        onTabChange={tabId => setActiveTab(tabId)}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
