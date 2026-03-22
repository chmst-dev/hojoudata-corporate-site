import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hojoudata合同会社',
  description: '農業インフラの状態変化を地点単位で蓄積し、予防保全を支える現場エビデンス基盤',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
