import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL, LEVELS } from '@/data/systems-engineering';

const LINK_CLASS = 'text-sm font-semibold text-white/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#11231b]';

export default function Footer() {
   return (
      <footer className="border-t border-white/10 bg-[#11231b] text-white">
         <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1fr]">
               <div className="max-w-sm">
                  <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                     <span className="relative size-10 shrink-0 overflow-hidden rounded-xl">
                        <Image src="/systems-mark.svg" alt="" fill sizes="40px" />
                     </span>
                     <span className="font-display text-base font-bold">FUOYE Systems Engineering</span>
                  </Link>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                     A shared home for academics, student life, departmental updates, projects, opportunities, and career growth.
                  </p>
                  <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={DEPARTMENT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                     Official department profile <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
               </div>

               <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Level hubs</h2>
                  <nav aria-label="Student level hubs" className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3">
                     {LEVELS.map((level) => (
                        <Link key={level.code} className={LINK_CLASS} href={level.href}>{level.label}</Link>
                     ))}
                  </nav>
               </div>

               <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Explore</h2>
                  <nav aria-label="Student platform" className="mt-4 flex flex-col gap-3">
                     <Link className={LINK_CLASS} href="/academics">Academics</Link>
                     <Link className={LINK_CLASS} href="/events">Student life and opportunities</Link>
                     <Link className={LINK_CLASS} href="/memos">Department updates</Link>
                     <Link className={LINK_CLASS} href="/governance">Student representation</Link>
                  </nav>
               </div>

               <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Student services</h2>
                  <nav aria-label="Student services" className="mt-4 flex flex-col gap-3">
                     <Link className={LINK_CLASS} href="/buildlab">BuildLab projects</Link>
                     <Link className={LINK_CLASS} href="/graphics">Graphics studio</Link>
                     <Link className={LINK_CLASS} href="/games">Student arcade</Link>
                  </nav>
               </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
               <span>© {new Date().getFullYear()} FUOYE Systems Engineering</span>
               <span>Find your people, build your experience, and plan your next step.</span>
            </div>
         </div>
      </footer>
   );
}
