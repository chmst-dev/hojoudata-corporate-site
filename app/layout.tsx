import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'hojoudata合同会社',
  description: '農業現場の困りごとを、試せるかたちに。圃場・水路・作業・人手・経営を見える化し、持続可能な地域農業の仕組みを現場で育てていきます。',
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
      <body>{children}</body>
    </html>
  );
}
