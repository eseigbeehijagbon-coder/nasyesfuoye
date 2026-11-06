import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CalendarDays, FileText, Gamepad2, Lightbulb, Palette, Rocket, UsersRound, Vote } from 'lucide-react';

const JOURNEY_ICONS = {
   'Student life': CalendarDays,
   'Student voice': Vote,
   'Peer support': UsersRound,
   Projects: Rocket,
   'Career growth': BriefcaseBusiness,
   Opportunities: BriefcaseBusiness,
   Community: UsersRound,
};

const SUPPORT_LINKS = [
   { href: '/memos', title: 'Department updates', description: 'Published notices and announcements.', icon: FileText },
   { href: '/events', title: 'Events and opportunities', description: 'Student activities and growth ideas.', icon: CalendarDays },
   { href: '/governance', title: 'Student representation', description: 'Learn about student voice and roles.', icon: Vote },
   { href: '/buildlab', title: 'BuildLab projects', description: 'Explore project work and ideas.', icon: Rocket },
   { href: '/graphics', title: 'Graphics studio', description: 'Use the existing visual design tools.', icon: Palette },
   { href: '/games', title: 'Student arcade', description: 'Take a short break with student games.', icon: Gamepad2 },
];

export default function LevelExperience({ level, guide }) {
   return (
      <>
         <section id="level-life" aria-labelledby="level-life-title" className="scroll-mt-24 border-y border-border bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{guide.stage}</p>
                  <h2 id="level-life-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Your {level.label} year is more than coursework.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{guide.summary}</p>
               </div>

               <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {guide.journey.map((item) => {
                     const Icon = JOURNEY_ICONS[item.category] ?? Lightbulb;
                     return (
                        <article key={item.title} className="flex min-h-64 flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                           <div className="flex items-start justify-between gap-3">
                              <span className="flex size-11 items-center justify-center rounded-2xl bg-[#e5efdc] text-primary">
                                 <Icon aria-hidden="true" className="size-5" />
                              </span>
                              <span className="rounded-full border border-border bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{item.category}</span>
                           </div>
                           <h3 className="mt-5 font-display text-lg font-bold text-foreground sm:text-xl">{item.title}</h3>
                           <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                           <Link className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href={item.href}>
                              {item.action} <ArrowRight aria-hidden="true" className="size-4" />
                           </Link>
                        </article>
                     );
                  })}
               </div>
               <p className="mt-5 text-xs leading-5 text-muted-foreground">These are general student-development suggestions. Confirm course, placement, event, and application requirements through published university or department notices.</p>
            </div>
         </section>

         <section id="level-support" aria-labelledby="level-support-title" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Quick access</p>
                  <h2 id="level-support-title" className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-foreground sm:text-3xl">
                     Keep the useful links close.
                  </h2>
               </div>
               <ul className="mt-6 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 xl:grid-cols-6">
                  {SUPPORT_LINKS.map((item) => {
                     const Icon = item.icon;
                     return (
                        <li key={item.href}>
                           <Link className="group flex h-full min-h-36 flex-col rounded-2xl border border-border bg-white p-4 transition-colors hover:border-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" href={item.href}>
                              <span className="flex size-10 items-center justify-center rounded-xl bg-[#e5efdc] text-primary">
                                 <Icon aria-hidden="true" className="size-5" />
                              </span>
                              <span className="mt-3 text-sm font-bold text-foreground group-hover:text-primary">{item.title}</span>
                              <span className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </section>
      </>
   );
}
