
import React from 'react';
import { MOCK_POSTS, CATEGORIES } from '../constants';
import { PostCardHero, PostCardGrid, PostCardList } from '../components/PostCards';
import { SEOHead, JsonLd } from '../utils/seo';
import { ArrowRight, Zap, TrendingUp, Mail } from 'lucide-react';

const Sidebar = () => (
  <aside className="space-y-12">
    <div className="bg-zinc-950 text-white p-8 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase italic">Assine a News</h3>
            <p className="text-zinc-400 text-sm mb-6">Receba as ferramentas de privacidade mais quentes da semana.</p>
            <input 
                placeholder="E-mail" 
                className="w-full bg-zinc-800 border-none rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-primary outline-none" 
            />
            <button className="w-full bg-primary py-3 rounded-lg font-black uppercase tracking-widest text-xs hover:opacity-90 transition-opacity">Participar</button>
        </div>
        <div className="absolute -bottom-8 -right-8 text-zinc-900 transform rotate-12 opacity-50">
            <Mail size={160} />
        </div>
    </div>

    <div>
      <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
        <TrendingUp size={16} className="text-primary" /> Tendências
      </h4>
      <div className="space-y-6">
        {MOCK_POSTS.slice(0, 4).map(post => (
          <PostCardList key={post.id} post={post} />
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6">Categorias Populares</h4>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button key={cat} className="bg-zinc-100 dark:bg-zinc-800 hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all">
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
    "description": "O guia definitivo para segurança online e privacidade digital."
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <SEOHead 
        title="Home - Guia de Segurança Online" 
        description="Notícias e tutoriais avançados sobre navegação anônima, criptografia e privacidade financeira."
      />
      <JsonLd data={websiteSchema} />

      {/* Trending Bar */}
      <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 rounded-lg p-2 mb-8 overflow-hidden">
        <div className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-md flex items-center gap-1 whitespace-nowrap mr-4">
            <Zap size={12} fill="currentColor" /> Urgente
        </div>
        <div className="text-xs font-bold truncate">
            {MOCK_POSTS[0].title} — <span className="text-zinc-500 font-medium">Saiba como se proteger contra o novo exploit de Zero Day.</span>
        </div>
      </div>

      {/* Hero Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:h-[600px]">
        <div className="lg:col-span-8">
          <PostCardHero post={MOCK_POSTS[0]} />
        </div>
        <div className="lg:col-span-4 grid grid-rows-2 gap-6">
          <PostCardHero post={MOCK_POSTS[1]} />
          <PostCardHero post={MOCK_POSTS[2]} />
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-8 border-b-2 border-zinc-100 dark:border-zinc-800 pb-4">
          <div>
             <h2 className="text-4xl font-black italic uppercase tracking-tighter text-zinc-900 dark:text-white flex items-center gap-4">
                Escolha do <span className="text-primary underline decoration-4 underline-offset-8">Editor</span>
             </h2>
          </div>
          <button className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors flex items-center gap-1">
            Ver Todos <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_POSTS.slice(0, 4).map(post => (
             <PostCardGrid key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          
          <section>
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Geral</h2>
                <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_POSTS.map(post => (
                    <div key={post.id} className="pb-8 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                        <PostCardGrid post={post} />
                    </div>
                ))}
            </div>
          </section>

          {/* Featured Video Section Mockup */}
          <section className="bg-zinc-900 text-white rounded-3xl p-10 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4 block">Tutorial em Vídeo</span>
                    <h2 className="text-4xl font-black mb-6 leading-tight">Configurando seu Firewall Cebolla de Hardware</h2>
                    <p className="text-zinc-400 mb-8 font-medium">Um guia passo a passo para criar sua própria rede perimetral segura com hardware de baixo custo e código aberto.</p>
                    <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Assistir Agora</button>
                </div>
                <div className="md:w-1/2 aspect-video bg-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <img src="https://picsum.photos/seed/video/800/450" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white relative z-10 animate-pulse">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Home;
