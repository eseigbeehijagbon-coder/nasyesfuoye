'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL, LEVELS } from '@/data/systems-engineering';

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

            <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
               <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" href="/#programme">
                  Programme
               </Link>
               <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" href="/academics">
                  Academics
               </Link>
               <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" href="/events">
                  Events
               </Link>
               <Link className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" href="/governance">
                  Student politics
               </Link>
            </nav>

            <Link
               className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 xl:inline-flex"
               href="/academics#study-library"
            >
               Browse materials
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
            <div id="mobile-navigation" className="border-t border-border bg-background px-4 pb-5 pt-4 xl:hidden">
               <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1">
                  <Link
                     className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                     href="/#programme"
                     onClick={closeMobileMenu}
                  >
                     Programme overview
                  </Link>
                  <Link
                     className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                     href="/academics"
                     onClick={closeMobileMenu}
                  >
                     Academic materials
                  </Link>
                  <Link
                     className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                     href="/events"
                     onClick={closeMobileMenu}
                  >
                     Events &amp; opportunities
                  </Link>
                  <Link
                     className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                     href="/governance"
                     onClick={closeMobileMenu}
                  >
                     Student politics
                  </Link>
                  <a
                     className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                     href={DEPARTMENT_PROFILE_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={closeMobileMenu}
                  >
                     FUOYE department profile
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
               </nav>

               <div className="mx-auto mt-4 grid max-w-7xl grid-cols-3 gap-2 border-t border-border pt-4">
                  {LEVELS.map((level) => (
                     <Link
                        key={level.code}
                        className="rounded-xl border border-border bg-white px-3 py-3 text-center text-sm font-bold text-primary transition-colors hover:border-primary/40 hover:bg-secondary"
                        href={level.href}
                        onClick={closeMobileMenu}
                     >
                        {level.label}
                     </Link>
                  ))}
               </div>
            </div>
         ) : null}
      </header>
   );
}
