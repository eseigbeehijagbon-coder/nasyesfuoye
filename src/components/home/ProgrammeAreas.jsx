import { PROGRAMME_AREAS, DEPARTMENT_PROFILE_URL } from '@/data/systems-engineering';

export default function ProgrammeAreas() {
   return (
      <section id="programme" aria-labelledby="programme-title" className="scroll-mt-20 border-y border-border bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Programme overview</p>
               <h2 id="programme-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                  A systems view of complex work.
               </h2>
               <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  FUOYE&apos;s public department profile lists the areas below. They describe programme-wide subject areas—not a level-by-level course allocation.
               </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-4">
               {PROGRAMME_AREAS.map((area, index) => (
                  <li key={area} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background px-4 py-5 sm:px-5">
                     <span aria-hidden="true" className="font-mono text-xs font-semibold text-primary/60">0{index + 1}</span>
                     <span className="font-display text-base font-bold text-foreground sm:text-lg">{area}</span>
                  </li>
               ))}
            </ul>

            <p className="mt-6 text-xs leading-5 text-muted-foreground">
               Source: <a className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" href={DEPARTMENT_PROFILE_URL} target="_blank" rel="noopener noreferrer">FUOYE department profile</a>.
            </p>
         </div>
      </section>
   );
}
