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
                  Verified first. Always.
               </h2>
               <p className="mt-4 text-sm leading-7 text-white/75">
                  Course codes, units, prerequisites, and timetables should come from an approved university or department document.
               </p>
            </div>

            <div className="flex flex-col justify-center rounded-[1.75rem] border border-border bg-white p-6 sm:p-8">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Course details & requirements</p>
               <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.025em] text-foreground sm:text-2xl">
                  Use the Faculty Handbook or Prospectus for definitive course information.
               </h3>
               <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  FUOYE&apos;s public department profile points students to those university documents for course requirements. No verified level-by-level files were supplied for this build, so the five student spaces identify unpublished records instead of repeating unverified course lists.
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
