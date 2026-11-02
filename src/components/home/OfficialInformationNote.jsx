import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL } from '@/data/systems-engineering';

export default function OfficialInformationNote() {
   return (
      <section id="official-information" aria-labelledby="official-information-title" className="scroll-mt-20 bg-background px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
         <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[1.75rem] bg-primary p-6 text-primary-foreground sm:p-8">
               <ShieldCheck aria-hidden="true" className="size-7 text-accent" />
               <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/65">Information policy</p>
               <h2 id="official-information-title" className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Know what&apos;s official.
               </h2>
               <p className="mt-4 text-sm leading-7 text-white/75">
                  Use official university or department notices for registration, course requirements, deadlines, and timetables.
               </p>
            </div>

            <div className="flex flex-col justify-center rounded-[1.75rem] border border-border bg-white p-6 sm:p-8">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Course details & requirements</p>
               <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.025em] text-foreground sm:text-2xl">
                  Check the Faculty Handbook or Prospectus before making course decisions.
               </h3>
               <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  The study links on this site are helpful supplements, not official course outlines or lecture notes. Use university and department documents to confirm course codes, units, prerequisites, and schedules.
               </p>
               <a
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-bold text-primary transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  href={DEPARTMENT_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Open FUOYE department profile
                  <ArrowUpRight aria-hidden="true" className="size-4" />
               </a>
            </div>
         </div>
      </section>
   );
}
