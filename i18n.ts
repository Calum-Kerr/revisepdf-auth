import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    return {
      messages: (await import(`./messages/${locale}/index.json`)).default
    };
  } catch (error) {
    return {
      messages: {}
    };
  }
});
