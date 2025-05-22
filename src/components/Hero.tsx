'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your PDF Files
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Simple, fast, and secure PDF tools for everyone
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#tools">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
