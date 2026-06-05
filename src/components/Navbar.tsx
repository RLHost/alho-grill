import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-vintage-dark ${scrolled ? 'bg-vintage-cream py-2' : 'bg-vintage-cream py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Flame className="text-vintage-red" size={32} />
            <span className="font-display text-3xl tracking-tighter uppercase text-vintage-dark">
              Alho<span className="text-vintage-red">Grill</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-bold uppercase tracking-wider">
            <button onClick={() => scrollToSection('problema')} className="hover:text-vintage-red transition-colors">A Verdade</button>
            <button onClick={() => scrollToSection('cardapio')} className="hover:text-vintage-red transition-colors">As Pin-ups</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-vintage-red transition-colors">Nossa História</button>
            <button 
              onClick={() => scrollToSection('cardapio')}
              className="bg-vintage-red text-white px-6 py-2 border-2 border-vintage-dark shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
            >
              Pedir Agora
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-vintage-dark">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-vintage-cream border-b-4 border-vintage-dark py-4 px-4 flex flex-col space-y-4 font-bold uppercase"
        >
          <button onClick={() => scrollToSection('problema')} className="text-left w-full py-2 border-b-2 border-vintage-dark/10">A Verdade</button>
          <button onClick={() => scrollToSection('cardapio')} className="text-left w-full py-2 border-b-2 border-vintage-dark/10">As Pin-ups</button>
          <button onClick={() => scrollToSection('sobre')} className="text-left w-full py-2 border-b-2 border-vintage-dark/10">Nossa História</button>
          <button 
            onClick={() => scrollToSection('cardapio')}
            className="bg-vintage-red text-white w-full py-3 border-2 border-vintage-dark shadow-solid active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
          >
            Pedir Agora
          </button>
        </motion.div>
      )}
    </nav>
  );
}