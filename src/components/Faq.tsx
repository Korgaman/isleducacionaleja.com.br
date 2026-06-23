import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("1"); // Open first FAQ by default

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "O diploma do supletivo da ISL Educacional é realmente reconhecido pelo MEC?",
      answer: "Sim! Absolutamente. Todos os diplomas são emitidos por instituições credenciadas junto aos Conselhos Estaduais de Educação (CEE) de seus respectivos estados e são devidamente publicados no Diário Oficial e registrados no SISTEC/MEC nacional. O certificado tem exatamente o mesmo valor legal e validade nacional de uma escola regular de ensino tradicional."
    },
    {
      id: "2",
      question: "Qual é o tempo mínimo para eu conseguir me formar?",
      answer: "O tempo mínimo depende das séries que você já concluiu anteriormente (aproveitamos suas notas aprovadas no histórico escolar). Geralmente, os alunos concluem o Ensino Médio ou Fundamental em um prazo estimado de 3 a 6 meses. Por ser 100% online, você dita o seu ritmo de estudos!"
    },
    {
      id: "3",
      question: "Como funcionam os pagamentos flexíveis? É necessário ter cartão de crédito?",
      answer: "Criamos as melhores condições do mercado para que você volte a estudar hoje. Oferecemos pagamento por Pix com descontos exclusivos, parcelamento facilitado no boleto bancário (sem consulta ao SPC/Serasa) e o inovador sistema de parcelamento recorrente no cartão de crédito: o valor da mensalidade é debitado mês a mês sem bloquear o limite total do seu cartão!"
    },
    {
      id: "4",
      question: "Como funcionam as aulas e as provas?",
      answer: "As aulas são 100% online, gravadas e disponibilizadas em uma plataforma super leve e moderna que roda direto no seu celular. Você estuda onde e quando quiser. O material é resumido e focado nas provas. As avaliações também são feitas de forma simplificada, em formato de múltipla escolha. Se não atingir a média em alguma matéria, você pode refazer sem custos."
    },
    {
      id: "5",
      question: "Quais são os documentos necessários para fazer a matrícula?",
      answer: "Para iniciar seus estudos, você precisa apenas de: RG, CPF, comprovante de residência e seu histórico escolar anterior (caso não tenha o histórico, nós te orientamos a solicitar ou fazemos o teste de nivelamento simples para que você comece do zero com segurança)."
    },
    {
      id: "6",
      question: "Existe limite de idade para se matricular no EJA?",
      answer: "Conforme a legislação federal do MEC: para o Ensino Fundamental é necessário ter no mínimo 15 anos completos; para o Ensino Médio é necessário ter no mínimo 18 anos completos na data de realização das avaliações finais. Não existe limite máximo de idade (temos orgulho de já ter formado alunos com mais de 70 anos!)."
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Perguntas mais comuns sobre o EJA
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Tire suas principais dúvidas sobre o processo de ensino, matrícula, prazos do MEC e condições de pagamento abaixo.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-brand-cyan/40 bg-brand-cyan/[0.01] shadow-md shadow-brand-cyan/5'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
                id={`faq-item-${faq.id}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-brand-blue leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated collapse */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100/60" id={`faq-ans-${faq.id}`}>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mx-auto">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-base text-brand-blue">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="font-sans text-xs text-slate-500 max-w-lg mx-auto">
              Nossa equipe de consultores pedagógicos está pronta para analisar o seu caso de forma personalizada pelo WhatsApp agora mesmo.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/5533999323205?text=Olá!%20Fiquei%20com%20uma%20dúvida%20sobre%20o%20EJA%20da%20ISL%20Educacional."
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-sm transition-colors"
              id="faq-bottom-whatsapp-cta"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
