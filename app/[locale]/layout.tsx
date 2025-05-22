import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from '@/components/ui/sonner';
import '../../src/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt-BR' },
    { locale: 'hi' },
    { locale: 'ru' },
    { locale: 'ko' },
    { locale: 'vi' },
    { locale: 'en-CA' },
    { locale: 'de' },
    { locale: 'es-MX' }
  ];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
