
import React from 'react';
import { MOCK_POSTS, CATEGORIES } from '../constants';
import { PostCardHero, PostCardGrid, PostCardList } from '../components/PostCards';
import { SEOHead, JsonLd } from '../utils/seo';
import { ArrowRight, Zap, TrendingUp, Mail, ShieldCheck } from 'lucide-react';

const Sidebar = () => (
  <aside className="space-y-16">
    <div className="bg-zinc-950 text-white p-10 rounded-[2.5rem] relative overflow-hidden border border-zinc-800 shadow-2xl">
        <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase italic leading-none">Stay <br /><span className="text-primary">Anonym</span></h3>
            <p className="text-zinc-400 text-sm mb-8 font-medium leading-relaxed">As melhores ferramentas de privacidade em seu e-mail.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                    placeholder="E-mail criptografado" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all text-sm" 
                />
                <button className="w-full bg-primary py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20">Acessar</button>
            </form>
        </div>
        <div className="absolute -bottom-10 -right-10 text-zinc-900/40 transform rotate-12">
            <Mail size={200} />
        </div>
    </div>

    <div>
      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-3 text-zinc-400">
        <TrendingUp size={16} className="text-primary" /> Tendências
      </h3>
      <div className="space-y-10">
        {MOCK_POSTS.slice(0, 4).map(post => (
          <PostCardList key={post.id} post={post} />
        ))}
      </div>
    </div>

    <div className="sticky top-28">
      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-zinc-400">Tags Populares</h3>
      <div className="flex flex-wrap gap-2.5">
        {CATEGORIES.map(cat => (
          <button key={cat} className="bg-zinc-100 dark:bg-zinc-900 hover:bg-primary hover:text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-zinc-200 dark:border-zinc-800">
            {cat}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

const Home: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cebolla",
    "url": "https://cebolla.app",
    "description": "Notícias e tutoriais avançados sobre segurança digital e privacidade financeira."
  };

  return (
    <div className="container mx-auto px-6 py-10 lg:py-16">
      <SEOHead 
        title="Home - Guia de Segurança e Privacidade Digital" 
        description="Aprenda sobre navegação anônima, criptografia e proteção de dados com o portal Cebolla."
      />
      <JsonLd data={websiteSchema} />

      {/* Título Principal Invisível mas presente para SEO */}
      <h1 className="sr-only">Cebolla - Segurança Online, Privacidade e Direitos Digitais</h1>

      {/* Trending Bar */}
      <div className="flex items-center bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-3 mb-12 overflow-hidden">
        <div className="bg-primary text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap mr-5 shadow-lg shadow-primary/20">
            <Zap size={14} fill="currentColor" /> Urgente
        </div>
        <div className="text-xs font-bold truncate tracking-tight text-zinc-600 dark:text-zinc-300">
            {MOCK_POSTS[0].title} — <span className="font-medium opacity-70">Novos protocolos de segurança são recomendados pela NIST para 2025.</span>
        </div>
      </div>

      {/* Hero Grid Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[650px]">
          <div className="lg:col-span-8">
            <PostCardHero post={MOCK_POSTS[0]} priority={true} />
          </div>
          <div className="lg:col-span-4 grid grid-rows-2 gap-8">
            <PostCardHero post={MOCK_POSTS[1]} />
            {/* Fix: removed redundant 'post=' and fixed syntax error on line 87 */}
            <PostCardHero post={MOCK_POSTS[2]} />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-24">
          
          <section>
            <div className="flex items-end justify-between mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-6">
                <h2 className="text-3xl lg:text-4xl font-black uppercase italic tracking-tighter flex items-center gap-4 dark:text-zinc-100 leading-none">
                    <ShieldCheck className="text-primary" size={38} /> Radar <span className="text-primary">Geral</span>
                </h2>
                <button className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    Explorar Todos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {MOCK_POSTS.map(post => (
                    <PostCardGrid key={post.id} post={post} />
                ))}
            </div>
          </section>

          {/* Banner de Engajamento Otimizado */}
          <section className="bg-primary text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group shadow-2xl shadow-primary/30">
            <div className="relative z-10 max-w-2xl">
                <span className="text-[11px] font-black uppercase tracking-[0.5em] mb-6 block opacity-80 italic">Conteúdo Premium</span>
                <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-[1] tracking-tighter italic uppercase">Masterclass: Autodefesa Digital Completa.</h2>
                <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed max-w-lg">Um treinamento de 4 horas sobre como proteger sua família e ativos digitais de ameaças sofisticadas.</p>
                <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">Inscrever-se Agora</button>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 rotate-12 translate-x-1/4 pointer-events-none group-hover:rotate-6 transition-transform duration-1000 scale-125">
                <ShieldCheck size={500} />
            </div>
          </section>

        </div>

        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
