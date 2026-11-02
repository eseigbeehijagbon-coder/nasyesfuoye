import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { DEPARTMENT_PROFILE_URL } from '@/data/systems-engineering';

export default function HomeHero() {
   return (
      <section aria-labelledby="home-hero-title" className="border-b border-border bg-[#f3f5ee]">
         <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
               <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  FUOYE · Systems Engineering
               </p>
               <h1 id="home-hero-title" className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                  See the whole system.
                  <span className="mt-1 block text-primary">Shape what comes next.</span>
               </h1>
               <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  A mobile-first academic hub for FUOYE Systems Engineering students. Find your level&apos;s workspace for course information, study resources, announcements, and schedules—with unpublished details clearly marked.
               </p>
               <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                     className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                     href="/academics"
                  >
                     Choose your level
                     <ArrowDown aria-hidden="true" className="size-4" />
                  </Link>
                  <a
                     className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                     href={DEPARTMENT_PROFILE_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Department profile
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
               </div>
               <p className="mt-5 inline-flex items-start gap-2 text-xs font-medium leading-5 text-muted-foreground">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  Verified programme information only. Missing records are never filled with guesses.
               </p>
            </div>

            <figure className="overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-[0_24px_80px_-48px_rgba(17,35,27,0.42)]">
               <div className="relative aspect-[4/3]">
                  <Image
                     src="/systems-engineering-hero.png"
                     alt="Illustrative engineering model with interconnected transport, infrastructure, and process pathways"
                     fill
                     priority
                     sizes="(max-width: 1023px) 100vw, 48vw"
                     className="object-cover"
                  />
               </div>
               <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:px-5">
                  <span>Illustrative systems model</span>
                  <span>Systems thinking, made visible</span>
               </figcaption>
            </figure>
         </div>
      </section>
   );
}
