import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: 'Student Events & Opportunities',
   description:
      'Explore sample study circles, student forums, skills sessions, and ways to take part in campus life at FUOYE Systems Engineering.',
   pathname: '/events',
});

export default function EventsLayout({ children }) {
   return children;
}
