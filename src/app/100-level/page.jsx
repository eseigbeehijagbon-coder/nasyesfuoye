import LevelWorkspace from '@/components/levels/LevelWorkspace';
import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: '100 Level Student Workspace',
   description:
      'The dedicated 100L FUOYE Systems Engineering space for verified course information, academic resources, materials, announcements, and schedules.',
   pathname: '/100-level',
});

export default function OneHundredLevelPage() {
   return <LevelWorkspace levelCode="100" />;
}
