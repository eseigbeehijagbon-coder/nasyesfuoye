'use client';

import { useState } from 'react';
import { ArrowUpRight, BookOpen, ExternalLink, Search } from 'lucide-react';
import { ACADEMIC_RESOURCES } from '@/data/student-hub-content';
import { LEVELS } from '@/data/systems-engineering';

export default function AcademicLibrary({
   initialLevel = 'all',
   showFilters = true,
   sectionId = 'study-library',
   title = 'A useful place to start.',
   description = 'Explore free learning resources and practical prompts. These links supplement your classes; they are not official course outlines or lecture notes.',
}) {
   const [activeLevel, setActiveLevel] = useState(initialLevel);
   const [searchTerm, setSearchTerm] = useState('');
   const selectedLevel = showFilters ? activeLevel : initialLevel;
   const normalizedSearch = searchTerm.trim().toLowerCase();
   const visibleResources = ACADEMIC_RESOURCES.filter((resource) => {
      const matchesLevel = selectedLevel === 'all' || resource.level === selectedLevel;
      const searchableText = `${resource.title} ${resource.topic} ${resource.kind} ${resource.provider} ${resource.summary} ${resource.practice}`.toLowerCase();
      return matchesLevel && searchableText.includes(normalizedSearch);
   });

   return (
      <section id={sectionId} aria-labelledby={`${sectionId}-title`} className="scroll-mt-24 border-y border-border bg-[#edf2e9] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
               <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                     <BookOpen aria-hidden="true" className="size-4" />
                     Study library · {visibleResources.length} resources
                  </p>
                  <h2 id={`${sectionId}-title`} className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     {title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
               </div>

               <label className="relative block w-full lg:max-w-sm">
                  <span className="sr-only">Search study resources</span>
                  <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                     type="search"
                     value={searchTerm}
                     onChange={(event) => setSearchTerm(event.target.value)}
                     placeholder="Search a topic or resource"
                     className="min-h-12 w-full rounded-2xl border border-border bg-white pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
               </label>
            </div>

            {showFilters ? (
               <div className="mt-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Browse by level</p>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Filter study resources by level">
                     <button
                        type="button"
                        aria-pressed={activeLevel === 'all'}
                        onClick={() => setActiveLevel('all')}
                        className={`min-h-10 rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeLevel === 'all' ? 'border-primary bg-primary text-white' : 'border-border bg-white text-secondary-foreground hover:border-primary/35 hover:text-primary'}`}
                     >
                        All levels ({ACADEMIC_RESOURCES.length})
                     </button>
                     {LEVELS.map((level) => {
                        const count = ACADEMIC_RESOURCES.filter((resource) => resource.level === level.code).length;
                        return (
                           <button
                              key={level.code}
                              type="button"
                              aria-pressed={activeLevel === level.code}
                              onClick={() => setActiveLevel(level.code)}
                              className={`min-h-10 rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeLevel === level.code ? 'border-primary bg-primary text-white' : 'border-border bg-white text-secondary-foreground hover:border-primary/35 hover:text-primary'}`}
                           >
                              {level.label} ({count})
                           </button>
                        );
                     })}
                  </div>
               </div>
            ) : null}

            {visibleResources.length > 0 ? (
               <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {visibleResources.map((resource) => (
                     <article key={resource.id} className="flex min-h-[24rem] flex-col rounded-3xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_42px_-30px_rgba(17,35,27,0.42)] sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                           <span className="rounded-full bg-[#edf2e9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{resource.levelLabel}</span>
                           <span className="rounded-full border border-border px-3 py-1.5 text-[10px] font-bold text-muted-foreground">Supplemental resource</span>
                        </div>
                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{resource.topic}</p>
                        <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">{resource.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{resource.summary}</p>
                        <div className="mt-4 rounded-2xl bg-background p-4">
                           <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Try this</p>
                           <p className="mt-1.5 text-xs leading-5 text-secondary-foreground">{resource.practice}</p>
                        </div>
                        <div className="mt-auto flex items-end justify-between gap-4 border-t border-border pt-4">
                           <div>
                              <p className="text-xs font-bold text-foreground">{resource.provider}</p>
                              <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{resource.kind}</p>
                           </div>
                           <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                           >
                              Open resource
                              <ExternalLink aria-hidden="true" className="size-3.5" />
                           </a>
                        </div>
                     </article>
                  ))}
               </div>
            ) : (
               <div className="mt-6 rounded-3xl border border-dashed border-border bg-white p-8 text-center">
                  <p className="font-display text-lg font-bold text-foreground">No resources match that search.</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Try a different topic, or clear the search to see every resource for this level.</p>
                  <button
                     type="button"
                     onClick={() => setSearchTerm('')}
                     className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                     Clear search
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </button>
               </div>
            )}
         </div>
      </section>
   );
}
