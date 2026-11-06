import Link from 'next/link';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

export default function DepartmentUpdatesSection() {
   return (
      <section aria-labelledby="department-updates-title" className="px-4 py-10 sm:px-6 lg:px-8">
         <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 rounded-3xl border border-primary/10 bg-[#e8eee5] p-5 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-7 lg:p-8">
               <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary">
                  <FileText aria-hidden="true" className="size-5" />
               </span>
               <div>
                  <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                     <ShieldCheck aria-hidden="true" className="size-3.5" />
                     Published notices and announcements
                  </p>
                  <h2 id="department-updates-title" className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                     Department news, from the live memo board.
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                     Check published updates, announcements, and student notices in one searchable place. The memo board is the source for current posts; this page does not invent or duplicate them.
                  </p>
               </div>
               <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" href="/memos">
                  Open memo board <ArrowRight aria-hidden="true" className="size-4" />
               </Link>
            </div>
         </div>
      </section>
   );
}
