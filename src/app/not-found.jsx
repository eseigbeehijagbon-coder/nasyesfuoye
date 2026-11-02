import Link from 'next/link';
import { ArrowUpRight, Network } from 'lucide-react';

export default function NotFound() {
   return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
         <div className="flex size-20 items-center justify-center rounded-[1.75rem] bg-primary text-accent shadow-lg shadow-primary/10">
            <Network aria-hidden="true" className="size-9" />
         </div>
         <p className="mt-7 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            404 · Page not found
         </p>
         <h1 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
            This page is outside the system.
         </h1>
         <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            The link may be outdated, or this level resource has not been published here yet.
         </p>
         <div className="mt-7 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
               className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
               href="/"
            >
               Return home
            </Link>
            <Link
               className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
               href="/academics"
            >
               Browse levels
               <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
         </div>
      </main>
   );
}
