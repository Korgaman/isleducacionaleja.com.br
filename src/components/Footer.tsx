import { GraduationCap, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1121] text-slate-400 font-sans border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-800">
          {/* Logo & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 text-brand-amber p-2 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1">
                ISL <span className="text-brand-cyan">EDUCACIONAL</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Nossa missão é acelerar sua formação acadêmica de maneira legal, flexível e 100% online na ISL Educacional, desbloqueando novas oportunidades para o seu futuro profissional.
            </p>
            <div className="pt-2">
              <span className="block text-[10px] font-bold text-white uppercase tracking-wider mb-1">E-mail para Contato</span>
              <a href="mailto:isl_educacional@outlook.com" className="text-xs text-brand-cyan hover:underline transition-all">
                isl_educacional@outlook.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#beneficios" className="hover:text-brand-cyan transition-colors">Diferenciais</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-cyan transition-colors">Como Funciona</a></li>
              <li><a href="#simulador" className="hover:text-brand-cyan transition-colors">Simulador</a></li>
              <li><a href="#validade-mec" className="hover:text-brand-cyan transition-colors">Reconhecimento MEC</a></li>
              <li><a href="#localizacao" className="hover:text-brand-cyan transition-colors">Nosso Polo</a></li>
            </ul>
          </div>

          {/* Institutional notes */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Garantia de Legalidade</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              O programa da ISL Educacional apoia-se na Lei de Diretrizes e Bases da Educação Nacional (LDB - Lei 9.394/96). Os exames finais são realizados em conformidade com as secretarias estaduais e publicados no diário oficial com registro definitivo no SISTEC/MEC nacional.
            </p>
          </div>
        </div>

        {/* Bottom block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} ISL EDUCACIONAL - EJA ÁGIL. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-500">
              ISL - INSTITUTO SÃO LUCAS DE EDUCAÇÃO LTDA. | CNPJ: 33.279.176/0001-26
            </p>
            <p className="text-[9px] text-slate-600 mt-1 block">
              Desenvolvido por Shark Sales LTDA - CNPJ 65.555.420/0001-80 Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <button
              onClick={handleScrollTop}
              className="bg-slate-800/80 text-white p-2.5 rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center"
              aria-label="Voltar para o topo"
              id="footer-back-to-top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
