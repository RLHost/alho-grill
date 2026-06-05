import { motion } from 'motion/react';
import { ShieldCheck, Star, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-vintage-cream border-b-4 border-vintage-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-vintage-red transform -rotate-3 border-4 border-vintage-dark translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1596683789851-93bb31e50523?auto=format&fit=crop&w=800&q=80" 
              alt="Alho e temperos rústicos"
              className="relative z-10 w-full h-[500px] object-cover border-4 border-vintage-dark grayscale-[20%]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter mb-6 text-vintage-dark">
              O Segredo Está na <span className="text-vintage-red">Atitude.</span>
            </h2>
            <p className="text-xl font-medium text-vintage-dark/80 mb-8">
              Nós não abrimos uma lanchonete para fazer mais do mesmo. A Alho Grill nasceu para resgatar a cultura de garagem dos anos 50, onde o sabor era forte, as porções eram generosas e comer com as mãos era regra, não exceção.
            </p>

            <div className="space-y-6">
              {[ 
                { icon: Zap, title: "A Pasta de Alho Imbatível", desc: "Nossa assinatura. Uma receita artesanal que transforma qualquer carne em uma experiência sensorial absurda." },
                { icon: Star, title: "Mussarela Borbulhante", desc: "Não colocamos uma fatia fria de queijo. Nós gratinamos a mussarela até ela derreter, dourar e borbulhar." },
                { icon: ShieldCheck, title: "Estilo Sem Frescura", desc: "Um ambiente e um cardápio pensados para quem gosta de comer de verdade, com intensidade e sem regras." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-vintage-dark text-vintage-accent p-2 border-2 border-vintage-dark">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl uppercase">{item.title}</h4>
                    <p className="font-medium text-vintage-dark/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}