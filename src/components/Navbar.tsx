import React, { useState } from 'react';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Por que o EJA Ágil?', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Validade MEC', href: '#validade-mec' },
    { name: 'Onde Estamos', href: '#localizacao' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const whatsappNumber = "5533999323205"; // Customizable
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20EJA%20da%20ISL%20Educacional%20para%20concluir%20meus%20estudos.`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue text-brand-amber p-2 rounded-xl flex items-center justify-center shadow-md shadow-brand-blue/15 animate-pulse">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-brand-blue flex items-center gap-1">
                ISL <span className="text-brand-cyan">EDUCACIONAL</span>
              </span>
              <span className="block text-[10px] font-semibold text-brand-amber tracking-widest uppercase">
                EJA ÁGIL • Estudos no seu ritmo
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href.substring(1))}
                  className="font-sans text-sm font-medium text-slate-600 hover:text-brand-cyan transition-colors"
                  id={`nav-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-slate-100 pl-6">
              <a
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center text-slate-700 hover:text-brand-cyan transition-all hover:scale-105 active:scale-95"
                id="navbar-phone-btn"
                title="Fale Conosco no WhatsApp"
              >
                <div className="bg-slate-50 p-2 rounded-full border border-slate-100 text-slate-600 hover:text-brand-cyan hover:bg-slate-100/80 transition-colors shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
              </a>

              <a
                href="#simulador"
                onClick={(e) => handleScroll(e, 'simulador')}
                className="bg-brand-amber hover:bg-brand-amber/90 text-brand-blue font-sans font-bold text-xs px-4 py-2 rounded-lg shadow-md shadow-brand-amber/25 transition-all hover:scale-105 active:scale-95"
                id="navbar-cta-btn"
              >
                Simular Tempo
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-whatsapp text-white p-2 rounded-xl flex items-center justify-center hover:bg-whatsapp/90 transition-colors"
              id="navbar-mobile-whatsapp-btn"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-50 focus:outline-none"
              id="navbar-toggle-menu"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg rounded-b-2xl transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.substring(1))}
              className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-cyan transition-colors"
              id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl transition-colors"
              id="navbar-mobile-call"
            >
              <Phone className="h-4 w-4 text-brand-cyan" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="#simulador"
              onClick={(e) => handleScroll(e, 'simulador')}
              className="flex items-center justify-center bg-brand-amber hover:bg-brand-amber/90 text-brand-blue font-bold py-3 rounded-xl shadow-md shadow-brand-amber/20"
              id="navbar-mobile-cta"
            >
              Concluir Estudos Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
