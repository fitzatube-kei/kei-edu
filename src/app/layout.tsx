import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { DevModeProvider } from '@/context/DevModeContext';
import { ContentProvider } from '@/context/ContentContext';
import { CurrencyProvider } from '@/context/CurrencyContext';
import DevPanel from '@/components/dev/DevPanel';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'KEI EDU - Learn Hangul & Korean History',
  description: 'Learn Korean with fun games! Master Hangul and Korean History through interactive quizzes and matching games.',
  keywords: ['Korean', 'Hangul', 'Korean History', 'Learning', 'Education', 'Game', '한글', '한국사', 'KEI EDU'],
  authors: [{ name: 'KEI EDU Team' }],
  icons: {
    icon: '/images/kei_logo001.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-gray-100 ${poppins.className} font-medium`}>
        <LanguageProvider>
          <AuthProvider>
            <CurrencyProvider>
            <ContentProvider>
              <DevModeProvider>
                {children}
                <DevPanel />
              </DevModeProvider>
            </ContentProvider>
            </CurrencyProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
