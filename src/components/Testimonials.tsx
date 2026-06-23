import { Star, Quote, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Roberto Silveira",
      age: 42,
      city: "São Bernardo do Campo - SP",
      role: "Logística / Motorista",
      quote: "Eu parei de estudar aos 16 anos para trabalhar e ajudar meus pais. Sempre quis voltar, mas as escolas tradicionais de supletivo exigiam presença toda noite e eu não tinha como ir. Na ISL Educacional, estudei 100% pelo celular no meu tempo livre. Concluí o Ensino Médio em 4 meses e agora fui promovido a supervisor de frota na empresa onde trabalho!",
      completedIn: "Concluiu em 4 meses",
      avatarUrl: ""
    },
    {
      id: "2",
      name: "Juliana Mendes",
      age: 29,
      city: "Guarulhos - SP",
      role: "Atendente de Telemarketing",
      quote: "O que mais me chamou atenção foi o pagamento flexível. Eu não tinha limite no meu cartão para comprar um curso caro inteiro, e a ISL Educacional ofereceu o parcelamento recorrente. É cobrado todo mês direto no cartão sem travar o limite! Sem contar o suporte no WhatsApp, os professores respondem na hora. O diploma chegou registrado no SISTEC e já estou fazendo faculdade de Pedagogia!",
      completedIn: "Concluiu em 3 meses",
      avatarUrl: ""
    },
    {
      id: "3",
      name: "Camila Rodrigues",
      age: 35,
      city: "Osasco - SP",
      role: "Empreendedora / Manicure",
      quote: "Com a correria do salão e os meus filhos, eu achava impossível voltar a estudar. Mas o método deles é super resumido, vai direto ao ponto sem enrolação ou trabalhos cansativos. Fiz as provinhas agendadas de forma online bem tranquila. Concluí o fundamental e o médio juntos de forma rápida, segura e sem nenhuma burocracia. Recomendo para todo mundo!",
      completedIn: "Concluiu em 6 meses",
      avatarUrl: ""
    }
  ];

  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Histórias de Sucesso
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Quem já mudou de vida com a ISL Educacional
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Veja relatos reais de ex-alunos que superaram as dificuldades e conquistaram o diploma em tempo recorde de maneira segura.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((student) => {
            const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            return (
              <div
                key={student.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative hover:shadow-lg transition-all"
                id={`testimonial-card-${student.id}`}
              >
                {/* Quote icon accent */}
                <div className="absolute top-6 right-6 text-slate-200">
                  <Quote className="h-10 w-10 stroke-[3]" />
                </div>

                {/* Main content */}
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed italic">
                    "{student.quote}"
                  </p>
                </div>

                {/* User profile details */}
                <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center font-bold text-xs select-none border border-brand-blue/10">
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-blue">
                      {student.name}, {student.age} anos
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {student.role}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {student.city}
                    </p>
                  </div>
                </div>

                {/* Timeline pill */}
                <div className="absolute top-6 left-6 bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded-full">
                  <span className="text-[10px] font-extrabold text-brand-cyan uppercase tracking-wider">
                    {student.completedIn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini CTA row */}
        <div className="mt-12 text-center">
          <a
            href="#simulador"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-blue transition-colors group"
            id="testimonials-more-cta"
          >
            <span>Faça como eles e mude de vida hoje mesmo</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
