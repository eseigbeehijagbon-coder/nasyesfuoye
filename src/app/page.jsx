import HomeHero from '@/components/home/HomeHero';
import LevelDirectory from '@/components/home/LevelDirectory';
import ProgrammeAreas from '@/components/home/ProgrammeAreas';
import OfficialInformationNote from '@/components/home/OfficialInformationNote';
import StudentHighlights from '@/components/home/StudentHighlights';

export default function HomePage() {
   return (
      <main>
         <HomeHero />
         <StudentHighlights />
         <LevelDirectory />
         <ProgrammeAreas />
         <OfficialInformationNote />
      </main>
   );
}
