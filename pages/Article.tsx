
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MOCK_POSTS, DOMAIN } from '../constants';
import { SEOHead, JsonLd } from '../utils/seo';
import { Breadcrumbs } from '../components/Layout';
// Added Linkedin to the imports from lucide-react
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, AlertTriangle } from 'lucide-react';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/" />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": [{
      "@type": "Person",
      "name": post.author
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
    { label: post.category, path: `/category/${post.category.toLowerCase().replace(/ /g, '-')}` },
    { label: post.title, path: `/article/${post.slug}` }
  ];

  return (
    <article className="pb-20">
      <SEOHead 
        title={post.title} 
        description={post.excerpt}
        ogType="article"
        ogImage={post.image}
        canonical={`${DOMAIN}/article/${post.slug}`}
      />
      <JsonLd data={articleSchema} />
      
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto mb-12">
          <span className="inline-block bg-primary text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-[0.2em] mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-zinc-900 dark:text-white">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs font-bold uppercase tracking-wider pb-8 border-b border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-primary">
                    <User size={16} />
                </div>
                <span>Por <span className="text-zinc-900 dark:text-white">{post.author}</span></span>
            </div>
            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            
            <div className="flex items-center gap-3 ml-auto">
                <span className="text-zinc-400">Partilhar:</span>
                <button className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full hover:text-primary transition-colors"><Facebook size={14} /></button>
                <button className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full hover:text-primary transition-colors"><Twitter size={14} /></button>
                <button className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-full hover:text-primary transition-colors"><LinkIcon size={14} /></button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <figure className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover" 
                loading="eager"
                decoding="async"
            />
            <figcaption className="p-4 bg-zinc-100 dark:bg-zinc-900 text-[10px] text-zinc-500 font-bold uppercase tracking-widest text-center">
                Imagem ilustrativa — Créditos: Pixabay / Unsplash
            </figcaption>
          </figure>

          <div className="prose prose-zinc dark:prose-invert max-w-none text-lg lg:text-xl leading-relaxed font-serif space-y-8">
            <p className="font-bold text-2xl leading-snug text-zinc-800 dark:text-zinc-200">
              {post.excerpt}
            </p>
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-10">
                <div className="flex gap-4">
                    <AlertTriangle className="text-primary flex-shrink-0" size={24} />
                    <p className="m-0 italic font-sans text-zinc-700 dark:text-zinc-300">
                        <strong>Nota de Segurança:</strong> As informações contidas neste artigo são para fins educacionais. Sempre verifique as atualizações de software antes de implementar novos protocolos.
                    </p>
                </div>
            </div>

            <p>{post.content}</p>
            
            <h2 className="text-3xl font-black italic tracking-tighter uppercase font-sans mt-12 mb-6">Principais Protocolos Analisados</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            
            <ul className="list-disc pl-6 space-y-4">
                <li><strong>Protocolo Onion:</strong> Camadas de criptografia distribuídas.</li>
                <li><strong>Criptografia de Curva Elíptica:</strong> Maior segurança com chaves menores.</li>
                <li><strong>Segurança de Camada de Transporte (TLS):</strong> O padrão para web segura.</li>
            </ul>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl font-sans mt-16">
                <h3 className="text-xl font-black mb-4 uppercase">Sobre o Autor</h3>
                <div className="flex gap-6 items-start">
                     <div className="w-16 h-16 rounded-full bg-primary flex-shrink-0" />
                     <div>
                        <p className="font-bold mb-2">{post.author}</p>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-4">Especialista em segurança cibernética com mais de 10 anos de experiência em defesa de redes e privacidade digital. Editor-chefe da Cebolla.app.</p>
                        <div className="flex gap-4">
                            <Twitter size={16} className="text-zinc-400 cursor-pointer hover:text-primary" />
                            <Linkedin size={16} className="text-zinc-400 cursor-pointer hover:text-primary" />
                        </div>
                     </div>
                </div>
            </div>
          </div>

          <div className="mt-20 border-t border-zinc-100 dark:border-zinc-800 pt-12">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8">Tags Relacionadas</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg text-xs font-bold text-zinc-600 dark:text-zinc-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Article;
