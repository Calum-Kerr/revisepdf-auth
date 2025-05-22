
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ToolsSection />
      <Footer />
    </main>
  );
}
