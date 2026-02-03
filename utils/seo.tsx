import React, { useEffect } from 'react';
import { SeoMetadata } from '../types';
import { DOMAIN } from '../constants';

export const SEOHead: React.FC<SeoMetadata> = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://cebolla.app/og-default.jpg' 
}) => {
  useEffect(() => {
    const fullTitle = `${title} | Cebolla`;
    document.title = fullTitle;
    
    const setMeta = (attr: string, value: string, content: string, isProperty = false) => {
      let el = document.querySelector(isProperty ? `meta[property="${value}"]` : `meta[name="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(isProperty ? 'property' : 'name', value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle, true);
    setMeta('property', 'og:description', description, true);
    setMeta('property', 'og:type', ogType, true);
    setMeta('property', 'og:image', ogImage, true);
    setMeta('property', 'og:url', window.location.href, true);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || window.location.href);
  }, [title, description, canonical, ogType, ogImage]);

  return null;
};

export const JsonLd: React.FC<{ data: any }> = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);