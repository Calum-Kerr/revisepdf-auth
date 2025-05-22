import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
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

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}/index.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
