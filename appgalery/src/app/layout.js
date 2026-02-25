import '../globals.css';
import { Providers } from '../lib/providers';
import Header from '../components/organism/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers> {/* el cerebro del Modo claro/oscuro */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}