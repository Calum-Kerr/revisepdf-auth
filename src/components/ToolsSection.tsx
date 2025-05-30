'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PDFCompressor from '@/components/tools/PDFCompressor';

export default function ToolsSection() {

  return (
    <section id="tools" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              PDF Tools
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Simple, fast, and secure tools to manage your PDF files
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mt-8">
            <Tabs defaultValue="compression" className="w-full">
              <TabsList className="grid w-full grid-cols-1 mb-8">
                <TabsTrigger value="compression">PDF Compression</TabsTrigger>
              </TabsList>

              <TabsContent value="compression" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>PDF Compression</CardTitle>
                    <CardDescription>Reduce file size while maintaining quality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PDFCompressor />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>More Tools Coming Soon</CardTitle>
                <CardDescription>We're working on adding more PDF tools to help you manage your documents.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
