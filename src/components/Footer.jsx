import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL, LEVELS } from '@/data/systems-engineering';

export default function Footer() {
   return (
      <footer className="border-t border-white/10 bg-[#11231b] text-white">
         <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
               <div className="max-w-sm">
                  <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                     <span className="relative size-10 shrink-0 overflow-hidden rounded-xl">
                        <Image src="/systems-mark.svg" alt="" fill sizes="40px" />
                     </span>
                     <span className="font-display text-base font-bold">FUOYE Systems Engineering</span>
                  </Link>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                     A level-based academic hub for programme information and student resources.
                  </p>
               </div>

               <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Student levels</h2>
                  <nav aria-label="Student level portals" className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3">
                     {LEVELS.map((level) => (
                        <Link key={level.code} className="text-sm font-semibold text-white/80 transition-colors hover:text-accent" href={level.href}>
                           {level.label}
                        </Link>
                     ))}
                  </nav>
               </div>

               <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Department</h2>
                  <a
                     className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-accent"
                     href={DEPARTMENT_PROFILE_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     FUOYE department profile
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                     Course outlines, materials, notices, and timetables are labeled clearly when official records are not available here.
                  </p>
               </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
               <span>© {new Date().getFullYear()} FUOYE Systems Engineering</span>
               <span>Built around five dedicated level workspaces</span>
            </div>
         </div>
      </footer>
   );
}
