import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: 'Academic Materials & Study Guides',
   description:
      'Browse curated study resources, practical learning prompts, and level guides for 100L through 500L at FUOYE Systems Engineering.',
   pathname: '/academics',
});

export default function AcademicsLayout({ children }) {
   return children;
}
