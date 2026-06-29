import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eude Ramos Silva · Assistente Social · Salvador, BA',
  description:
    'Assistente Social especialista em Serviço Social na Saúde. Experiência em contexto hospitalar (HGE) e sociojurídico (PLB). Orientação sobre direitos, benefícios e encaminhamentos sociais em Salvador, BA.',
  keywords: [
    'assistente social',
    'serviço social',
    'saúde hospitalar',
    'sociojurídico',
    'Salvador BA',
    'CRESS',
    'benefícios sociais',
    'pareceres sociais',
  ],
  openGraph: {
    title: 'Eude Ramos Silva · Assistente Social',
    description:
      'Especialista em Serviço Social na Saúde. Experiência no HGE e PLB, Salvador – BA.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
