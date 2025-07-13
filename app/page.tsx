import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';

// Main page component with hero section
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Hero section with benefits and form */}
      <HeroSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}