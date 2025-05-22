import { getRequestConfig } from 'next-intl/server';

// Define default messages for English
const defaultMessages = {
  app: {
    title: "RevisePDF",
    description: "Edit, compress, and manage your PDF files with ease",
    developer: "Developed by Calum from Scotland"
  },
  navigation: {
    home: "Home",
    tools: "Tools",
    about: "About",
    contact: "Contact"
  },
  hero: {
    title: "Transform Your PDF Files",
    subtitle: "Simple, fast, and secure PDF tools for everyone",
    cta: "Get Started"
  },
  tools: {
    compression: {
      title: "PDF Compression",
      description: "Reduce file size while maintaining quality",
      upload: "Upload PDF",
      dragDrop: "Drag and drop your PDF here",
      or: "or",
      browse: "Browse files",
      compressing: "Compressing...",
      success: "Compression complete!",
      download: "Download Compressed PDF",
      error: "Error compressing file. Please try again."
    },
    comingSoon: {
      title: "More Tools Coming Soon",
      description: "We're working on adding more PDF tools to help you manage your documents."
    }
  },
  footer: {
    copyright: "© 2025 RevisePDF. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  }
};

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: defaultMessages,
    timeZone: 'Europe/London',
    now: new Date(),
    locale
  };
});
