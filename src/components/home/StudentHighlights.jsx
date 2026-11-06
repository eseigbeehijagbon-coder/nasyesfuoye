import Link from 'next/link';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, CalendarDays, FileText, Rocket, Vote } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '@/data/portal-updates';
import {
   ACADEMIC_RESOURCES,
   REPRESENTATIVE_ROLES,
   STUDENT_EVENTS,
   STUDENT_OPPORTUNITIES,
} from '@/data/student-hub-content';

const HIGHLIGHTS = [
   {
      href: '/academics#study-library',
      eyebrow: 'Academics',
      title: 'Make your next study session count.',
      description: 'Find supplementary learning links and practical study prompts for all five levels.',
      detail: `${ACADEMIC_RESOURCES.length} learning resources`,
      preview: 'Open textbooks, guided courses, references, and practice ideas',
      icon: BookOpen,
      iconClass: 'bg-[#e1eee8] text-[#245644]',
   },
   {
      href: '/events',
      eyebrow: 'Student life',
      title: 'Find your people and your place.',
      description: 'Explore sample study circles, forums, skills sessions, and ways to get involved.',
      detail: `${STUDENT_EVENTS.length} sample activities`,
      preview: 'Meet classmates, learn together, and discover ways to participate',
      icon: CalendarDays,
      iconClass: 'bg-[#e5efdc] text-primary',
   },
   {
      href: '/memos',
      eyebrow: 'Department news',
      title: 'Stay close to published updates.',
      description: 'Go to the live memo board for current announcements and student notices.',
      detail: 'Live memo board',
      preview: 'Search published updates by category',
      icon: FileText,
      iconClass: 'bg-[#e1eee8] text-[#245644]',
   },
   {
      href: '/governance',
      eyebrow: 'Student representation',
      title: 'Know how student voice works.',
      description: 'Understand representation roles, shared priorities, and fair election processes.',
      detail: `${REPRESENTATIVE_ROLES.length} roles explained`,
      preview: 'Neutral guides, sample discussion topics, and voting basics',
      icon: Vote,
      iconClass: 'bg-[#f1efd9] text-[#675d1d]',
   },
   {
      href: '/buildlab',
      eyebrow: 'Projects',
      title: 'See what students are building.',
      description: 'Explore existing project showcases and find a route to share your own idea.',
      detail: `${SHOWCASE_PROJECTS.length} showcase projects`,
      preview: 'Student-built tools, experiments, and project stories',
      icon: Rocket,
      iconClass: 'bg-[#e1eee8] text-[#245644]',
   },
   {
      href: '/events',
      eyebrow: 'Opportunities & careers',
      title: 'Build experience one step at a time.',
      description: 'Explore mentoring, project, and career-development ideas—not live job listings.',
      detail: `${STUDENT_OPPORTUNITIES.length} starter ideas`,
      preview: 'Practise skills, connect with peers, and plan what comes next',
      icon: BriefcaseBusiness,
      iconClass: 'bg-[#f1efd9] text-[#675d1d]',
   },
];

export default function StudentHighlights() {
   return (
      <section aria-labelledby="student-highlights-title" className="border-b border-border bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your student hub</p>
                  <h2 id="student-highlights-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Every part of student life, easier to find.
                  </h2>
               </div>
               <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Start with the area that matters today, then explore the full set of student support and services.
               </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 xl:grid-cols-3">
               {HIGHLIGHTS.map((highlight) => {
                  const Icon = highlight.icon;

                  return (
                     <Link
                        key={highlight.eyebrow}
                        href={highlight.href}
                        className="group flex min-h-64 flex-col rounded-3xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_42px_-30px_rgba(17,35,27,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-6"
                     >
                        <div className="flex items-start justify-between gap-4">
                           <span className={`flex size-12 items-center justify-center rounded-2xl ${highlight.iconClass}`}>
                              <Icon aria-hidden="true" className="size-5" />
                           </span>
                           <span className="rounded-full border border-border bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                              {highlight.detail}
                           </span>
                        </div>
                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary">{highlight.eyebrow}</p>
                        <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-[-0.025em] text-foreground sm:text-2xl">
                           {highlight.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{highlight.description}</p>
                        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                           <span className="text-xs font-medium leading-5 text-muted-foreground">{highlight.preview}</span>
                           <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-1">
                              <ArrowUpRight aria-hidden="true" className="size-4" />
                           </span>
                        </div>
                     </Link>
                  );
               })}
            </div>

            <p className="mt-5 text-xs leading-5 text-muted-foreground">
               Event formats and opportunity ideas are samples, not confirmed listings. Study links are supplementary; check official notices for requirements.
            </p>
         </div>
      </section>
   );
}
