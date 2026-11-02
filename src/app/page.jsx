import HomeHero from '@/components/home/HomeHero';
import LevelDirectory from '@/components/home/LevelDirectory';
import ProgrammeAreas from '@/components/home/ProgrammeAreas';
import OfficialInformationNote from '@/components/home/OfficialInformationNote';

export default function HomePage() {
   return (
      <main>
         <HomeHero />
         <LevelDirectory />
         <ProgrammeAreas />
         <OfficialInformationNote />
      </main>
   );
}
