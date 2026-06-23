import React from 'react';
import { MapPin, Navigation, Clock, PhoneCall, Mail } from 'lucide-react';

export default function AddressMap() {
  const address = "Rua Bernardo Teixeira, 121 - Centro, Araçuaí - MG";
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`;
  const whatsappUrl = `https://wa.me/5533999323205?text=Olá!%20Gostaria%20de%20visitar%20o%20polo%20da%20ISL%20Educacional%20em%20Ara%C3%A7ua%C3%AD%20-%20MG.%20Quais%20são%20as%20instruções?`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-20 bg-slate-50" id="localizacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full">
            Nossa Unidade Física
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue tracking-tight">
            Nossa Localização
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Venha nos fazer uma visita ou entre em contato com o suporte da ISL Educacional.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left panel: Info & Actions */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Header */}
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-cyan" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-blue">
                    Sede Araçuaí - MG
                  </h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {address}
                  </p>
                  <span className="inline-block text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded uppercase mt-1">
                    Atendimento Presencial e Online
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-brand-blue uppercase">Horário de Atendimento</h5>
                  <p className="text-xs text-slate-600 font-semibold">Segunda a Sexta: <span className="font-medium text-slate-500">8h às 18h</span></p>
                </div>
              </div>

              {/* Direct Phone / Zap */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-brand-blue uppercase">Telefone de Contato</h5>
                  <p className="text-xs text-slate-600 font-semibold">(33) 99932-3205 <span className="text-[10px] text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded font-extrabold ml-1">WhatsApp</span></p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-xs font-bold text-brand-blue uppercase">E-mail de Contato</h5>
                  <p className="text-xs text-slate-600 font-semibold">
                    <a href="mailto:isl_educacional@outlook.com" className="hover:text-brand-cyan transition-colors">
                      isl_educacional@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <a
                href={mapsSearchUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                id="maps-gmaps-link"
              >
                <Navigation className="h-4.5 w-4.5 text-brand-gold fill-brand-gold/10" />
                <span>Abrir no Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={wazeUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-100 font-sans font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-colors"
                  id="maps-waze-link"
                >
                  <span>Waze</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-100 font-sans font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-colors"
                  id="maps-visit-zap-link"
                >
                  <span>Falar Conosco</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Live Map Frame */}
          <div className="lg:col-span-7 h-[320px] sm:h-[400px] lg:h-auto min-h-[350px] bg-slate-100 relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endereço Sede Araçuaí - MG"
              className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[110%] hover:grayscale-0 transition-all duration-300"
              id="address-google-map-iframe"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
