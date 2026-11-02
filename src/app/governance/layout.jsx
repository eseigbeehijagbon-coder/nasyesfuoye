import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: 'Student Politics, Representation & Elections',
   description:
      'Neutral guides to student representation, constructive campus priorities, and how to follow a fair departmental election process at FUOYE Systems Engineering.',
   pathname: '/governance',
});

export default function GovernanceLayout({ children }) {
   return children;
}
