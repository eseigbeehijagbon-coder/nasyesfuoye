import { buildPageMetadata } from '@/lib/site-config';
import DepartmentUpdatesSection from '@/components/home/DepartmentUpdatesSection';
import HomeHero from '@/components/home/HomeHero';
import LevelDirectory from '@/components/home/LevelDirectory';
import OfficialInformationNote from '@/components/home/OfficialInformationNote';
import ProgrammeAreas from '@/components/home/ProgrammeAreas';
import StudentExperienceSection from '@/components/home/StudentExperienceSection';
import StudentHighlights from '@/components/home/StudentHighlights';
import StudentServicesGrid from '@/components/home/StudentServicesGrid';

export const metadata = buildPageMetadata({
   title: 'FUOYE Systems Engineering Student Platform',
   description: 'A student platform for FUOYE Systems Engineering academics, campus life, departmental updates, projects, opportunities, and career development.',
   pathname: '/',
});

export default function HomePage() {
   return (
      <main>
         <HomeHero />
         <StudentHighlights />
         <DepartmentUpdatesSection />
         <StudentExperienceSection />
         <LevelDirectory />
         <StudentServicesGrid />
         <ProgrammeAreas />
         <OfficialInformationNote />
      </main>
   );
}
