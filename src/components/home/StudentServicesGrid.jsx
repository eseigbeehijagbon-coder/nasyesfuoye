import Link from 'next/link';
import { BookOpen, CalendarDays, FileText, Gamepad2, Palette, Rocket, Vote } from 'lucide-react';

const STUDENT_SERVICES = [
   { href: '/academics', label: 'Academic library', description: 'Find supplementary resources for your level.', icon: BookOpen },
   { href: '/memos', label: 'Notices and memos', description: 'Read and search published announcements.', icon: FileText },
   { href: '/events', label: 'Events and opportunities', description: 'Explore student activities and growth ideas.', icon: CalendarDays },
   { href: '/governance', label: 'Student representation', description: 'Understand roles and ways to be heard.', icon: Vote },
   { href: '/buildlab', label: 'BuildLab projects', description: 'Browse student work and share an idea.', icon: Rocket },
   { href: '/graphics', label: 'Graphics studio', description: 'Use the existing visual design tools.', icon: Palette },
   { href: '/games', label: 'Student arcade', description: 'Take a short break with the student games.', icon: Gamepad2 },
];

export default function StudentServicesGrid() {
   return (
      <section id="student-services" aria-labelledby="student-services-title" className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
         <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Useful student services</p>
                  <h2 id="student-services-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     The tools and support you already use.
                  </h2>
               </div>
               <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Jump straight to the practical parts of the platform, from study support to projects and student community.
               </p>
            </div>

            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
               {STUDENT_SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                     <li key={service.href}>
                        <Link className="group flex h-full min-h-36 flex-col rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_16px_38px_-30px_rgba(17,35,27,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-40 sm:p-5" href={service.href}>
                           <span className="flex size-10 items-center justify-center rounded-xl bg-[#e5efdc] text-primary">
                              <Icon aria-hidden="true" className="size-5" />
                           </span>
                           <span className="mt-4 font-display text-sm font-bold text-foreground sm:text-base">{service.label}</span>
                           <span className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{service.description}</span>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </section>
   );
}
