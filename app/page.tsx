import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';

// Main page component with hero section
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950 transition-colors duration-200">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Title and Description Section */}
      <section className="py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            India's Leading Financial Services Platform
          </h1>
          <p className="mt-2 text-sm md:text-lg text-gray-600 dark:text-gray-300 mx-auto leading-relaxed">
            Get instant access to competitive loans, comprehensive insurance plans, smart investment options, 
            and property services. We make financial solutions simple, transparent, and tailored to your needs 
            with over 1 million satisfied customers across India.
          </p>
          {/* Trust Badges */}
          <div className="mt-3 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Quick Approval</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-blue-600 font-medium dark:text-blue-400">Best Rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-blue-600 font-medium dark:text-blue-400">No Hidden Charges</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero section with benefits and form */}
      <HeroSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}