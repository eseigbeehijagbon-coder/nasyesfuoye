import LevelWorkspace from '@/components/levels/LevelWorkspace';
import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: '400 Level Student Workspace',
   description:
      'The dedicated 400L FUOYE Systems Engineering space for verified course information, academic resources, materials, announcements, and schedules.',
   pathname: '/400-level',
});

export default function FourHundredLevelPage() {
   return <LevelWorkspace levelCode="400" />;
}
