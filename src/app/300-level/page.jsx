import LevelWorkspace from '@/components/levels/LevelWorkspace';
import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: '300 Level Student Workspace',
   description:
      'The dedicated 300L FUOYE Systems Engineering space for verified course information, academic resources, materials, announcements, and schedules.',
   pathname: '/300-level',
});

export default function ThreeHundredLevelPage() {
   return <LevelWorkspace levelCode="300" />;
}
