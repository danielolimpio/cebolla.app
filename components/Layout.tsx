
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Search, Moon, Sun, Shield, Lock, Ghost, CreditCard, 
  FileText, Facebook, Twitter, Instagram, Linkedin, ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../constants';

const NavLinks = () => (
  <>
    <Link to="/" className="hover:text-primary transition-colors font-semibold">Home</Link>
    {CATEGORIES.map(cat => (
      <Link 
        key={cat} 
        to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`} 
        className="hover:text-primary transition-colors whitespace-nowrap"
      >
        {cat}
      </Link>
    ))}
  </>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
        setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Shield size={28} />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase italic text-zinc-900 dark:text-white">Cebolla</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm uppercase tracking-wider font-bold">
               <NavLinks />
            </nav>
            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
              Assinar
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 absolute top-full left-0 w-full animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-6 gap-4 font-bold text-lg">
             <NavLinks />
             <hr className="border-zinc-200 dark:border-zinc-800" />
             <button onClick={toggleTheme} className="flex items-center gap-2 text-zinc-500">
               {isDark ? <><Sun size={20} /> Modo Claro</> : <><Moon size={20} /> Modo Escuro</>}
             </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8 transition-colors">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
           <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Shield size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-zinc-900 dark:text-white">Cebolla</span>
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
            A Cebolla é a sua fonte número um para notícias e tutoriais sobre segurança digital, privacidade e soberania tecnológica.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Linkedin size={20} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Categorias</h4>
          <ul className="space-y-4 font-medium text-zinc-600 dark:text-zinc-400">
            {CATEGORIES.map(cat => (
              <li key={cat}><Link to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors">{cat}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Links Úteis</h4>
          <ul className="space-y-4 font-medium text-zinc-600 dark:text-zinc-400">
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
            <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
            <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">Newsletter</h4>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm">Receba alertas de segurança semanalmente no seu e-mail.</p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors uppercase tracking-widest text-xs">Inscrever-se</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-medium">
        <p>© 2024 Cebolla.app. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-primary">Sitemap</span>
          <span className="cursor-pointer hover:text-primary">Publicidade</span>
          <span className="cursor-pointer hover:text-primary">Cookies</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Breadcrumbs: React.FC<{ items: { label: string; path: string }[] }> = ({ items }) => (
  <nav aria-label="breadcrumb" className="container mx-auto px-4 py-6">
    <ol className="flex items-center gap-2 text-sm font-medium text-zinc-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <li>
        <Link to="/" className="hover:text-primary">Home</Link>
      </li>
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <ChevronRight size={14} className="flex-shrink-0" />
          <li className={index === items.length - 1 ? "text-zinc-900 dark:text-white font-bold" : "hover:text-primary"}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        </React.Fragment>
      ))}
    </ol>
  </nav>
);
