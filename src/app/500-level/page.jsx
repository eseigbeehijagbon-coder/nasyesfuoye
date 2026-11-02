import LevelWorkspace from '@/components/levels/LevelWorkspace';
import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: '500 Level Student Workspace',
   description:
      'The dedicated 500L FUOYE Systems Engineering space for verified course information, academic resources, materials, announcements, and schedules.',
   pathname: '/500-level',
});

export default function FiveHundredLevelPage() {
   return <LevelWorkspace levelCode="500" />;
}
