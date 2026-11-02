import LevelWorkspace from '@/components/levels/LevelWorkspace';
import { buildPageMetadata } from '@/lib/site-config';

export const metadata = buildPageMetadata({
   title: '200 Level Student Workspace',
   description:
      'The dedicated 200L FUOYE Systems Engineering space for verified course information, academic resources, materials, announcements, and schedules.',
   pathname: '/200-level',
});

export default function TwoHundredLevelPage() {
   return <LevelWorkspace levelCode="200" />;
}
