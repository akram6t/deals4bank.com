import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoneyMoney.com - Professional Financial Services | Loans & Insurance',
  description: 'Leading financial services platform offering competitive loan rates and comprehensive insurance solutions. Get quick approvals for personal loans, home loans, car loans, and complete insurance coverage.',
  keywords: 'financial services, loans, insurance, personal loans, home loans, car loans, life insurance, health insurance, India',
  authors: [{ name: 'MoneyMoney.com' }],
  creator: 'MoneyMoney.com',
  publisher: 'MoneyMoney.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moneymoney.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MoneyMoney.com - Professional Financial Services',
    description: 'Leading financial services platform offering competitive loan rates and comprehensive insurance solutions.',
    url: 'https://moneymoney.com',
    siteName: 'MoneyMoney.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MoneyMoney.com - Financial Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyMoney.com - Professional Financial Services',
    description: 'Leading financial services platform offering competitive loan rates and comprehensive insurance solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'MoneyMoney.com',
              description: 'Professional financial services platform offering loans and insurance solutions',
              url: 'https://moneymoney.com',
              telephone: '1800-123-4567',
              email: 'info@moneymoney.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mumbai',
                addressCountry: 'IN',
                streetAddress: '123 Financial District'
              },
              sameAs: [
                'https://facebook.com/moneymoney',
                'https://twitter.com/moneymoney',
                'https://linkedin.com/company/moneymoney'
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Financial Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'LoanOrCredit',
                      name: 'Personal Loans'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'InsurancePolicy',
                      name: 'Insurance Services'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}