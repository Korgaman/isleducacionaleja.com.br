import React from 'react';
import { Check, ShieldCheck, HelpCircle, AlertTriangle, TrendingUp, Sparkles, BookOpen, FileText, Monitor, Users } from 'lucide-react';

export default function Pricing() {
  const advantages = [
    { text: "As aulas são 100% online", icon: Monitor, desc: "Acesse todo o conteúdo de onde estiver, usando celular, tablet ou computador." },
    { text: "Suporte acadêmico completo", icon: Users, desc: "Tutores reais prontos para ajudar e tirar suas dúvidas de forma rápida." },
    { text: "Facilidade de pagamento", icon: Sparkles, desc: "Condições flexíveis com parcelamento recorrente ou boleto facilitado." },
    { text: "Conclusão em até 3 meses", icon: ShieldCheck, desc: "Aceleração de estudos rápida para você recuperar o tempo perdido." },
    { text: "Estude onde tiver e quando puder", icon: BookOpen, desc: "A plataforma fica disponível 24 horas por dia, 7 dias por semana." },
    { text: "Videoaulas online explicativas", icon: Monitor, desc: "Explicações diretas ao ponto, dinâmicas e de fácil compreensão." },
    { text: "Apostilas em PDF inclusas", icon: FileText, desc: "Materiais didáticos resumidos e otimizados para baixar e estudar offline." },
    { text: "Ambiente virtual de aprendizagem - AVA", icon: ShieldCheck, desc: "Portal do aluno moderno, intuitivo e muito fácil de usar." }
  ];

  const pricingData = [
    { condition: "À Vista (Super Promoção)", credit: "R$ 1.099,00", ticket: "R$ 1.099,00", highlight: true },
    { condition: "12 Meses (Super Promoção)", credit: "12 x R$ 110,00", ticket: "—", highlight: true },
    { condition: "8 Meses (Super Promoção)", credit: "—", ticket: "8 x R$ 175,00", highlight: true },
    { condition: "4 Meses (Padrão)", credit: "4 x R$ 352,72", ticket: "1 x R$ 499,00 + 3 x R$ 400,00", highlight: false },
    { condition: "6 Meses (Padrão)", credit: "6 x R$ 239,73", ticket: "1 x R$ 499,00 + 5 x R$ 250,00", highlight: false },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Advantages Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Investimento & Benefícios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Algumas vantagens do EJA online ISL
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Estude com segurança, legalidade e flexibilidade na maior instituição parceira de formação de jovens e adultos do Brasil.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col justify-between"
                id={`advantage-card-${index}`}
              >
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-cyan/5 text-brand-cyan flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {adv.text}
                  </h4>
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Career Growth CTA Highlight banner */}
        <div className="bg-brand-blue text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative overflow-hidden shadow-lg shadow-brand-blue/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-4 text-left max-w-xl">
            <div className="bg-white/10 p-3.5 rounded-2xl text-brand-cyan">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Aumente as suas chances de conseguir um emprego melhor.
              </h3>
              <p className="font-sans text-slate-300 text-xs sm:text-sm mt-1">
                Concluir os seus estudos é o primeiro passo para conquistar salários mais altos, aprovações em concursos e promoções de cargos.
              </p>
            </div>
          </div>
          <a
            href="#simulador"
            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto text-center"
            id="career-banner-cta"
          >
            Começar Agora
          </a>
        </div>

        {/* Special Promotion Highlight Card */}
        <div className="bg-gradient-to-r from-amber-500/10 via-brand-cyan/10 to-brand-blue/10 border-2 border-brand-cyan/20 rounded-3xl p-6 sm:p-10 mb-12 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-4 max-w-3xl text-left">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5 fill-amber-600 text-amber-600 animate-pulse" />
              Oferta Especial Exclusiva ISL
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-blue tracking-tight">
              Plano de Estudos Promocional
            </h3>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Garanta sua matrícula hoje mesmo aproveitando a nossa melhor condição especial de parcelamento ou pagamento à vista:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 w-full">
              <div className="bg-white/80 backdrop-blur border border-slate-200/80 p-4 rounded-2xl flex flex-col justify-between shadow-sm">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">💳 Cartão de Crédito</span>
                <span className="text-xl font-black text-brand-blue mt-1">12x de <span className="text-brand-cyan">R$ 110,00</span></span>
                <span className="text-[10px] text-slate-400 mt-1 leading-normal">*Sem consumir o limite total do seu cartão.</span>
              </div>
              <div className="bg-white/80 backdrop-blur border border-slate-200/80 p-4 rounded-2xl flex flex-col justify-between shadow-sm">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">📄 Boleto Bancário</span>
                <span className="text-xl font-black text-brand-blue mt-1">8x de <span className="text-brand-cyan">R$ 175,00</span></span>
                <span className="text-[10px] text-slate-400 mt-1 leading-normal">*Sem consulta ao SPC/Serasa ou burocracia.</span>
              </div>
              <div className="bg-white/80 backdrop-blur border border-slate-200/80 p-4 rounded-2xl flex flex-col justify-between shadow-sm">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">⚡ Pagamento à Vista</span>
                <span className="text-xl font-black text-brand-blue mt-1">Apenas <span className="text-brand-cyan">R$ 1.099,00</span></span>
                <span className="text-[10px] text-slate-400 mt-1 leading-normal">*Super desconto Pix com liberação imediata.</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <a
              href="#simulador"
              className="inline-flex items-center justify-center bg-brand-cyan hover:bg-brand-cyan/90 text-white font-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:scale-[1.03] active:scale-[0.97] text-center w-full md:w-auto"
            >
              Simular Meu Plano
            </a>
          </div>
        </div>

        {/* Pricing Table block */}
        <div className="bg-white border border-slate-200/60 rounded-3xl shadow-xl shadow-slate-200/40 overflow-hidden mb-12">
          <div className="p-6 sm:p-10 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-blue">
              Tabela de Preços e Condições de Pagamento
            </h3>
            <p className="font-sans text-slate-500 text-xs sm:text-sm mt-1">
              Confira a tabela de preços abaixo e escolha o plano que melhor se adapta à sua realidade:
            </p>
          </div>

          {/* Table Container with horizontal scroll wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" id="pricing-conditions-table">
              <thead>
                <tr className="bg-brand-blue text-white font-sans text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Condição</th>
                  <th className="py-4 px-6 font-bold">Cartão de Crédito</th>
                  <th className="py-4 px-6 font-bold">Boleto Bancário</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-xs sm:text-sm">
                {pricingData.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`hover:bg-slate-50/80 transition-colors ${row.highlight ? 'bg-brand-cyan/5 font-semibold text-brand-blue' : 'text-slate-700'}`}
                  >
                    <td className="py-4 px-6 font-bold flex items-center gap-2">
                      {row.highlight && (
                        <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse shrink-0" />
                      )}
                      <span>{row.condition}</span>
                    </td>
                    <td className={`py-4 px-6 ${row.highlight ? 'text-brand-cyan font-extrabold' : 'font-medium'}`}>
                      {row.credit}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-600">
                      {row.ticket}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Payment Security trust badges */}
          <div className="p-6 bg-slate-50/40 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Ambiente de pagamento 100% seguro
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Sem consulta ao SPC ou Serasa
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Sem taxa de matrícula oculta
            </span>
          </div>
        </div>

        {/* Important conditions box */}
        <div className="bg-amber-50/50 border border-amber-200/70 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm" id="pricing-important-note">
          <div className="flex items-center gap-2.5 text-amber-800">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <h4 className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wider">
              Importante
            </h4>
          </div>
          <div className="font-sans text-xs sm:text-sm text-amber-900/80 leading-relaxed space-y-3">
            <p>
              Aos alunos que escolherem a opção de pagamento por boleto bancário, o certificado, histórico escolar, e lançamento no diário oficial, serão confeccionados e disponibilizados em até <strong>90 dias após a quitação</strong> de todos os boletos.
            </p>
            <p>
              Após a conclusão de todas as atividades atingindo a nota média para aprovação em cada uma, o ISL Educacional tem o prazo legal de <strong>até 90 dias</strong> para a entrega final do certificado, histórico escolar e lançamento oficial no diário oficial.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
