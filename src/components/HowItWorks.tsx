import { UserPlus, BookOpen, FileCheck, Award } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: UserPlus,
      title: "Matrícula Simplificada",
      desc: "Simule seu tempo de conclusão, escolha sua forma flexível de pagamento e finalize sua inscrição em menos de 5 minutos via WhatsApp com nossos consultores."
    },
    {
      num: "02",
      icon: BookOpen,
      title: "Aulas Online 24h",
      desc: "Estude de forma flexível pelo computador ou celular. Nosso material didático é dinâmico, direto ao ponto e focado nos temas principais das provas de supletivo."
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Avaliações Objetivas",
      desc: "Realize suas provas de forma agendada e tranquila. Se não for aprovado de primeira em alguma disciplina, você poderá refazer sem custos extras."
    },
    {
      num: "04",
      icon: Award,
      title: "Diploma Registrado",
      desc: "Parabéns! Seu diploma de conclusão oficial é expedido, publicado no Diário Oficial e registrado no SISTEC/MEC com validade nacional garantida por Lei."
    }
  ];

  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Passo a Passo Simples
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Como funciona o EJA da ISL Educacional?
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Desenvolvemos uma jornada de estudos limpa e simplificada para que você saia com o diploma na mão sem perder tempo com burocracias.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Decorative connector line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all border border-slate-150/80 rounded-3xl p-6 relative group"
                id={`step-card-${idx}`}
              >
                {/* Step number badge */}
                <span className="absolute top-4 right-6 text-3xl font-display font-extrabold text-slate-200/80 group-hover:text-brand-cyan/20 transition-colors">
                  {step.num}
                </span>

                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan transition-colors flex items-center justify-center mb-6">
                  <IconComponent className="h-5.5 w-5.5" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-brand-blue">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
