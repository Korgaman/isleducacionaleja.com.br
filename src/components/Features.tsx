import { Clock, CreditCard, Sparkles, AlertCircle, BookOpen, UserCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Você se forma em menos tempo",
      description: "Nosso método é focado no que realmente importa. Esqueça anos de aulas arrastadas. Com o EJA da ISL Educacional, você estuda os conteúdos de forma dinâmica e objetiva, podendo concluir o Ensino Fundamental ou Ensino Médio em até 6 meses com total segurança.",
      highlights: [
        "Aceleração de estudos homologada",
        "Estude no seu ritmo, de onde quiser",
        "Aproveitamento de matérias já cursadas"
      ],
      badge: "Mais Rápido",
      borderColor: "border-brand-cyan/20",
      bgColor: "bg-brand-cyan/5",
      iconColor: "text-brand-cyan"
    },
    {
      icon: CreditCard,
      title: "Processos de pagamento flexibilizados",
      description: "Acreditamos que a falta de dinheiro não deve impedir seus sonhos. Criamos condições flexíveis de verdade: parcele no boleto bancário sem burocracia ou pague no cartão de crédito via recorrente (estilo Netflix, que não consome o limite total do seu cartão!).",
      highlights: [
        "Sem consulta ao SPC ou Serasa",
        "Parcelas baixas que cabem no seu orçamento",
        "Boleto facilitado ou Pix com super desconto"
      ],
      badge: "Mais Acessível",
      borderColor: "border-brand-amber/20",
      bgColor: "bg-brand-amber/5",
      iconColor: "text-brand-amber"
    },
    {
      icon: Sparkles,
      title: "Estudos sem nenhuma complicação",
      description: "Chega de apostilas gigantescas ou sistemas complicados. Nossa plataforma de estudos é leve, rápida e intuitiva, projetada para funcionar perfeitamente em qualquer celular. E você tem suporte diário de tutores reais direto pelo WhatsApp para tirar dúvidas.",
      highlights: [
        "Sem TCC ou trabalhos burocráticos",
        "Material didático resumido e simplificado",
        "Suporte humanizado via WhatsApp"
      ],
      badge: "Mais Prático",
      borderColor: "border-brand-gold/40",
      bgColor: "bg-brand-gold/5",
      iconColor: "text-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Diferenciais Exclusivos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Seu diploma sem burocracia e com total flexibilidade
          </h2>
          <p className="font-sans text-slate-500 text-base sm:text-lg">
            O EJA da ISL Educacional foi desenhado sob medida para quem trabalha, tem rotina corrida e precisa terminar os estudos com segurança e agilidade.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col bg-slate-50/50 border ${item.borderColor} rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:shadow-slate-100 transition-all hover:-translate-y-1 relative overflow-hidden`}
                id={`feature-card-${idx}`}
              >
                {/* Decorative absolute glow */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl ${item.bgColor} opacity-60`} />

                {/* Badge */}
                <div className="self-start">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.bgColor} ${item.iconColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="mt-6 space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200/60 my-6" />

                {/* Highlights */}
                <ul className="space-y-3 mt-auto">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust Alert footer */}
        <div className="mt-16 bg-brand-blue text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-brand-blue/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex gap-4 items-start text-left max-w-2xl">
            <div className="bg-white/10 p-3 rounded-2xl text-brand-gold shrink-0">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-brand-gold">
                Tem medo de não conseguir passar nas provas?
              </h4>
              <p className="font-sans text-sm text-slate-200 leading-relaxed">
                Fique calmo! Nosso material didático é direcionado exatamente para os temas das provas. Além disso, se você não passar em alguma matéria de primeira, você pode refazer a avaliação sem pagar nenhuma taxa adicional. Aqui nós seguramos sua mão até sua formatura!
              </p>
            </div>
          </div>

          <a
            href="#simulador"
            className="bg-brand-amber hover:bg-brand-amber/90 text-brand-blue font-sans font-bold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap transition-all shadow-md active:scale-95 text-center w-full md:w-auto"
            id="feature-footer-cta"
          >
            Quero Me Matricular
          </a>
        </div>

      </div>
    </section>
  );
}
