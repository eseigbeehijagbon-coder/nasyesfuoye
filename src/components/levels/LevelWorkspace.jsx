import Link from 'next/link';
import {
   ArrowLeft,
   ArrowRight,
   ArrowUpRight,
   BookOpen,
   CalendarDays,
   ShieldCheck,
   Vote,
} from 'lucide-react';
import AcademicLibrary from '@/components/AcademicLibrary';
import { DEPARTMENT_PROFILE_URL, LEVELS, PROGRAMME_AREAS, getLevelByCode } from '@/data/systems-engineering';
import { WEEKLY_STUDY_RHYTHM } from '@/data/student-hub-content';

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
                  <Link className="transition-colors hover:text-primary" href="/academics">Academic materials</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page" className="text-primary">{level.label}</span>
               </nav>

               <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-12">
                  <div className="max-w-3xl">
                     <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                        Your {level.label} study guide
                     </p>
                     <h1 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                        Make this your strongest <span className="text-primary">{level.name}</span> year.
                     </h1>
                     <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        Find curated references, practical study prompts, and a simple rhythm for keeping your learning on track.
                     </p>
                     <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a href="#level-study-library" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                           <BookOpen aria-hidden="true" className="size-4" />
                           Browse {level.label} resources
                        </a>
                        <Link href="/events" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                           <CalendarDays aria-hidden="true" className="size-4" />
                           See student events
                        </Link>
                     </div>
                  </div>

                  <aside className="rounded-3xl border border-border bg-white p-5 sm:p-6" aria-label={`${level.label} guide contents`}>
                     <div className="flex size-11 items-center justify-center rounded-2xl bg-[#edf2e9] text-primary">
                        <ShieldCheck aria-hidden="true" className="size-5" />
                     </div>
                     <h2 className="mt-5 font-display text-lg font-bold text-foreground">A helpful starting point</h2>
                     <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                        <li className="flex gap-2"><span className="font-bold text-primary">01</span><span>Curated, free learning resources for {level.label}.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-primary">02</span><span>Practice ideas you can use alone or with classmates.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-primary">03</span><span>Official course requirements remain linked to department sources.</span></li>
                     </ul>
                  </aside>
               </div>
            </div>
         </section>

         <AcademicLibrary
            initialLevel={level.code}
            showFilters={false}
            sectionId="level-study-library"
            title={`Study resources for ${level.label}.`}
            description="These free external links are supplementary study aids, not official course outlines or lecture notes. Use your approved course materials for registration and assessment requirements."
         />

         <section aria-labelledby="study-rhythm-title" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">A routine you can keep</p>
                  <h2 id="study-rhythm-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Turn good intentions into a study rhythm.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                     A small, repeatable plan can make it easier to keep up with difficult topics and ask for help early.
                  </p>
               </div>

               <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {WEEKLY_STUDY_RHYTHM.map((step, index) => (
                     <article key={step.title} className="rounded-3xl border border-border bg-white p-5 sm:p-6">
                        <p className="font-mono text-xs font-bold text-primary/60">STEP 0{index + 1}</p>
                        <h3 className="mt-3 font-display text-lg font-bold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section aria-labelledby="programme-context-title" className="border-y border-border bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Programme-wide themes</p>
                     <h2 id="programme-context-title" className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
                        Explore the bigger systems picture.
                     </h2>
                  </div>
                  <a className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary" href={DEPARTMENT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                     Official programme profile
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

         <section aria-label="More student support" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
               <Link href="/events" className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-white p-5 transition-colors hover:border-primary/30 sm:p-6">
                  <span className="flex items-start gap-3">
                     <CalendarDays aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                     <span>
                        <span className="block font-display text-lg font-bold text-foreground">Find a study group or event</span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">See sample activities and ways to learn with other students.</span>
                     </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
               </Link>
               <Link href="/governance" className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-white p-5 transition-colors hover:border-primary/30 sm:p-6">
                  <span className="flex items-start gap-3">
                     <Vote aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                     <span>
                        <span className="block font-display text-lg font-bold text-foreground">Understand student representation</span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">Learn who represents students and how to raise a concern.</span>
                     </span>
                  </span>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
         </section>

         <nav aria-label="Browse student levels" className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
               {previousLevel ? (
                  <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-3 py-3 text-center text-xs font-bold text-foreground transition-colors hover:border-primary/35 hover:text-primary sm:justify-self-start sm:px-4 sm:text-sm" href={previousLevel.href}>
                     <ArrowLeft aria-hidden="true" className="size-4 shrink-0" />
                     <span>Previous · {previousLevel.label}</span>
                  </Link>
               ) : <span />}
               <Link className="inline-flex min-h-12 items-center justify-center rounded-xl px-3 py-3 text-center text-xs font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary sm:px-4 sm:text-sm" href="/academics">
                  All study materials
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
