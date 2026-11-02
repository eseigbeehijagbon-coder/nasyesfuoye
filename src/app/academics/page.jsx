import LevelDirectory from '@/components/home/LevelDirectory';
import ProgrammeAreas from '@/components/home/ProgrammeAreas';
import OfficialInformationNote from '@/components/home/OfficialInformationNote';

export default function AcademicsPage() {
   return (
      <main>
         <section className="border-b border-border bg-[#f3f5ee] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Academic portal</p>
               <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                  Five dedicated spaces. One Systems Engineering community.
               </h1>
               <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  Choose your current level to open its own organized workspace for courses, resources, materials, announcements, and schedules.
               </p>
            </div>
         </section>
         <LevelDirectory
            id="level-directory"
            title="Choose your level."
            description="Each portal keeps its own level navigation and clearly marks which academic records have been verified or are still awaiting publication."
         />
         <ProgrammeAreas />
         <OfficialInformationNote />
      </main>
   );
}
