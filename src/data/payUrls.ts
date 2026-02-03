const PAY_URLS: Record<string, string | undefined> = {
  'thailand':  import.meta.env.VITE_PAY_URL_THAILAND,
  'sri-lanka': import.meta.env.VITE_PAY_URL_SRI_LANKA,
  'japan':     import.meta.env.VITE_PAY_URL_JAPAN,
  'india-journey':     import.meta.env.VITE_PAY_URL_INDIA,
  'philippines': import.meta.env.VITE_PAY_URL_PHILIPPINES,
  'colombia': '/booking/colombia',
};

export const getPayUrlBySlug = (slug: string) => {
  console.log('getPayUrlBySlug called with slug:', slug);
  console.log('Available PAY_URLS:', PAY_URLS);
  const url = PAY_URLS[slug] ?? '#';
  console.log('Resolved URL:', url);
  if (url === '#') {
    console.warn(`Missing payment URL for slug: ${slug}`);
  }
  return url;
};

// Legacy function for backward compatibility
export const getPayUrl = (id: string) => payUrls[id] || '#';

export const payUrls: Record<string, string> = {
  'japan-journey': import.meta.env.VITE_PAY_URL_JAPAN ?? '#',
  'paris-adventure': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'thailand-discovery': import.meta.env.VITE_PAY_URL_THAILAND ?? '#',
  'srilanka-serenity': import.meta.env.VITE_PAY_URL_SRI_LANKA ?? '#',
  'philippines-paradise': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'india-journey': import.meta.env.VITE_TRIP3_PAY_URL ?? '#',
  'bhutan-happiness': import.meta.env.VITE_TRIP1_PAY_URL ?? '#',
  'colombia-adventure': import.meta.env.VITE_TRIP2_PAY_URL ?? '#',
  'vietnam-explorer': import.meta.env.VITE_TRIP3_PAY_URL ?? '#',
};
