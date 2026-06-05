import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-vintage-dark text-vintage-cream pt-16 pb-8 border-t-8 border-vintage-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-4xl uppercase tracking-tighter mb-4">
              Alho<span className="text-vintage-red">Grill</span>
            </h3>
            <p className="font-medium text-vintage-cream/70 mb-6">
              Clássico no estilo, atrevido no sabor. A verdadeira experiência diner dos anos 50 com a intensidade que você merece.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/alho.grill" target="_blank" rel="noopener noreferrer" className="bg-vintage-cream text-vintage-dark p-2 border-2 border-transparent hover:border-vintage-red hover:bg-vintage-red hover:text-white transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl uppercase mb-6 text-vintage-accent">Quartel General</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-vintage-red shrink-0 mt-1" size={20} />
                <span>Av. Dr. Armando Salles de Oliveira, 65</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-vintage-red shrink-0" size={20} />
                <span>19 99562-5602</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-vintage-red shrink-0" size={20} />
                <span>contato@alhogrillvintage.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl uppercase mb-6 text-vintage-accent">Ação Imediata</h4>
            <p className="font-medium text-vintage-cream/70 mb-4">
              A fome não espera. Garanta seu lanche agora mesmo pelo nosso WhatsApp oficial.
            </p>
            <a 
              href="https://wa.me/5519995625602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-vintage-red text-white font-bold uppercase py-4 border-2 border-white hover:bg-white hover:text-vintage-red transition-colors"
            >
              Fazer Pedido
            </a>
          </div>
        </div>

        <div className="border-t-2 border-vintage-cream/10 pt-8 text-center font-medium text-sm text-vintage-cream/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Alho Grill. Todos os direitos reservados. Fome aniquilada com sucesso.</p>
        </div>
      </div>
    </footer>
  );
}