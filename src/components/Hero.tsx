import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, GraduationCap, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "5533999323205";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20a%20landing%20page%20e%20gostaria%20de%20receber%20um%20orçamento%20do%20EJA%20da%20ISL%20Educacional%20para%20concluir%20meus%20estudos.`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-brand-blue/[0.04] via-transparent to-transparent overflow-hidden" id="hero">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/10 px-3 py-1.5 rounded-full"
            >
              <Zap className="h-4 w-4 text-brand-amber fill-brand-amber" />
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                Supletivo EJA ISL Educacional 100% Online
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-blue leading-[1.1] tracking-tight"
            >
              Você com seu diploma em <span className="text-brand-cyan">menos tempo</span>, com menos complicação!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Conquiste seu diploma de <strong className="text-brand-blue">Ensino Fundamental ou Médio</strong> na <strong className="text-brand-blue">ISL Educacional</strong>. Estude no seu ritmo com processos de pagamentos totalmente flexibilizados e suporte personalizado do início ao fim!
            </motion.p>

            {/* Quick Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto lg:mx-0 pt-2"
            >
              <div className="flex items-center gap-2.5 justify-center lg:justify-start text-slate-700">
                <CheckCircle className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-semibold">Formação em até 6 meses</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start text-slate-700">
                <CheckCircle className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-semibold">Pagamento parcelado flexível</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start text-slate-700">
                <CheckCircle className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-semibold">Sem consulta ao SPC/Serasa</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start text-slate-700">
                <CheckCircle className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-semibold">Diploma Reconhecido pelo MEC</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber/90 text-brand-blue font-sans font-bold px-8 py-4 rounded-2xl shadow-xl shadow-brand-amber/20 transition-all hover:scale-[1.03] active:scale-[0.98] text-base group"
                id="hero-cta-simulador"
              >
                <span>Simular Meu Tempo Grátis</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-sans font-semibold px-8 py-4 rounded-2xl transition-all shadow-sm hover:shadow text-base"
                id="hero-cta-whatsapp"
              >
                <span>Falar com Consultor</span>
              </a>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-6 text-xs text-slate-500 border-t border-slate-100 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Site 100% Seguro</span>
              </div>
              <div>•</div>
              <div>Matrículas abertas para todo o Brasil</div>
            </motion.div>
          </div>

          {/* Hero Visual Card / Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-3xl shadow-2xl shadow-brand-blue/10 border border-slate-100/80"
              id="hero-card"
            >
              {/* Top graduation badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-blue text-white p-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 border-2 border-white">
                <GraduationCap className="h-6 w-6 text-brand-gold" />
                <span className="text-xs font-bold uppercase tracking-widest font-display">
                  ISL Educacional
                </span>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Matrícula Rápida
                    </span>
                    <span className="text-sm font-bold text-brand-blue">
                      Vagas Garantidas 2026
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase">
                    100% Online
                  </span>
                </div>

                {/* Simulated Certificate Graphic */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Ministério da Educação
                    </span>
                    <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3.5 bg-slate-200 rounded w-3/4" />
                    <div className="h-2.5 bg-slate-100 rounded w-5/6" />
                    <div className="h-2.5 bg-slate-100 rounded w-1/2" />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200/50">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                      DIPLOMA REGISTRADO SISTEC/MEC
                    </span>
                    <span className="text-[10px] font-extrabold text-brand-amber">
                      VÁLIDO NACIONAL
                    </span>
                  </div>
                </div>

                {/* Main Prompts */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 bg-brand-blue/[0.02] p-3 rounded-xl border border-slate-100">
                    <div className="bg-brand-blue/5 text-brand-blue p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-brand-blue uppercase">
                        Formação Acelerada
                      </h4>
                      <p className="text-xs text-slate-500">
                        Se formará em até 6 meses com provas objetivas simplificadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-brand-blue/[0.02] p-3 rounded-xl border border-slate-100">
                    <div className="bg-brand-amber/5 text-brand-amber p-2 rounded-lg">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-brand-blue uppercase">
                        Pagamento Facilitado
                      </h4>
                      <p className="text-xs text-slate-500">
                        Parcelamento recorrente no cartão (sem prender limite) ou boleto.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust CTA */}
                <div className="text-center pt-2">
                  <a
                    href="#simulador"
                    className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
                    id="hero-card-cta"
                  >
                    Iniciar Minha Matrícula
                  </a>
                  <span className="block text-[10px] text-slate-400 mt-2">
                    Não requer aprovação de crédito. Todo mundo pode estudar!
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
