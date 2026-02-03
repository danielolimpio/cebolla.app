
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Calendar, User, Clock } from 'lucide-react';

export const PostCardHero: React.FC<{ post: Post }> = ({ post }) => (
  <article className="relative group overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-auto h-full">
    <img 
      src={post.image} 
      alt={post.title} 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 lg:p-10">
      <span className="bg-primary text-white text-xs font-black px-3 py-1 rounded-md uppercase mb-4 w-fit tracking-widest">
        {post.category}
      </span>
      <Link to={`/article/${post.slug}`}>
        <h2 className="text-white text-2xl lg:text-5xl font-black leading-tight mb-4 hover:text-primary transition-colors">
          {post.title}
        </h2>
      </Link>
      <div className="flex items-center gap-4 text-white/70 text-xs font-bold uppercase tracking-wider">
        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
      </div>
    </div>
  </article>
);

export const PostCardGrid: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex flex-col group h-full">
    <div className="overflow-hidden rounded-xl aspect-[16/10] mb-4">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">
        {post.category}
      </span>
      <Link to={`/article/${post.slug}`}>
        <h3 className="text-xl font-extrabold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2 flex-grow">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
      </div>
    </div>
  </article>
);

export const PostCardList: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex gap-4 group">
    <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-lg overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{post.category}</span>
      <Link to={`/article/${post.slug}`}>
        <h4 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h4>
      </Link>
      <div className="flex items-center gap-3 text-zinc-400 text-[9px] font-bold uppercase mt-2">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </article>
);
