import { motion } from 'motion/react';
import { Flame } from 'lucide-react';

const menuItems = [
  {
    name: "Miss Rib Bomb",
    slogan: "Explosão carnuda a cada mordida!",
    desc: "Costela macia, desfiada e bem temperada, nossa exclusiva pasta de alho e mussarela gratinada. Pra comer com as mãos sem culpa.",
    color: "bg-vintage-red"
  },
  {
    name: "Bad Toscana",
    slogan: "Linda, rebelde e intensa",
    desc: "Linguiça toscana grelhada, pasta de alho e mussarela gratinada. Um sabor rústico, forte e sem rodeios para paladares marcantes.",
    color: "bg-vintage-dark"
  },
  {
    name: "Miss Mignon",
    slogan: "Clássica, elegante, impossível de resistir",
    desc: "Filé mignon macio, batata, pasta de alho e mussarela gratinada no ponto certo. Sofisticação com a alma da comida de rua.",
    color: "bg-vintage-accent"
  },
  {
    name: "Red Velvet Steak",
    slogan: "Vermelha, intensa e de respeito",
    desc: "Carne desfiada, extremamente suculenta, pasta de alho e mussarela gratinada. Sabor denso, encorpado e inesquecível.",
    color: "bg-vintage-red"
  },
  {
    name: "Pinup Pork",
    slogan: "Carne suculenta, curvas perfeitas",
    desc: "Pernil bem temperado, macio, pasta de alho e mussarela gratinada. O clássico repaginado com atitude.",
    color: "bg-vintage-dark"
  },
  {
    name: "Lady Chicken",
    slogan: "Doce no nome, quente no sabor",
    desc: "Frango temperado, suculento, pasta de alho e finalizado com muito queijo derretido. A moça bem-comportada que esconde um lado surpreendente.",
    color: "bg-vintage-accent"
  }
];

export function MenuSection() {
  return (
    <section id="cardapio" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-vintage-dark text-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-vintage-red text-white px-6 py-2 border-2 border-white mb-6 transform -rotate-1"
          >
            <Flame size={24} />
            <span className="font-bold uppercase tracking-widest">A Cura Para a Fome</span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            Escolha Sua <span className="text-vintage-accent">Pin-up</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-medium text-vintage-cream/80">
            Todos os nossos lanches levam a assinatura da casa: uma pasta de alho artesanal inconfundível coberta por mussarela gratinada até borbulhar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-vintage-cream text-vintage-dark border-4 border-white p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute top-0 right-0 w-16 h-16 ${item.color} transform translate-x-8 -translate-y-8 rotate-45 border-4 border-white z-0`}></div>
              <div className="relative z-10">
                <h3 className="font-display text-3xl uppercase mb-2">{item.name}</h3>
                <p className="font-bold text-vintage-red uppercase text-sm tracking-wider mb-4 border-b-2 border-vintage-dark/10 pb-2">
                  "{item.slogan}"
                </p>
                <p className="font-medium text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5519995625602"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-vintage-accent text-vintage-dark font-display text-3xl uppercase px-12 py-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            Convocar Minha Pin-up Agora
          </a>
        </div>
      </div>
    </section>
  );
}