import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('cardapio');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80" 
          alt="Hambúrguer suculento" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-vintage-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-vintage-accent text-vintage-dark font-bold uppercase tracking-widest px-4 py-1 mb-6 border-2 border-vintage-dark transform -rotate-2">
              Clássico no Estilo • Atrevido no Sabor
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] mb-6 tracking-tighter">
              Mate Sua Fome de <span className="text-vintage-red">Atitude.</span>
            </h1>
            <p className="text-xl md:text-2xl text-vintage-cream/90 font-medium mb-10 max-w-2xl border-l-4 border-vintage-red pl-4">
              Esqueça os lanches sem graça. Descubra a explosão da nossa pasta de alho artesanal com mussarela borbulhante. Uma viagem direta aos anos 50 em cada mordida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToMenu}
                className="group flex items-center justify-center gap-2 bg-vintage-red text-white font-display text-2xl uppercase px-8 py-4 border-4 border-vintage-dark shadow-solid hover:shadow-solid-hover hover:translate-y-1 hover:translate-x-1 transition-all"
              >
                Quero Devorar Agora
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={28} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}