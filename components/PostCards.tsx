import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Calendar, Clock } from 'lucide-react';

export const PostCardHero: React.FC<{ post: Post; priority?: boolean }> = ({ post, priority = false }) => (
  <article className="relative group overflow-hidden rounded-[2.5rem] aspect-[16/9] lg:aspect-auto h-full bg-zinc-900 shadow-2xl">
    <img 
      src={post.image} 
      alt={`Capa do artigo: ${post.title}`} 
      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
      <div className="mb-4">
        <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] shadow-lg">
          {post.category}
        </span>
      </div>
      <Link to={`/artigo/${post.slug}`} className="block">
        <h3 className="text-white text-3xl lg:text-6xl font-black leading-[1] mb-6 hover:text-primary transition-colors tracking-tighter italic uppercase">
          {post.title}
        </h3>
      </Link>
      <div className="flex items-center gap-6 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
        <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
        <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {post.readTime}</span>
      </div>
    </div>
  </article>
);

export const PostCardGrid: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex flex-col group h-full">
    <Link to={`/artigo/${post.slug}`} className="block overflow-hidden rounded-[2rem] aspect-[16/10] mb-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
        decoding="async"
      />
    </Link>
    <div className="flex flex-col flex-grow px-2">
      <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">
        {post.category}
      </span>
      <Link to={`/artigo/${post.slug}`}>
        <h3 className="text-2xl font-black leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 dark:text-zinc-100 tracking-tight">
          {post.title}
        </h3>
      </Link>
      <p className="text-zinc-500 dark:text-zinc-400 text-base mb-6 line-clamp-2 flex-grow leading-relaxed font-medium">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-auto border-t border-zinc-100 dark:border-zinc-900 pt-5">
        <span>{post.date}</span>
        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </article>
);

export const PostCardList: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex gap-5 group items-center">
    <div className="w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <img 
        src={post.image} 
        alt="" 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-primary text-[9px] font-black uppercase tracking-widest mb-1.5">{post.category}</span>
      <Link to={`/artigo/${post.slug}`}>
        <h4 className="font-black text-base lg:text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2 dark:text-zinc-100 tracking-tight">
          {post.title}
        </h4>
      </Link>
      <span className="text-zinc-400 text-[9px] font-bold uppercase mt-2 tracking-widest">{post.date}</span>
    </div>
  </article>
);