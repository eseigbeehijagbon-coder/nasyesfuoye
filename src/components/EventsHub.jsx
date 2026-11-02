'use client';

import { useState } from 'react';
import {
   ArrowDown,
   ArrowUpRight,
   CalendarDays,
   Clock3,
   Lightbulb,
   MapPin,
   Search,
   TriangleAlert,
   Users,
} from 'lucide-react';
import { DEPARTMENT_PROFILE_URL } from '@/data/systems-engineering';
import {
   SAMPLE_CONTENT_NOTICE,
   STUDENT_EVENTS,
   STUDENT_OPPORTUNITIES,
} from '@/data/student-hub-content';

const EVENT_FILTERS = ['All', 'Academic', 'Community', 'Career', 'Workshop'];

export default function EventsHub() {
   const [activeFilter, setActiveFilter] = useState('All');
   const [searchTerm, setSearchTerm] = useState('');
   const normalizedSearch = searchTerm.trim().toLowerCase();
   const filteredEvents = STUDENT_EVENTS.filter((event) => {
      const matchesFilter = activeFilter === 'All' || event.category === activeFilter;
      const searchableText = `${event.title} ${event.category} ${event.audience} ${event.description}`.toLowerCase();
      return matchesFilter && searchableText.includes(normalizedSearch);
   });

   return (
      <main>
         <section className="bg-primary text-primary-foreground">
            <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-14 lg:px-8 lg:py-20">
               <div className="max-w-3xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                     <CalendarDays aria-hidden="true" className="size-4" />
                     Events &amp; opportunities
                  </p>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                     Make room for what matters.
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                     Find study circles, skills sessions, student forums, and practical ways to take part in campus life.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                     <a
                        href="#calendar"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                     >
                        Browse the calendar
                        <ArrowDown aria-hidden="true" className="size-4" />
                     </a>
                     <a
                        href="#opportunities"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                     >
                        Ways to get involved
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                     </a>
                  </div>
               </div>

               <aside className="rounded-3xl border border-white/15 bg-white/8 p-5 sm:p-6" aria-label="Sample calendar overview">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">A fuller student calendar</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{STUDENT_EVENTS.length}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">sample event ideas</p>
                     </div>
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{STUDENT_OPPORTUNITIES.length}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">ways to contribute</p>
                     </div>
                     <div className="rounded-2xl bg-white/10 p-3">
                        <p className="font-display text-2xl font-bold text-white">{EVENT_FILTERS.length - 1}</p>
                        <p className="mt-1 text-xs leading-5 text-white/70">event categories</p>
                     </div>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-white/60">Dates and venues in this preview are illustrative, not confirmed department announcements.</p>
               </aside>
            </div>
         </section>

         <section id="calendar" aria-labelledby="calendar-title" className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find your next activity</p>
                     <h2 id="calendar-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                        A calendar built around student life.
                     </h2>
                     <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        Browse ideas by interest, then check official channels for confirmed dates and venues.
                     </p>
                  </div>
                  <label className="relative block w-full lg:max-w-sm">
                     <span className="sr-only">Search sample events</span>
                     <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                     <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search events or topics"
                        className="min-h-12 w-full rounded-2xl border border-border bg-white pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                     />
                  </label>
               </div>

               <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
                  {EVENT_FILTERS.map((filter) => (
                     <button
                        key={filter}
                        type="button"
                        aria-pressed={activeFilter === filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`min-h-10 rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeFilter === filter
                           ? 'border-primary bg-primary text-white'
                           : 'border-border bg-white text-secondary-foreground hover:border-primary/35 hover:text-primary'
                        }`}
                     >
                        {filter === 'All' ? `All events (${STUDENT_EVENTS.length})` : filter}
                     </button>
                  ))}
               </div>

               {filteredEvents.length > 0 ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                     {filteredEvents.map((event) => (
                        <article key={event.id} className="flex min-h-80 flex-col rounded-3xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_42px_-30px_rgba(17,35,27,0.42)] sm:p-6">
                           <div className="flex items-start gap-4">
                              <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#edf2e9] text-primary">
                                 <span className="text-[10px] font-bold uppercase tracking-[0.12em]">{event.month}</span>
                                 <span className="font-display text-xl font-bold leading-6">{event.day}</span>
                              </div>
                              <div className="min-w-0 flex-1">
                                 <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-secondary-foreground">{event.category}</span>
                                    <span className="rounded-full border border-accent/70 bg-accent/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-primary">Sample</span>
                                 </div>
                                 <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">{event.title}</h3>
                              </div>
                           </div>

                           <p className="mt-4 text-sm leading-6 text-muted-foreground">{event.description}</p>

                           <dl className="mt-auto space-y-2 border-t border-border pt-4 text-xs font-medium text-muted-foreground">
                              <div className="flex items-center gap-2">
                                 <CalendarDays aria-hidden="true" className="size-4 shrink-0 text-primary" />
                                 <dt className="sr-only">Date</dt>
                                 <dd>{event.dateLabel}</dd>
                                 <Clock3 aria-hidden="true" className="ml-2 size-4 shrink-0 text-primary" />
                                 <dt className="sr-only">Time</dt>
                                 <dd>{event.time}</dd>
                              </div>
                              <div className="flex items-start gap-2">
                                 <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                                 <dt className="sr-only">Venue</dt>
                                 <dd>{event.venue}</dd>
                              </div>
                              <div className="flex items-start gap-2">
                                 <Users aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                                 <dt className="sr-only">Audience</dt>
                                 <dd>{event.audience}</dd>
                              </div>
                           </dl>
                           <p className="mt-4 rounded-2xl bg-background px-3.5 py-3 text-xs leading-5 text-secondary-foreground">
                              <span className="font-bold text-foreground">Bring:</span> {event.whatToBring}
                           </p>
                        </article>
                     ))}
                  </div>
               ) : (
                  <div className="mt-6 rounded-3xl border border-dashed border-border bg-white p-8 text-center">
                     <p className="font-display text-lg font-bold text-foreground">No matching events yet</p>
                     <p className="mt-2 text-sm leading-6 text-muted-foreground">Try another search or choose “All events” to see every sample listing.</p>
                     <button
                        type="button"
                        onClick={() => {
                           setActiveFilter('All');
                           setSearchTerm('');
                        }}
                        className="mt-4 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                     >
                        Show all events
                     </button>
                  </div>
               )}
            </div>
         </section>

         <section id="opportunities" aria-labelledby="opportunities-title" className="scroll-mt-20 border-y border-border bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Small steps, real momentum</p>
                  <h2 id="opportunities-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                     Ways to make student life better.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                     You do not need a title to contribute. Start with a useful idea, a study group, or a project you care about.
                  </p>
               </div>

               <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {STUDENT_OPPORTUNITIES.map((opportunity) => (
                     <article key={opportunity.id} className="flex min-h-56 flex-col rounded-3xl border border-border bg-background p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3">
                           <span className="flex size-10 items-center justify-center rounded-xl bg-white text-primary">
                              <Lightbulb aria-hidden="true" className="size-5" />
                           </span>
                           <span className="rounded-full border border-border bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Sample idea</span>
                        </div>
                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{opportunity.type} · {opportunity.audience}</p>
                        <h3 className="mt-2 font-display text-lg font-bold text-foreground">{opportunity.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{opportunity.description}</p>
                        <p className="mt-auto border-t border-border pt-4 text-xs leading-5 text-secondary-foreground">
                           <span className="font-bold text-foreground">First step:</span> {opportunity.firstStep}
                        </p>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section aria-label="Important event information" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl border border-primary/15 bg-[#edf2e9] p-5 sm:flex-row sm:items-start sm:p-6">
               <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
               <div>
                  <h2 className="font-display text-base font-bold text-foreground">Please confirm before making plans.</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{SAMPLE_CONTENT_NOTICE}</p>
                  <a
                     href={DEPARTMENT_PROFILE_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                     Visit the official department profile
                     <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
               </div>
            </div>
         </section>
      </main>
   );
}
