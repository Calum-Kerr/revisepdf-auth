import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PDFCompressor from '@/components/tools/PDFCompressor';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
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
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
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
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">PDF Compression</h3>
                    <p className="text-sm text-muted-foreground">Reduce file size while maintaining quality</p>
                  </div>
                  <div className="p-6 pt-0">
                    <PDFCompressor />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <div className="rounded-lg border bg-muted/50 text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">More Tools Coming Soon</h3>
                    <p className="text-sm text-muted-foreground">We're working on adding more PDF tools to help you manage your documents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About RevisePDF
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to provide simple and effective PDF tools for everyone
                </p>
              </div>
              <div className="mx-auto max-w-[700px] mt-6">
                <p className="text-muted-foreground">
                  RevisePDF is a web application that provides tools for working with PDF files.
                  Our goal is to make it easy for anyone to manipulate PDF files without having to
                  install any software or pay for expensive licenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions or feedback? We'd love to hear from you!
                </p>
              </div>
              <div className="mx-auto max-w-[700px] mt-6">
                <p className="text-muted-foreground">
                  Email us at: <a href="mailto:contact@revisepdf.com" className="text-primary hover:underline">contact@revisepdf.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
