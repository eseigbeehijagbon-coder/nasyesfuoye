import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LEVELS } from '@/data/systems-engineering';

export default function LevelDirectory({
   id = 'study-levels',
   title = 'Find your level. Pick your next step.',
   description = 'Choose your current year to find study resources, practical guides, and helpful ways to plan what to learn next.',
}) {
   return (
      <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 bg-background px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your academic space</p>
                  <h2 id={`${id}-title`} className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     {title}
                  </h2>
               </div>
               <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {description}
               </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 xl:grid-cols-5">
               {LEVELS.map((level, index) => (
                  <Link
                     key={level.code}
                     href={level.href}
                     aria-label={`Open ${level.name} Systems Engineering portal`}
                     className="group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_42px_-30px_rgba(17,35,27,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-48 sm:p-5"
                  >
                     <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-4xl font-bold leading-none tracking-[-0.06em] text-primary sm:text-5xl">{level.label}</span>
                        <span aria-hidden="true" className="font-mono text-xs font-semibold text-muted-foreground/70">0{index + 1}</span>
                     </div>
                     <div className="mt-6">
                        <p className="text-xs font-medium text-muted-foreground">{level.name}</p>
                        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                           View level resources
                           <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
