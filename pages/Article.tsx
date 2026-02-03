
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MOCK_POSTS, DOMAIN } from '../constants';
import { SEOHead, JsonLd } from '../utils/seo';
import { Breadcrumbs } from '../components/Layout';
import { Calendar, User, Clock, Facebook, Twitter, Linkedin, Link as LinkIcon, AlertTriangle, ArrowLeft, Bookmark, ShieldCheck } from 'lucide-react';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/" />;
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.image],
    "datePublished": "2025-04-12T08:00:00+08:00",
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://cebolla.app/sobre"
    }],
    "publisher": {
        "@type": "Organization",
        "name": "Cebolla",
        "logo": {
            "@type": "ImageObject",
            "url": "https://cebolla.app/logo.png"
        }
    }
  };

  const breadcrumbItems = [
    { label: post.category, path: `/categoria/${post.category.toLowerCase().replace(/ /g, '-')}` },
    { label: post.title, path: `/artigo/${post.slug}` }
  ];

  return (
    <article className="pb-32">
      <SEOHead 
        title={post.title} 
        description={post.excerpt}
        ogType="article"
        ogImage={post.image}
        canonical={`${DOMAIN}/artigo/${post.slug}`}
      />
      <JsonLd data={blogPostingSchema} />
      
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto mb-16">
          <Link to="/" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary mb-12 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Início
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-lg">
                {post.category}
            </span>
            <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            <span className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Postado em {post.date}</span>
          </div>

          <h1 className="text-4xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-12 dark:text-zinc-50 italic uppercase italic">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <User size={18} />
                </div>
                <div>
                    <span className="block text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-0.5">Autor</span>
                    <span className="block text-sm font-black uppercase text-zinc-900 dark:text-zinc-100">{post.author}</span>
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500">
                    <Clock size={18} />
                </div>
                <div>
                    <span className="block text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-0.5">Leitura</span>
                    <span className="block text-sm font-black uppercase text-zinc-900 dark:text-zinc-100">{post.readTime}</span>
                </div>
            </div>
            
            <div className="flex items-center gap-3 ml-auto">
                <button className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:text-primary transition-colors border border-zinc-100 dark:border-zinc-800"><Facebook size={18} /></button>
                <button className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:text-primary transition-colors border border-zinc-100 dark:border-zinc-800"><Twitter size={18} /></button>
                <button className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:text-primary transition-colors border border-zinc-100 dark:border-zinc-800"><Bookmark size={18} /></button>
                <button className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:text-primary transition-colors border border-zinc-100 dark:border-zinc-800"><LinkIcon size={18} /></button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <figure className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl bg-zinc-900 aspect-video group">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]" 
                loading="eager"
                decoding="async"
            />
          </figure>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="flex gap-8 items-start mb-16">
                <div className="w-2 h-24 bg-primary rounded-full mt-2 hidden lg:block" />
                <p className="text-2xl lg:text-4xl font-black leading-tight text-zinc-900 dark:text-zinc-100 italic uppercase tracking-tight">
                    {post.excerpt}
                </p>
            </div>
            
            <div className="font-serif text-xl lg:text-2xl leading-relaxed space-y-10 text-zinc-700 dark:text-zinc-300">
                <p>O mundo digital está em constante mutação. Hoje, mais do que nunca, entender como suas informações circulam é o primeiro passo para a liberdade digital. A segurança não é um produto, mas um processo contínuo de vigilância e educação.</p>
                
                <h2 className="font-sans text-3xl lg:text-5xl font-black uppercase italic tracking-tighter mt-24 mb-10 text-zinc-950 dark:text-white leading-none">Vigilância em <span className="text-primary">Massa</span> vs Direito à <span className="text-primary">Privacidade</span></h2>
                <p>Nesta era, seus dados são a moeda mais valiosa. Gigantes de tecnologia e agências governamentais utilizam algoritmos sofisticados para mapear cada movimento seu. É essencial utilizar ferramentas que quebrem esse ciclo de rastreamento.</p>
                
                <div className="bg-zinc-950 text-white p-12 lg:p-16 rounded-[3rem] my-20 border border-zinc-800 relative overflow-hidden group shadow-2xl">
                    <div className="relative z-10">
                        <div className="flex gap-6 items-center mb-8">
                            <AlertTriangle className="text-primary" size={42} />
                            <h3 className="m-0 text-2xl lg:text-3xl font-black uppercase font-sans tracking-tight italic">Checklist de Urgência</h3>
                        </div>
                        <ul className="list-none p-0 space-y-6 font-sans">
                            {['Mude para senhas de 24+ caracteres agora.', 'Habilite 2FA via Hardware (YubiKey).', 'Utilize DNS criptografado em todos os dispositivos.'].map((check, idx) => (
                                <li key={idx} className="flex items-center gap-5 text-sm lg:text-base font-bold uppercase tracking-wider border-b border-zinc-800 pb-5 last:border-0">
                                    <div className="w-3 h-3 bg-primary rounded-full" />
                                    {check}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute top-0 right-0 p-10 text-zinc-900/50 group-hover:text-primary/10 transition-colors">
                        <Bookmark size={200} />
                    </div>
                </div>

                <p>{post.content}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    <div className="p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-sans font-black uppercase text-xl mb-6 tracking-tighter italic">Infraestrutura Segura</h4>
                        <p className="text-base font-medium font-sans">A base de qualquer defesa digital começa no hardware. Routers com OpenWrt ou OPNsense são o padrão ouro.</p>
                    </div>
                    <div className="p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-sans font-black uppercase text-xl mb-6 tracking-tighter italic">Criptografia Local</h4>
                        <p className="text-base font-medium font-sans">Nunca confie na nuvem. Utilize Veracrypt ou Cryptomator para garantir que seus arquivos permaneçam seus.</p>
                    </div>
                </div>
            </div>
          </div>

          <footer className="mt-32 pt-20 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 text-zinc-400">Tópicos do Post</h4>
                    <div className="flex flex-wrap gap-3">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-zinc-100 dark:bg-zinc-900 px