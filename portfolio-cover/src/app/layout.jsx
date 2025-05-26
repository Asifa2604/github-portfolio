import { Inter } from 'next/font/google';
import '@fontsource/inter';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Asifa Banu - Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
