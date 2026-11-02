import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: 'Academic Level Portals',
   description:
      'Open the dedicated 100L, 200L, 300L, 400L, and 500L Systems Engineering student workspaces at FUOYE.',
   pathname: '/academics',
});

export default function AcademicsLayout({ children }) {
   return children;
}
