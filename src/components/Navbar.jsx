'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Gamepad2, Menu, Palette, X } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL, LEVELS } from '@/data/systems-engineering';

const PLATFORM_LINKS = [
   { href: '/#study-levels', label: 'Level hubs' },
   { href: '/academics', label: 'Academics' },
   { href: '/events', label: 'Student life' },
   { href: '/memos', label: 'Updates' },
   { href: '/buildlab', label: 'Projects' },
   { href: '/governance', label: 'Representation' },
];

const STUDENT_TOOLS = [
   { href: '/graphics', label: 'Graphics studio', icon: Palette },
   { href: '/games', label: 'Student arcade', icon: Gamepad2 },
];

export default function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   function closeMobileMenu() {
      setMobileMenuOpen(false);
   }

   return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <Link
               href="/"
               onClick={closeMobileMenu}
               className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
               aria-label="FUOYE Systems Engineering home"
            >
               <span className="relative size-10 shrink-0 overflow-hidden rounded-xl">
                  <Image src="/systems-mark.svg" alt="" fill sizes="40px" />
               </span>
               <span className="flex min-w-0 flex-col leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">FUOYE</span>
                  <span className="truncate font-display text-sm font-bold text-foreground sm:text-base">Systems Engineering</span>
               </span>
            </Link>

            <nav aria-label="Primary navigation" className="hidden items-center gap-4 2xl:gap-5 xl:flex">
               {PLATFORM_LINKS.map((item) => (
                  <Link key={item.href} className="whitespace-nowrap text-xs font-semibold text-muted-foreground transition-colors hover:text-primary 2xl:text-sm" href={item.href}>
                     {item.label}
                  </Link>
               ))}
            </nav>

            <Link
               className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 xl:inline-flex"
               href="/#student-services"
            >
               Student services
               <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>

            <button
               type="button"
               className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 xl:hidden"
               aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
               aria-expanded={mobileMenuOpen}
               aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
               onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            >
               {mobileMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
         </div>

         {mobileMenuOpen ? (
            <div id="mobile-navigation" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-5 pt-4 xl:hidden">
               <nav aria-label="Mobile platform navigation" className="mx-auto flex max-w-7xl flex-col gap-1">
                  {PLATFORM_LINKS.filter((item) => item.label !== 'Level hubs').map((item) => (
                     <Link key={item.href} className="flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href={item.href} onClick={closeMobileMenu}>
                        {item.label}
                     </Link>
                  ))}
               </nav>

               <section aria-labelledby="mobile-tools-title" className="mx-auto mt-4 max-w-7xl border-t border-border pt-4">
                  <h2 id="mobile-tools-title" className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Student services</h2>
                  <div className="grid grid-cols-2 gap-2">
                     {STUDENT_TOOLS.map((item) => {
                        const Icon = item.icon;
                        return (
                           <Link key={item.href} className="flex min-h-11 items-center gap-2 rounded-xl border border-border bg-white px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href={item.href} onClick={closeMobileMenu}>
                              <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
                              {item.label}
                           </Link>
                        );
                     })}
                  </div>
               </section>

               <section aria-labelledby="mobile-levels-title" className="mx-auto mt-4 max-w-7xl border-t border-border pt-4">
                  <h2 id="mobile-levels-title" className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Browse by level</h2>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                     {LEVELS.map((level) => (
                        <Link key={level.code} className="flex min-h-11 items-center justify-center rounded-xl border border-border bg-white px-3 py-3 text-sm font-bold text-primary transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" href={level.href} onClick={closeMobileMenu}>
                           {level.label}
                        </Link>
                     ))}
                  </div>
               </section>

               <a
                  className="mx-auto mt-4 flex min-h-11 max-w-7xl items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href={DEPARTMENT_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
               >
                  FUOYE department profile
                  <ArrowUpRight aria-hidden="true" className="size-4" />
               </a>
            </div>
         ) : null}
      </header>
   );
}
