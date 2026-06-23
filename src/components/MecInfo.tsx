import { ShieldCheck, Award, FileText, CheckCircle, GraduationCap } from 'lucide-react';

export default function MecInfo() {
  const achievements = [
    {
      title: "Validade Nacional",
      desc: "Seu diploma de Ensino Fundamental ou Médio é emitido por escolas autorizadas pelo Conselho Estadual de Educação (CEE) e cadastrado no SISTEC/MEC."
    },
    {
      title: "Aceito em Faculdades",
      desc: "Use seu diploma para ingressar em qualquer faculdade pública ou privada do Brasil (através do ENEM, Prouni, Sisu ou vestibular tradicional)."
    },
    {
      title: "Concursos Públicos",
      desc: "Participe de qualquer concurso municipal, estadual ou federal que exija nível fundamental ou médio como requisito básico."
    },
    {
      title: "Evolução Profissional",
      desc: "Apresente na sua empresa atual para conquistar aquela tão sonhada promoção ou para se candidatar a vagas de emprego melhores."
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="validade-mec">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual accreditation seal panel (Left side) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50">
              <div className="absolute top-4 right-4 bg-brand-gold/15 p-2 rounded-xl text-brand-amber">
                <Award className="h-6 w-6" />
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start items-center gap-2 text-brand-blue">
                  <ShieldCheck className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="font-display font-extrabold text-sm uppercase tracking-widest text-emerald-600">
                    100% Legalizado pelo MEC
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-brand-blue leading-tight">
                  Como funciona a homologação do diploma?
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Muitas pessoas têm receio de fazer supletivo pela internet e cair em golpes de diplomas falsos. Na <strong>ISL Educacional</strong>, garantimos transparência total:
                </p>

                {/* Step indicators */}
                <div className="space-y-4 text-left">
                  <div className="flex gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-brand-blue uppercase">Avaliações Regulamentadas</h4>
                      <p className="text-[11px] text-slate-500">As provas são feitas em conformidade com as diretrizes da LDB (Lei de Diretrizes e Bases da Educação).</p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-brand-blue uppercase">Publicação no Diário Oficial</h4>
                      <p className="text-[11px] text-slate-500">Logo após a conclusão, seu nome é publicado no sistema de registro oficial escolar estadual.</p>
                    </div>
                  </div>

                  <div className="flex gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-brand-blue uppercase">Inclusão no SISTEC</h4>
                      <p className="text-[11px] text-slate-500">Seu registro acadêmico é lançado no SISTEC nacional, permitindo que qualquer faculdade ou empresa verifique a autenticidade.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center lg:justify-between gap-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Certificado Válido Lei 9.394/96
                  </span>
                  <div className="flex gap-1.5 text-brand-amber">
                    <CheckCircle className="h-4 w-4 text-brand-cyan fill-brand-cyan/10" />
                    <span className="text-[10px] font-bold text-brand-blue">SISTEC Registrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texts (Right side) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
              Legalidade e Segurança
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
              Um diploma oficial para transformar sua vida!
            </h2>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Não perca mais tempo. A falta de ensino médio é a principal causa de desemprego e baixos salários no Brasil. Nosso supletivo online é regulamentado e totalmente reconhecido pelos conselhos escolares estaduais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm" id={`achievement-card-${idx}`}>
                  <div className="h-8 w-8 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center">
                    <FileText className="h-4.5 w-4.5 text-brand-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-brand-blue uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-200">
              <div className="flex -space-x-2">
                {/* Simulated Student avatars */}
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Aluno EJA"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border-2 border-slate-100 object-cover"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 text-center sm:text-left">
                Mais de <strong>12.000 alunos</strong> já concluíram e validaram o diploma no SISTEC.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
