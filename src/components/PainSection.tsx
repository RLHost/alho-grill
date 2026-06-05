import { motion } from 'motion/react';
import { Skull, Frown, AlertOctagon } from 'lucide-react';

export function PainSection() {
  return (
    <section id="problema" className="py-24 bg-vintage-cream border-y-4 border-vintage-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-vintage-dark uppercase tracking-tight mb-6"
          >
            A Ditadura do Lanche <span className="text-vintage-red underline decoration-8 underline-offset-4">Sem Graça</span> Acabou.
          </motion.h2>
          <p className="text-xl text-vintage-dark/80 font-medium">
            Você já se sentiu enganado ao morder um lanche seco, com gosto de nada e ingredientes artificiais? A maioria das lanchonetes perdeu a alma. Nós trouxemos ela de volta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { icon: Frown, title: "Sabor de Papelão", desc: "Carnes secas e sem tempero que você esquece 5 minutos depois de comer." },
            { icon: Skull, title: "Ingredientes Artificiais", desc: "Molhos industrializados que escondem a falta de qualidade da comida." },
            { icon: AlertOctagon, title: "Sem Personalidade", desc: "Lugares sem graça, com lanches padronizados que não despertam nenhuma emoção." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border-4 border-vintage-dark p-8 shadow-[8px_8px_0px_0px_rgba(211,47,47,1)]"
            >
              <div className="bg-vintage-dark text-vintage-cream w-16 h-16 flex items-center justify-center rounded-full mb-6 border-2 border-vintage-dark">
                <item.icon size={32} />
              </div>
              <h3 className="font-display text-2xl uppercase mb-3">{item.title}</h3>
              <p className="text-lg font-medium text-vintage-dark/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}