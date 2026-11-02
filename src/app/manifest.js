import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/site-config';

export default function manifest() {
   return {
      name: SITE_NAME,
      short_name: 'FUOYE Systems',
      description: SITE_DESCRIPTION,
      start_url: '/',
      display: 'standalone',
      background_color: '#f3f5ee',
      theme_color: '#123d30',
      orientation: 'any',
      icons: [
         {
            src: '/systems-mark.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
         },
      ],
   };
}
