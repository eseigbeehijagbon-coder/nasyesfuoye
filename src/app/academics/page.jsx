import AcademicLibrary from '@/components/AcademicLibrary';
import LevelDirectory from '@/components/home/LevelDirectory';
import ProgrammeAreas from '@/components/home/ProgrammeAreas';
import OfficialInformationNote from '@/components/home/OfficialInformationNote';

export default function AcademicsPage() {
   return (
      <main>
         <section className="border-b border-border bg-[#f3f5ee] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Study materials &amp; level guides</p>
               <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                  Find the right starting point for your studies.
               </h1>
               <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  Browse useful references by level, try a practical study prompt, and choose a steady next step. The links are free supplements to your classes.
               </p>
            </div>
         </section>
         <LevelDirectory
            id="level-directory"
            title="Choose your current level."
            description="Open your level guide for focused resources, practice ideas, and a simple weekly study rhythm."
         />
         <AcademicLibrary />
         <ProgrammeAreas />
         <OfficialInformationNote />
      </main>
   );
}
