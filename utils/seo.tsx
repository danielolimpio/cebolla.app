
import React, { useEffect } from 'react';
import { SeoMetadata } from '../types';
import { DOMAIN } from '../constants';

export const SEOHead: React.FC<SeoMetadata> = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://picsum.photos/seed/cebolla/1200/630' 
}) => {
  useEffect(() => {
    document.title = `${title} | Cebolla`;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || DOMAIN);

    // Open Graph
    const setOgTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };

    setOgTag('og:title', title);
    setOgTag('og:description', description);
    setOgTag('og:type', ogType);
    setOgTag('og:url', window.location.href);
    setOgTag('og:image', ogImage);
    setOgTag('og:site_name', 'Cebolla');
    
  }, [title, description, canonical, ogType, ogImage]);

  return null;
};

export const JsonLd: React.FC<{ data: any }> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
