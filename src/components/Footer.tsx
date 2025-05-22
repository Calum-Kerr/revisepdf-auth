'use client';

import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="mt-auto border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 RevisePDF. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Developed by Calum from Scotland
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
