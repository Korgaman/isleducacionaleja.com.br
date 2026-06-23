import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappNumber = "5533999323205";
  const message = "Olá! Vi a landing page e gostaria de entender melhor como funciona o EJA da ISL Educacional para terminar meus estudos rapidamente.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      referrerPolicy="no-referrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white p-4 sm:p-4.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group animate-bounce cursor-pointer border border-white/20"
      id="whatsapp-floating-action-btn"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 -z-10 animate-ping" />
      
      {/* Icon */}
      <MessageCircle className="h-6 w-6 sm:h-6.5 sm:w-6.5 fill-white text-whatsapp stroke-1" />

      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-700">
        Fale Conosco no WhatsApp
      </span>
    </a>
  );
}
