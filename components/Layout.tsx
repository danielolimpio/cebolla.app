import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Moon, Sun, Shield, Facebook, Twitter, Instagram, Linkedin, ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../constants';

const NavLinks = () => (
  <>
    <Link to="/" className="hover:text-primary transition-colors font-black uppercase tracking-widest text-[11px]">Home</Link>
    {CATEGORIES.map(cat => (
      <Link 
        key={cat} 
        to={`/categoria/${cat.toLowerCase().replace(/ /g, '-')}`} 
        className="hover:text-primary transition-colors whitespace-nowrap font-black uppercase tracking-widest text-[11px]"
      >
        {cat}
      </Link>
    ))}
  </>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
        setIsDark(true);
    } else {
        setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Shield size={24} />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase italic text-zinc-950 dark:text-white">Cebolla</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
               <NavLinks />
            </nav>
            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 dark:text-zinc-400">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-7 py-3 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
              Membro
            </button>
          </div>

          <button className="lg:hidden p-2 text-zinc-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 absolute top-full left-0 w-full animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-8 gap-6">
             <NavLinks />
             <hr className="border-zinc-200 dark:border-zinc-900" />
             <button onClick={toggleTheme} className="flex items-center gap-3 text-zinc-500 font-black uppercase text-xs tracking-widest">
               {isDark ? <><Sun size={18} /> Modo Claro</> : <><Moon size={18} /> Modo Escuro</>}
             </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10 transition-colors">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
           <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-2.5 rounded-xl text-white shadow-lg shadow-primary/20">
              <Shield size={22} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-zinc-950 dark:text-white">Cebolla</span>
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
            Segurança cibernética levada a sério. Proteja sua pegada digital com quem entende de privacidade absoluta.
          </p>
          <div className="flex gap-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Icon key={i} size={20} className="text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-xs mb-8 uppercase tracking-[0.3em] text-primary">Navegação</h4>
          <ul className="space-y-4 font-black text-[11px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            {CATEGORIES.map(cat => (
              <li key={cat}><Link to={`/categoria/${cat.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors">{cat}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-xs mb-8 uppercase tracking-[0.3em] text-primary">Institucional</h4>
          <ul className="space-y-4 font-black text-[11px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
            <li><Link to="/termos" className="hover:text-primary transition-colors">Termos</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-xs mb-8 uppercase tracking-[0.3em] text-primary">Radar</h4>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm font-medium">Inscreva-se para alertas de Zero-Day e exploits críticos.</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="seu@e-mail.com" 
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
            />
            <button className="w-full bg-primary text-white py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20">Inscrever</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-zinc-200 dark:border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
        <p>© 2025 Cebolla.app — Todos os direitos reservados.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span className="cursor-pointer hover:text-primary transition-colors">Sitemap</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Cookies</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Breadcrumbs: React.FC<{ items: { label: string; path: string }[] }> = ({ items }) => (
  <nav aria-label="breadcrumb" className="container mx-auto px-6 py-8">
    <ol className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <li>
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      </li>
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <ChevronRight size={14} className="flex-shrink-0 text-zinc-600" />
          <li className={index === items.length - 1 ? "text-primary italic" : "hover:text-primary transition-colors"}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        </React.Fragment>
      ))}
    </ol>
  </nav>
);