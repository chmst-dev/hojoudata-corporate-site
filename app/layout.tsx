import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hojoudata.jp'),
  title: 'hojoudata合同会社',
  description: '農業現場の困りごとを、試せるかたちに。圃場・水路・作業・人手・経営を見える化し、持続可能な地域農業の仕組みを現場で育てていきます。',
  alternates: {
    canonical: 'https://www.hojoudata.jp',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.hojoudata.jp',
    siteName: 'hojoudata合同会社',
    title: 'hojoudata合同会社',
    description: '農業現場の困りごとを、試せるかたちに。圃場・水路・作業・人手・経営を見える化し、持続可能な地域農業の仕組みを現場で育てていきます。',
    locale: 'ja_JP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0BF3GKLFSW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0BF3GKLFSW');
          `}
        </Script>
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
