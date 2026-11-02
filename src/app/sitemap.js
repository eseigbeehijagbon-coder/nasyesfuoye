import { LEVELS } from '@/data/systems-engineering';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap() {
   const lastModified = new Date();
   const routes = [
      { path: '/', changeFrequency: 'weekly', priority: 1 },
      { path: '/academics', changeFrequency: 'weekly', priority: 0.9 },
      ...LEVELS.map((level) => ({
         path: level.href,
         changeFrequency: 'weekly',
         priority: 0.8,
      })),
   ];

   return routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
   }));
}
