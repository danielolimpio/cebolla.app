
import { Post, CategoryType } from './types';

export const DOMAIN = 'https://cebolla.app';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Como Navegar Anonimamente: O Guia Completo para 2025',
    slug: 'guia-navegacao-anonima-2025',
    excerpt: 'Descubra as ferramentas essenciais para manter sua identidade protegida enquanto navega na rede mundial de computadores.',
    content: 'A navegação anônima não é apenas sobre usar VPNs. Envolve o entendimento de cookies, fingerprinting de navegador e redes como Tor...',
    author: 'Cebolla Team',
    date: '12 Abr, 2024',
    readTime: '10 Min Read',
    image: 'https://picsum.photos/seed/cyber1/800/600',
    category: CategoryType.ANONYMOUS_BROWSING,
    tags: ['Tor', 'VPN', 'Privacidade'],
  },
  {
    id: '2',
    title: 'Os Melhores Gerenciadores de Senha de Código Aberto',
    slug: 'melhores-gerenciadores-senha-open-source',
    excerpt: 'Por que você deve confiar em ferramentas transparentes para guardar suas chaves digitais mais importantes.',
    content: 'O Bitwarden e o KeePassXC continuam liderando o mercado como as opções mais seguras para usuários avançados e corporativos...',
    author: 'Elena Nakamoto',
    date: '10 Abr, 2024',
    readTime: '8 Min Read',
    image: 'https://picsum.photos/seed/cyber2/800/600',
    category: CategoryType.PASSWORDS_AUTH,
    tags: ['Senhas', 'Criptografia', 'Segurança'],
  },
  {
    id: '3',
    title: 'Criptografia de Ponta-a-Ponta: Além do WhatsApp',
    slug: 'criptografia-ponta-a-ponta-alem-whatsapp',
    excerpt: 'Conheça protocolos de comunicação que realmente respeitam seu direito ao sigilo e à privacidade absoluta.',
    content: 'Enquanto muitos apps prometem segurança, o protocolo Signal continua sendo o padrão ouro da indústria...',
    author: 'Julian Cipher',
    date: '08 Abr, 2024',
    readTime: '12 Min Read',
    image: 'https://picsum.photos/seed/cyber3/800/600',
    category: CategoryType.SECURE_COMMUNICATION,
    tags: ['Signal', 'Privacidade', 'Mensagens'],
  },
  {
    id: '4',
    title: 'Privacidade Financeira com Monero: O que você precisa saber',
    slug: 'privacidade-financeira-monero-guia',
    excerpt: 'Diferente do Bitcoin, o Monero oferece anonimato por padrão em todas as transações da rede.',
    content: 'Em um mundo de vigilância constante, as moedas de privacidade como Monero (XMR) tornam-se essenciais para a soberania individual...',
    author: 'Satoshi Mendez',
    date: '05 Abr, 2024',
    readTime: '15 Min Read',
    image: 'https://picsum.photos/seed/cyber4/800/600',
    category: CategoryType.FINANCIAL_PRIVACY,
    tags: ['Crypto', 'XMR', 'Finanças'],
  },
  {
    id: '5',
    title: 'Direitos Digitais e a Lei Geral de Proteção de Dados (LGPD)',
    slug: 'direitos-digitais-lgpd-brasil',
    excerpt: 'Entenda como a lei brasileira protege (ou tenta proteger) seus dados pessoais na internet.',
    content: 'A LGPD trouxe avanços significativos, mas ainda há um longo caminho para a conscientização plena dos usuários...',
    author: 'Lawyer X',
    date: '01 Abr, 2024',
    readTime: '20 Min Read',
    image: 'https://picsum.photos/seed/cyber5/800/600',
    category: CategoryType.DIGITAL_RIGHTS,
    tags: ['Lei', 'Privacidade', 'Brasil'],
  }
];

export const CATEGORIES = Object.values(CategoryType);
