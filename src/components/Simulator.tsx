import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Landmark, MessageSquare, ShieldCheck, Sparkles, GraduationCap, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

export default function Simulator() {
  const [stage, setStage] = useState<'fundamental' | 'medio' | 'ambos'>('medio');
  const [lastGrade, setLastGrade] = useState<string>('incompleto_medio');
  const [paymentPref, setPaymentPref] = useState<'boleto' | 'recorrente' | 'pix'>('recorrente');
  const [age, setAge] = useState<number>(24);

  // Dynamic calculations for preview
  const [estimatedMonths, setEstimatedMonths] = useState(6);
  const [estimatedPrice, setEstimatedPrice] = useState(99);

  useEffect(() => {
    let months = 6;
    let price = 99;

    if (stage === 'fundamental') {
      months = lastGrade === 'quinta_serie' ? 6 : 3;
      price = paymentPref === 'pix' ? 79 : paymentPref === 'recorrente' ? 89 : 99;
    } else if (stage === 'medio') {
      months = lastGrade === 'primeiro_ano' ? 6 : 3;
      price = paymentPref === 'pix' ? 89 : paymentPref === 'recorrente' ? 99 : 109;
    } else {
      months = 9;
      price = paymentPref === 'pix' ? 129 : paymentPref === 'recorrente' ? 149 : 159;
    }

    setEstimatedMonths(months);
    setEstimatedPrice(price);
  }, [stage, lastGrade, paymentPref]);

  const stageLabels = {
    fundamental: "Ensino Fundamental (6º ao 9º ano)",
    medio: "Ensino Médio (1º ao 3º ano)",
    ambos: "Ensino Fundamental + Ensino Médio"
  };

  const paymentLabels = {
    boleto: "Boleto Facilitado (Sem Consulta)",
    recorrente: "Mensalidade Recorrente (Não consome limite)",
    pix: "Pix com Desconto Exclusivo"
  };

  const getEscolaridadeLabel = (val: string) => {
    const mapping: Record<string, string> = {
      quinta_serie: 'Até antiga 5ª série (6º ano do EF)',
      setima_serie: 'Até antiga 7ª série (8º ano do EF)',
      oitava_serie: 'Parei na 8ª série (9º ano do EF completo)',
      incompleto_medio: 'Fundamental Completo / Sem Ensino Médio',
      primeiro_ano: 'Até o 1º ano do Ensino Médio',
      segundo_ano: 'Até o 2º ano do Ensino Médio',
      fundamental_completo: 'Fundamental completo (precisa apenas do Ensino Médio)',
      fundamental_incompleto: 'Parei no Ensino Fundamental incompleto (preciso de ambos)'
    };
    return mapping[val] || val;
  };

  const handleWhatsAppSend = () => {
    const whatsappNumber = "5533999323205";
    const escLabel = getEscolaridadeLabel(lastGrade);

    let planoEscolhido = "";
    if (paymentPref === 'recorrente') {
      planoEscolhido = "12x de R$ 110,00 no cartão de crédito";
    } else if (paymentPref === 'boleto') {
      planoEscolhido = "8x de R$ 175,00 no boleto bancário";
    } else {
      planoEscolhido = "R$ 1.099,00 à vista";
    }

    const text = `Olá! Gostaria de verificar as condições especiais do EJA e preencher meu formulário de inscrição oficial:

🎓 *MEU PLANO DE ESTUDOS*
*Nível desejado:* ${stageLabels[stage]}
*Idade:* ${age} anos
*Última série estudada:* ${escLabel}
*Plano de pagamento desejado:* ${planoEscolhido}

Gostaria de falar com um consultor acadêmico agora!`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'referrerPolicy=no-referrer');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-brand-blue/[0.02] to-transparent" id="simulador">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Inscrição & Cronograma Imediato
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Verifique as Condições Especiais
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Selecione suas informações abaixo para calcular seu cronograma personalizado e verifique as condições especiais pelo WhatsApp.
          </p>
        </div>

        {/* Simulator box */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-brand-blue/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12" id="simulador-container-box">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <h3 className="font-display font-bold text-xl text-brand-blue flex items-center gap-2 pb-4 border-b border-slate-100">
              <Calculator className="h-5 w-5 text-brand-cyan" />
              <span>Simulador de Estudos</span>
            </h3>

            {/* Stage Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-brand-cyan" />
                Qual nível deseja concluir?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'fundamental', label: 'Fundamental', desc: '6º ao 9º Ano' },
                  { id: 'medio', label: 'Ensino Médio', desc: '1º ao 3º Ano' },
                  { id: 'ambos', label: 'Ambos', desc: 'Completo' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setStage(item.id as any);
                      if (item.id === 'fundamental') setLastGrade('quinta_serie');
                      else if (item.id === 'medio') setLastGrade('incompleto_medio');
                      else setLastGrade('fundamental_completo');
                    }}
                    className={`p-3.5 text-left rounded-2xl border transition-all flex flex-col justify-between ${
                      stage === item.id
                        ? 'border-brand-cyan bg-brand-cyan/5 ring-2 ring-brand-cyan/15'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    id={`stage-btn-${item.id}`}
                  >
                    <span className={`text-xs font-bold ${stage === item.id ? 'text-brand-cyan' : 'text-slate-800'}`}>
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Age Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Qual é a sua idade?
                </label>
                <span className="text-sm font-extrabold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-md">
                  {age} anos
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="75"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none"
                id="age-range-input"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>15 anos</span>
                <span>45 anos</span>
                <span>75 anos</span>
              </div>
              {stage === 'medio' && age < 18 && (
                <div className="bg-amber-50 text-amber-800 text-[11px] p-2.5 rounded-lg border border-amber-200/50 flex gap-1.5 items-start">
                  <span className="font-bold">Aviso:</span>
                  <span>O MEC exige idade mínima de 18 anos completos para emissão do diploma de Ensino Médio pelo EJA.</span>
                </div>
              )}
            </div>

            {/* Escolaridade */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Até qual série/ano você estudou?
              </label>
              <select
                value={lastGrade}
                onChange={(e) => setLastGrade(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan/15 transition-colors cursor-pointer"
                id="last-grade-select"
              >
                {stage === 'fundamental' && (
                  <>
                    <option value="quinta_serie">Até antiga 5ª série (6º ano do Ensino Fundamental)</option>
                    <option value="setima_serie">Até antiga 7ª série (8º ano do Ensino Fundamental)</option>
                    <option value="oitava_serie">Parei na 8ª série (9º ano do Ensino Fundamental completo)</option>
                  </>
                )}
                {stage === 'medio' && (
                  <>
                    <option value="incompleto_medio">Ensino Fundamental Completo / Não iniciei Ensino Médio</option>
                    <option value="primeiro_ano">Fiz até o 1º ano do Ensino Médio</option>
                    <option value="segundo_ano">Fiz até o 2º ano do Ensino Médio</option>
                  </>
                )}
                {stage === 'ambos' && (
                  <>
                    <option value="fundamental_completo">Fundamental completo (preciso apenas do Ensino Médio)</option>
                    <option value="fundamental_incompleto">Parei no Ensino Fundamental incompleto (preciso de ambos)</option>
                  </>
                )}
              </select>
            </div>

            {/* Payment Method Option */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Como prefere pagar seu investimento?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'recorrente', title: 'Cartão Recorrente', desc: 'Não prende limite' },
                  { id: 'boleto', title: 'Boleto s/ Consulta', desc: 'Facilitado' },
                  { id: 'pix', title: 'Pix com Desconto', desc: 'Melhor preço' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPaymentPref(item.id as any)}
                    className={`p-3.5 text-left rounded-2xl border transition-all flex flex-col justify-between ${
                      paymentPref === item.id
                        ? 'border-brand-amber bg-brand-amber/5 ring-2 ring-brand-amber/15'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    id={`pay-btn-${item.id}`}
                  >
                    <span className={`text-xs font-extrabold ${paymentPref === item.id ? 'text-brand-amber' : 'text-slate-800'}`}>
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Information request note */}
            <div className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 space-y-2">
              <h4 className="text-xs font-extrabold text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                Matrícula Oficial e Condições Especiais
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Após selecionar as suas opções acima, entre em contato conosco pelo WhatsApp para validar o seu desconto especial e preencher o nosso <strong>formulário de inscrição oficial</strong>.
              </p>
            </div>
          </div>

          {/* Results Display Section (Right panel) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-blue to-[#081832] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,141,218,0.15),transparent)] pointer-events-none" />
            <div className="absolute top-1/2 -right-24 w-48 h-48 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 my-auto py-6">
              <div className="inline-flex bg-brand-cyan/20 px-3 py-1 rounded-full text-brand-cyan text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="h-3 w-3 inline mr-1 fill-brand-cyan" /> Cronograma Estimado
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 block">
                  Tempo Conclusão:
                </span>
                <div className="text-4xl sm:text-5xl font-display font-black text-brand-gold tracking-tight animate-pulse">
                  {estimatedMonths} MESES!
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculado com base na sua escolaridade anterior e idade ({age} anos).
                </p>
              </div>

              <div className="h-px bg-slate-700/50 w-full" />

              {/* Pricing Box */}
              <div className="space-y-3 bg-white/5 border border-white/10 p-5 rounded-2xl relative">
                <span className="absolute -top-2.5 right-3 bg-brand-amber text-brand-blue text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                  Condições de Pagamento
                </span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Valor sugerido do plano:
                </span>
                
                {paymentPref === 'recorrente' && (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1.5 justify-start">
                      <span className="text-3xl font-display font-black text-brand-cyan">12x de R$ 110,00</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-medium">
                      No Cartão de Crédito (Sem consumir o limite total)
                    </p>
                  </div>
                )}

                {paymentPref === 'boleto' && (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1.5 justify-start">
                      <span className="text-3xl font-display font-black text-brand-cyan">8x de R$ 175,00</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-medium">
                      No Boleto Bancário (Sem burocracia ou consulta)
                    </p>
                  </div>
                )}

                {paymentPref === 'pix' && (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1.5 justify-start">
                      <span className="text-3xl font-display font-black text-brand-cyan">R$ 1.099,00</span>
                      <span className="text-[10px] text-slate-400 font-semibold"> à Vista</span>
                    </div>
                    <p className="text-[10px] text-slate-300 font-medium">
                      No Pix (Com liberação imediata)
                    </p>
                  </div>
                )}

                <div className="h-px bg-slate-700/30 my-2" />
                
                <div className="space-y-1 text-[11px] text-slate-300">
                  <div className={`flex justify-between px-2 py-1 rounded transition-colors ${paymentPref === 'recorrente' ? 'bg-white/10 text-brand-cyan font-bold' : ''}`}>
                    <span>💳 Cartão:</span>
                    <span>12x de R$ 110,00</span>
                  </div>
                  <div className={`flex justify-between px-2 py-1 rounded transition-colors ${paymentPref === 'boleto' ? 'bg-white/10 text-brand-cyan font-bold' : ''}`}>
                    <span>📄 Boleto:</span>
                    <span>8x de R$ 175,00</span>
                  </div>
                  <div className={`flex justify-between px-2 py-1 rounded transition-colors ${paymentPref === 'pix' ? 'bg-white/10 text-brand-cyan font-bold' : ''}`}>
                    <span>⚡ À Vista (Pix):</span>
                    <span>R$ 1.099,00</span>
                  </div>
                </div>
              </div>

              {/* Direct to WhatsApp CTA */}
              <button
                onClick={handleWhatsAppSend}
                type="button"
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-sans font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-whatsapp/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider"
                id="simulator-whatsapp-submit"
              >
                <MessageSquare className="h-5 w-5 fill-white" />
                <span>Garantir Vaga no WhatsApp</span>
              </button>

              <p className="text-[10px] text-center lg:text-left text-slate-300 leading-relaxed">
                ⚠️ <strong>Atenção:</strong> Solicite suas condições especiais e preencha sua ficha oficial de matrícula conversando diretamente com a nossa secretaria no WhatsApp!
              </p>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-6 border-t border-slate-800 text-[10px] text-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-brand-cyan" />
                <span>LGPD: Dados Seguros</span>
              </div>
              <div className="flex items-center gap-1">
                <Landmark className="h-3 w-3 text-brand-cyan" />
                <span>ISL Credenciado MEC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
