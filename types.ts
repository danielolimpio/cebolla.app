
export enum CategoryType {
  ANONYMOUS_BROWSING = 'Navegação Anônima',
  SECURE_COMMUNICATION = 'Comunicação Segura',
  PASSWORDS_AUTH = 'Senhas e Autenticação',
  FINANCIAL_PRIVACY = 'Privacidade Financeira',
  DIGITAL_RIGHTS = 'Direitos Digitais',
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: CategoryType;
  tags: string[];
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}
