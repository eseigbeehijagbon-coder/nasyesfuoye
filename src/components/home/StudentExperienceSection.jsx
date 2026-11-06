import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, CalendarDays, Lightbulb, Rocket } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '@/data/portal-updates';
import { STUDENT_EVENTS, STUDENT_OPPORTUNITIES } from '@/data/student-hub-content';

const CAREER_AND_GROWTH_IDEAS = ['peer-mentor', 'campus-process-challenge', 'career-conversation'];

function excerpt(text, limit = 126) {
   return text.length > limit ? `${text.slice(0, limit).trimEnd()}…` : text;
}

export default function StudentExperienceSection() {
   const growthIdeas = STUDENT_OPPORTUNITIES.filter((item) => CAREER_AND_GROWTH_IDEAS.includes(item.id));

   return (
      <section id="student-experience" aria-labelledby="student-experience-title" className="border-y border-border bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Student life · projects · opportunities</p>
               <h2 id="student-experience-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                  Build an experience beyond the classroom.
               </h2>
               <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Meet other students, explore work built by the community, and find a practical next step for your own growth.
               </p>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-3">
               <article className="flex flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#e5efdc] text-primary">
                     <CalendarDays aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">Find your people and your place.</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Explore sample formats for learning together, sharing ideas, and getting involved with other students.</p>
                  <ul className="mt-5 space-y-3">
                     {STUDENT_EVENTS.slice(0, 2).map((event) => (
                        <li key={event.id} className="rounded-2xl border border-border bg-white p-3.5">
                           <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{event.category} · sample idea</p>
                           <p className="mt-1.5 text-sm font-bold leading-5 text-foreground">{event.title}</p>
                        </li>
                     ))}
                  </ul>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">These are example activities, not confirmed dates or venues.</p>
                  <Link className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-primary hover:underline" href="/events">
                     Explore student life and events <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
               </article>

               <article className="flex flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#e1eee8] text-primary">
                     <Rocket aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">See what students are building.</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Explore projects already featured in the student BuildLab showcase.</p>
                  <ul className="mt-5 space-y-3">
                     {SHOWCASE_PROJECTS.slice(0, 2).map((project) => (
                        <li key={project.id}>
                           <a className="group block rounded-2xl border border-border bg-white p-3.5 transition-colors hover:border-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project demo in a new tab`}>
                              <span className="flex items-center justify-between gap-3">
                                 <span className="font-display text-sm font-bold text-foreground group-hover:text-primary">{project.title}</span>
                                 <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-primary" />
                              </span>
                              <span className="mt-1 block text-xs leading-5 text-muted-foreground">{project.category} · {project.level}</span>
                              <span className="mt-2 block text-xs leading-5 text-muted-foreground">{excerpt(project.desc)}</span>
                           </a>
                        </li>
                     ))}
                  </ul>
                  <Link className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-primary hover:underline" href="/buildlab">
                     Visit BuildLab <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
               </article>

               <article className="flex flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f1efd9] text-[#675d1d]">
                     <BriefcaseBusiness aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">Make your next step count.</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Small experiences can help you practise leadership, project thinking, and career communication.</p>
                  <ul className="mt-5 space-y-3">
                     {growthIdeas.map((idea) => (
                        <li key={idea.id} className="rounded-2xl border border-border bg-white p-3.5">
                           <p className="text-sm font-bold leading-5 text-foreground">{idea.title}</p>
                           <p className="mt-1.5 text-xs leading-5 text-muted-foreground">First step: {idea.firstStep}</p>
                        </li>
                     ))}
                  </ul>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">These are starter ideas, not live job listings or confirmed placements.</p>
                  <Link className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-primary hover:underline" href="/events">
                     Explore opportunities <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
               </article>
            </div>
         </div>
      </section>
   );
}
