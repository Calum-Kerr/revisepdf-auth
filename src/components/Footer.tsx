'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer className="mt-auto border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('footer.copyright')}
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          {t('app.developer')}
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            {t('footer.privacy')}
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
