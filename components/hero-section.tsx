// components/hero-section.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Clock, TrendingDown, Headphones, Eye, Home, User, Building2, Car, Heart, BarChart3, Banknote, ShoppingCart } from 'lucide-react';
import { ApplyServiceForm, HeroFormData } from './service-form';

interface HeroSectionProps {
  openedTab: string,
  onTabChange: (tabId: string) => void
}

export default function HeroSection({ openedTab, onTabChange }: HeroSectionProps) {
  // Service tabs data
  const serviceTabs = [
    {
      id: 'Loan',
      title: 'Loans',
      icon: '💰',
      data: [
        { type: 'Personal Loan', rate: '10.49% - 24%', tenure: '1 - 7 years', amount: '₹50K - ₹50L', icon: User },
        { type: 'Home Loan', rate: '7.35% - 11%', tenure: '1 - 30 years', amount: '₹1L - ₹10Cr', icon: Home },
        { type: 'Business Loan', rate: '12% - 24%', tenure: '1 - 3 years', amount: '₹1L - ₹1Cr', icon: Building2 },
        { type: 'Car Loan', rate: '8.75% - 18%', tenure: '1 - 7 years', amount: '₹1L - ₹50L', icon: Car },
        { type: 'Loan Against Property', rate: '9% - 24%', tenure: '1 - 15 years', amount: '₹1L - ₹10Cr', icon: Banknote }
      ]
    },
    {
      id: 'Insurance',
      title: 'Insurance',
      icon: '🛡️',
      data: [
        { type: 'Life Insurance', coverage: '₹5L - ₹2Cr', premium: 'From ₹500/month', features: 'Tax benefits, Maturity benefits', icon: Heart },
        { type: 'Health Insurance', coverage: '₹2L - ₹1Cr', premium: 'From ₹200/month', features: 'Cashless treatment, Pre-post hospitalization', icon: Shield },
        { type: 'General Insurance', coverage: 'Comprehensive', premium: 'Competitive rates', features: 'Vehicle, Home, Travel insurance', icon: Headphones }
      ]
    },
    {
      id: 'Investment',
      title: 'Investment',
      icon: '📈',
      data: [
        { type: 'Mutual Funds', returns: '8-15% p.a.', risk: 'Low to High', features: 'SIP starting ₹500, Professional management', icon: BarChart3 },
        { type: 'Fixed Deposit', returns: '6-8% p.a.', risk: 'Very Low', features: 'Guaranteed returns, Flexible tenure', icon: Banknote },
        { type: 'ULIP', returns: '8-12% p.a.', risk: 'Moderate', features: 'Insurance + Investment, Tax benefits', icon: TrendingDown }
      ]
    },
    {
      id: 'Property',
      title: 'Property',
      icon: '🏘️',
      data: [
        { type: 'Buy Property', service: 'Property search & verification', commission: '1-2%', features: 'Legal assistance, Documentation', icon: ShoppingCart },
        { type: 'Sell Property', service: 'Marketing & buyer connection', commission: '1-2%', features: 'Valuation, Marketing support', icon: Home },
        { type: 'Property Consultation', service: 'Investment advice', fee: 'Consultation fee', features: 'Market analysis, ROI calculation', icon: Eye }
      ]
    }
  ];

  // In your parent component:
  const handleFormSubmit = async (formData: HeroFormData) => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      return data;
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  };

  return (
    <section className="py-2 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section - Left Side (Shown first on mobile) */}
          <div className="order-1 lg:order-2">
            <ApplyServiceForm onSubmit={handleFormSubmit} />
          </div>

          {/* Service Tabs Section - Right Side (Hidden on mobile, shown after form) */}
          <div className="order-2 lg:order-1">
            {/* Mobile Only Heading */}
            <h2 className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-400 mb-4">Our Services and rates:-</h2>

            {/* Tab Navigation */}
            <div id="services" className="z-10 bg-white dark:bg-neutral-900 pt-2 pb-3 flex items-center gap-2 mb-2 overflow-x-scroll scrollbar-hide border-b border-gray-200 dark:border-neutral-700">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`${serviceTabs[0].id === tab.id ? 'ms-2' : ''} ${serviceTabs[serviceTabs.length - 1].id === tab.id ? 'me-6' : ''} px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 ${openedTab === tab.id
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'dark:bg-neutral-800 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 border border-gray-300 dark:border-gray-700'
                    }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              {serviceTabs.map((tab) => (
                openedTab === tab.id && (
                  <div key={tab.id} className="space-y-4">
                    {tab.data.map((item, index) => (
                      <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 rounded-lg bg-blue-600/20">
                            <item.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.type}</h3>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {tab.id === 'Loan' && (
                            <span>Interest: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).rate}</span> | Tenure: <span className="text-blue-600 font-semibold dark:text-blue-300 font-semibold">{(item as any).tenure}</span> | Amount: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).amount}</span></span>
                          )}
                          {tab.id === 'Insurance' && (
                            <span>Coverage: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).coverage}</span> | Premium: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).premium}</span> | Features: <span className="text-blue-600 dark:text-blue-300">{(item as any).features}</span></span>
                          )}
                          {tab.id === 'Investment' && (
                            <span>Returns: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).returns}</span> | Risk: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).risk}</span> | Features: <span className="text-blue-600 dark:text-blue-300">{(item as any).features}</span></span>
                          )}
                          {tab.id === 'Property' && (
                            <span>Service: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).service}</span> | {(item as any).commission ? 'Commission' : 'Fee'}: <span className="text-blue-600 dark:text-blue-300 font-semibold">{(item as any).commission || (item as any).fee}</span> | Features: <span className="text-blue-600 dark:text-blue-300">{(item as any).features}</span></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}