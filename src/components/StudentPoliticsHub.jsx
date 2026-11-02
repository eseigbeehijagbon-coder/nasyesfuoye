import Link from 'next/link';
import {
   ArrowDown,
   ArrowRight,
   ArrowUpRight,
   BookOpen,
   CheckCircle2,
   MessageCircle,
   ShieldCheck,
   TriangleAlert,
   Users,
   Vote,
} from 'lucide-react';
import { SAMPLE_CONTENT_NOTICE, REPRESENTATIVE_ROLES, SAMPLE_STUDENT_ISSUES, ELECTION_STEPS } from '@/data/student-hub-content';

const VOTER_CHECKLIST = [
   'Use the official notice to confirm eligibility, dates, and voting instructions.',
   'Compare candidates using their published plans and the needs they address.',
   'Protect your login details and never share a private ballot link or one-time code.',
   'Check results only through the verified electoral committee announcement.',
];

const PARTICIPATION_STEPS = [
   {
      number: '01',
      title: 'Describe the issue clearly',
      description: 'Say what is happening, who it affects, and whether there is a deadline or safety concern.',
   },
   {
      number: '02',
      title: 'Choose a suitable channel',
      description: 'Start with your class representative for shared concerns; use a private, verified channel for sensitive matters.',
   },
   {
      number: '03',
      title: 'Agree on the follow-up',
      description: 'Ask who will respond, what the next step is, and when students can expect an update.',
   },
];

export default function StudentPoliticsHub() {
   return (
      <main>
         <section className="bg-primary text-primary-foreground">
            <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14 lg:px-8 lg:py-20">
               <div className="max-w-3xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                     <Users aria-hidden="true" className="size-4" />
                     Student politics &amp; representation
                  </p>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                     Student politics should be easy to follow.
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                     Know what student representatives do, explore the issues that affect campus life, and understand how to take part in a fair election.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                     <a
                        href="#representation"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                     >
                        Meet the roles
                        <ArrowDown aria-hidden="true" className="size-4" />
                     </a>
                     <a
                        href="#elections"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                     >
                        Election guide
                        <Vote aria-hidden="true" className="size-4" />
                     </a>
                  </div>
               </div>

               <aside className="rounded-3xl border border-white/15 bg-white/8 p-5 sm:p-6" aria-label="Student representation overview">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">A clearer way to participate</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{REPRESENTATIVE_ROLES.length}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">roles explained</p>
                     </div>
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{SAMPLE_STUDENT_ISSUES.length}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">sample topics</p>
                     </div>
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{ELECTION_STEPS.length}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">election steps</p>
                     </div>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-white/60">Neutral guidance only. Candidate names, election dates, and results belong in official notices.</p>
               </aside>
            </div>
         </section>

         <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 rounded-3xl border border-primary/15 bg-[#edf2e9] p-5 sm:flex-row sm:items-start sm:p-6">
               <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
               <div>
                  <p className="font-display text-base font-bold text-foreground">A note on sample content</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{SAMPLE_CONTENT_NOTICE}</p>
               </div>
            </div>
         </div>

         <section id="representation" aria-labelledby="representation-title" className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Who does what</p>
                     <h2 id="representation-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                        Find the right person for the right concern.
                     </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                     These role descriptions are a practical guide, not a directory of current office holders.
                  </p>
               </div>

               <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {REPRESENTATIVE_ROLES.map((role, index) => (
                     <article key={role.id} className="flex min-h-[25rem] flex-col rounded-3xl border border-border bg-white p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                           <span className="flex size-11 items-center justify-center rounded-2xl bg-[#edf2e9] text-primary">
                              <Users aria-hidden="true" className="size-5" />
                           </span>
                           <span className="font-mono text-xs font-bold text-primary/55">0{index + 1}</span>
                        </div>
                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{role.group}</p>
                        <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.025em] text-foreground">{role.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{role.description}</p>
                        <ul className="mt-4 space-y-2">
                           {role.responsibilities.map((responsibility) => (
                              <li key={responsibility} className="flex gap-2 text-xs leading-5 text-secondary-foreground">
                                 <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                                 <span>{responsibility}</span>
                              </li>
                           ))}
                        </ul>
                        <p className="mt-auto border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
                           <span className="font-bold text-foreground">How to engage:</span> {role.howToEngage}
                        </p>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section id="student-priorities" aria-labelledby="priorities-title" className="scroll-mt-20 border-y border-border bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Ideas for constructive discussion</p>
                  <h2 id="priorities-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Start with the issues students feel every day.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                     These sample agenda topics are prompts for listening and problem-solving, not survey results or official student positions.
                  </p>
               </div>

               <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {SAMPLE_STUDENT_ISSUES.map((issue) => (
                     <article key={issue.id} className="flex min-h-56 flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3">
                           <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-secondary-foreground">{issue.category}</span>
                           <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Sample topic</span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-bold text-foreground">{issue.title}</h3>
                        <p className="mt-2 text-sm font-semibold leading-6 text-secondary-foreground">{issue.question}</p>
                        <p className="mt-auto border-t border-border pt-4 text-xs leading-5 text-muted-foreground">{issue.discussion}</p>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section id="elections" aria-labelledby="elections-title" className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
               <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">From notice to result</p>
                  <h2 id="elections-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     A simple guide to student elections.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                     Every real election should publish its own approved dates, rules, and voting instructions. Use this checklist to know what to look for.
                  </p>

                  <ol className="mt-7 space-y-3">
                     {ELECTION_STEPS.map((step) => (
                        <li key={step.number} className="flex gap-4 rounded-2xl border border-border bg-white p-4 sm:p-5">
                           <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary font-mono text-xs font-bold text-white">{step.number}</span>
                           <div>
                              <h3 className="font-display text-base font-bold text-foreground">{step.title}</h3>
                              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{step.description}</p>
                           </div>
                        </li>
                     ))}
                  </ol>
               </div>

               <aside className="h-fit rounded-3xl border border-primary/15 bg-[#edf2e9] p-5 sm:p-7">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white text-primary">
                     <ShieldCheck aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">Before you cast a vote</h3>
                  <ul className="mt-4 space-y-3">
                     {VOTER_CHECKLIST.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-secondary-foreground">
                           <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
                  <p className="mt-5 border-t border-primary/10 pt-4 text-xs leading-5 text-muted-foreground">
                     No live ballot or current election is represented on this sample page.
                  </p>
               </aside>
            </div>
         </section>

         <section aria-labelledby="participation-title" className="border-y border-border bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Make your voice useful</p>
                     <h2 id="participation-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                        Raise a concern. Help move it forward.
                     </h2>
                  </div>
                  <Link href="/events#calendar" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                     Find student forums
                     <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
               </div>

               <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {PARTICIPATION_STEPS.map((step) => (
                     <article key={step.number} className="rounded-3xl border border-border bg-background p-5 sm:p-6">
                        <p className="font-mono text-xs font-bold text-primary/60">STEP {step.number}</p>
                        <h3 className="mt-3 font-display text-lg font-bold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                     </article>
                  ))}
               </div>

               <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-start gap-3">
                     <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                     <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                        Need learning support alongside student representation? Browse the study library for curated references and practice prompts.
                     </p>
                  </div>
                  <Link href="/academics#study-library" className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                     Browse study materials
                     <BookOpen aria-hidden="true" className="size-4" />
                  </Link>
               </div>
            </div>
         </section>

         <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-xs leading-5 text-muted-foreground">
               Student representation guidance is neutral and educational. This page does not endorse a candidate, party, or current election result.
               <Link href="/" className="ml-1 inline-flex items-center gap-1 font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                  Return to the student hub
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
               </Link>
            </p>
         </div>
      </main>
   );
}
