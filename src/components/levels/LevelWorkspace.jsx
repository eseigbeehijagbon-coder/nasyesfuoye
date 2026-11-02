import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, CircleAlert } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL, LEVELS, PROGRAMME_AREAS, getLevelByCode } from '@/data/systems-engineering';

const WORKSPACE_SECTIONS = [
   {
      id: 'courses',
      number: '01',
      title: 'Courses & registration',
      status: 'Course list not published here',
      description: 'Course titles, codes, units, prerequisites, and registration guidance will be added after they are checked against an approved university or department document.',
   },
   {
      id: 'resources',
      number: '02',
      title: 'Academic resources',
      status: 'Resources awaiting review',
      description: 'Verified reading lists, study guides, and academic support links for this level will be organized here when they are available.',
   },
   {
      id: 'materials',
      number: '03',
      title: 'Course materials',
      status: 'Materials not published here',
      description: 'Lecture notes, lab materials, and past questions will appear here only when their level and source have been confirmed.',
   },
   {
      id: 'announcements',
      number: '04',
      title: 'Announcements',
      status: 'No verified notices published here',
      description: 'Department notices and academic updates for this level will be shown here after confirmation from an official source.',
   },
   {
      id: 'schedule',
      number: '05',
      title: 'Schedules & timetable',
      status: 'Schedule not published here',
      description: 'Current class and examination schedules will be linked here once an official timetable is provided for this level.',
   },
];

export default function LevelWorkspace({ levelCode }) {
   const level = getLevelByCode(levelCode);
   const currentIndex = LEVELS.findIndex((item) => item.code === level.code);
   const previousLevel = LEVELS[currentIndex - 1];
   const nextLevel = LEVELS[currentIndex + 1];

   return (
      <main>
         <section className="border-b border-border bg-[#f3f5ee] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl">
               <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <Link className="transition-colors hover:text-primary" href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <Link className="transition-colors hover:text-primary" href="/academics">Student levels</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page" className="text-primary">{level.name}</span>
               </nav>

               <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.6fr] lg:gap-12">
                  <div className="max-w-3xl">
                     <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                        Level workspace · {level.label}
                     </p>
                     <h1 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                        Everything for <span className="text-primary">{level.name}</span>, in one place.
                     </h1>
                     <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        Your level has its own space for courses, academic resources, materials, announcements, and schedules. Only verified records are presented as published.
                     </p>
                  </div>

                  <aside className="rounded-2xl border border-border bg-white p-5 sm:p-6" aria-label={`${level.label} portal status`}>
                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Workspace status</p>
                     <div className="mt-4 flex items-start gap-3">
                        <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                           <p className="font-display text-base font-bold text-foreground">Only verified records are shown.</p>
                           <p className="mt-1.5 text-sm leading-6 text-muted-foreground">Unpublished course lists and schedules are clearly marked below.</p>
                        </div>
                     </div>
                  </aside>
               </div>
            </div>
         </section>

         <nav aria-label={`${level.label} workspace sections`} className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
            <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
               {WORKSPACE_SECTIONS.map((section) => (
                  <a
                     key={section.id}
                     className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-secondary-foreground transition-colors hover:border-primary/35 hover:text-primary"
                     href={`#${section.id}`}
                  >
                     {section.title}
                  </a>
               ))}
            </div>
         </nav>

         <section aria-labelledby="workspace-sections-title" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your {level.label} dashboard</p>
                  <h2 id="workspace-sections-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Academic information, organized by need.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                     Each section is reserved for level-specific material. An unpublished state means this portal does not yet have a verified document to display.
                  </p>
               </div>

               <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                  {WORKSPACE_SECTIONS.map((section) => (
                     <section key={section.id} id={section.id} aria-labelledby={`${level.code}-${section.id}-title`} className="scroll-mt-36 flex min-h-64 flex-col rounded-2xl border border-border bg-white p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                           <p className="font-mono text-xs font-semibold text-primary/65">{section.number} / {level.label}</p>
                           <span className="max-w-40 rounded-full bg-secondary px-2.5 py-1.5 text-right text-[10px] font-bold leading-4 text-secondary-foreground sm:text-xs">
                              {section.status}
                           </span>
                        </div>
                        <h3 id={`${level.code}-${section.id}-title`} className="mt-5 font-display text-xl font-bold tracking-[-0.025em] text-foreground">
                           {section.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.description}</p>
                        <p className="mt-auto pt-5 text-xs font-semibold text-muted-foreground">For {level.name} students</p>
                     </section>
                  ))}
               </div>

               <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-primary/10 bg-[#edf2e9] p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
                  <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                     <h3 className="font-display text-base font-bold text-foreground">Use official documents for course requirements.</h3>
                     <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        FUOYE&apos;s public department profile points students to the Faculty Handbook/Prospectus for definitive course information. The programme areas below are general context, not a course list for {level.label}.
                     </p>
                     <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" href={DEPARTMENT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                        View FUOYE department profile
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <section aria-labelledby="programme-context-title" className="border-y border-border bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Programme-wide context</p>
                     <h2 id="programme-context-title" className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
                        Areas named in the department profile.
                     </h2>
                  </div>
                  <a className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" href={DEPARTMENT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                     Check the source
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
               </div>
               <ul className="mt-6 flex flex-wrap gap-2.5">
                  {PROGRAMME_AREAS.map((area) => (
                     <li key={area} className="rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-secondary-foreground">{area}</li>
                  ))}
               </ul>
            </div>
         </section>

         <nav aria-label="Browse student levels" className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
               {previousLevel ? (
                  <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-3 py-3 text-center text-xs font-bold text-foreground transition-colors hover:border-primary/35 hover:text-primary sm:justify-self-start sm:px-4 sm:text-sm" href={previousLevel.href}>
                     <ArrowLeft aria-hidden="true" className="size-4 shrink-0" />
                     <span>Previous · {previousLevel.label}</span>
                  </Link>
               ) : <span />}
               <Link className="inline-flex min-h-12 items-center justify-center rounded-xl px-3 py-3 text-center text-xs font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary sm:px-4 sm:text-sm" href="/academics">
                  All levels
               </Link>
               {nextLevel ? (
                  <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-3 py-3 text-center text-xs font-bold text-foreground transition-colors hover:border-primary/35 hover:text-primary sm:justify-self-end sm:px-4 sm:text-sm" href={nextLevel.href}>
                     <span>Next · {nextLevel.label}</span>
                     <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                  </Link>
               ) : <span />}
            </div>
         </nav>
      </main>
   );
}
