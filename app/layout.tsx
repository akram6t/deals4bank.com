import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/theme-context';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deal4Bank - Professional Financial Services | Loans, Insurance, Investment & Property',
  description: 'Leading financial services platform offering competitive loan rates and comprehensive insurance solutions. Get quick approvals for personal loans, home loans, car loans, and complete insurance coverage.',
  keywords: 'financial services, loans, insurance, personal loans, home loans, car loans, life insurance, health insurance, India',
  authors: [{ name: 'Deal4Bank.com' }],
  creator: 'Deal4Bank.com',
  publisher: 'Deal4Bank.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deal4bank.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'deal4bank.com - Professional Financial Services',
    description: 'Leading financial services platform offering competitive loan rates and comprehensive insurance solutions.',
    url: 'https://deal4bank.com',
    siteName: 'deal4bank.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'deal4bank.com - Financial Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'deal4bank.com - Professional Financial Services',
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
    <html lang="en" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'deal4bank.com',
              description: 'Professional financial services platform offering loans and insurance solutions',
              url: 'https://moneymoney.com',
              telephone: '+91-924395699',
              email: 'info@deal4bank.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Indore',
                addressCountry: 'IN',
                streetAddress: 'Khirkiya, Madhya pradesh'
              },
              sameAs: [
                'https://facebook.com/deal4bank',
                'https://twitter.com/deal4bank',
                'https://linkedin.com/company/deal4bank'
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
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Invenstment Ideas',
                      name: 'Investment Services'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Property by or sale',
                      name: 'Property Services'
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}