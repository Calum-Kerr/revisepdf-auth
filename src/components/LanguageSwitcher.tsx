'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ru', name: 'Русский' },
  { code: 'ko', name: '한국어' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'en-CA', name: 'English (Canada)' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es-MX', name: 'Español (México)' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    
    // Redirect to the same page with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <span>{currentLanguage.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={locale === language.code ? "default" : "outline"}
              className="justify-start"
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
