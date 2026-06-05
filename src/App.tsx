import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <MenuSection />
        <AboutSection />
      </main>
      <Footer />
      
      <motion.a
        href="https://wa.me/5519995625602?text=Ol%C3%A1!%20Estou%20no%20site%20e%20quero%20fazer%20um%20pedido%20no%20Alho%20Grill."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full border-4 border-vintage-dark shadow-solid hover:shadow-solid-hover hover:translate-y-1 hover:translate-x-1 transition-all duration-200"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}

export default App;