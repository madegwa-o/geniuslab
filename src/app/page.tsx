const eventDetails = {
  university: "Karatina University",
  title: "Geniuslab Hackathon 2026",
  theme: "Minds Behind the Machine. The Shield Behind the Code.",
  dates: "March 26–27, 2026",
  time: "8:00 AM – 5:00 PM",
  venue: "LRM 2, Mwai Kibaki Library",
};

const dayOneSchedule = [
  {
    time: "8:00 – 9:00 AM",
    activity: "Arrival and registration",
    lead: "Organizing committee",
  },
  {
    time: "9:00 – 9:10 AM",
    activity: "Opening prayer",
    lead: "Organizing committee",
  },
  {
    time: "9:10 – 9:45 AM",
    activity: "Opening session and welcome remarks",
    lead: "HoD Computing, HoD Informatics & Innovation, Dean SCI, University management",
  },
  {
    time: "9:45 – 10:00 AM",
    activity: "Hackathon overview and introductions",
    lead: "Organizing committee",
  },
  {
    time: "10:00 – 10:30 AM",
    activity: "Keynote: Innovation, industry trends and emerging technologies",
    lead: "Lead industry speaker / guest of honor",
  },
  {
    time: "10:30 – 11:00 AM",
    activity: "Health break",
    lead: "—",
  },
  {
    time: "11:00 AM – 1:00 PM",
    activity:
      "Technical bootcamp sessions on AI, cybersecurity, IoT, software development and tools",
    lead: "Industry experts and partner organizations",
  },
  {
    time: "1:00 – 2:00 PM",
    activity: "Health break",
    lead: "—",
  },
  {
    time: "2:00 – 2:30 PM",
    activity: "Problem statement presentation, clarifications and team formation",
    lead: "Judging panel",
  },
  {
    time: "2:30 – 3:00 PM",
    activity: "Hackathon kickoff: ideation, design thinking and mentorship",
    lead: "Mentors and technical coaches",
  },
  {
    time: "3:00 – 5:00 PM",
    activity: "Project development and coding sprint",
    lead: "Participant teams",
  },
];

const dayTwoSchedule = [
  {
    time: "8:00 – 8:30 AM",
    activity: "Arrival and registration",
    lead: "Organizing committee",
  },
  {
    time: "8:30 – 9:00 AM",
    activity: "Judges panel brief",
    lead: "Judging panel",
  },
  {
    time: "9:00 – 10:00 AM",
    activity: "Final development, testing and prototype completion",
    lead: "Participant teams",
  },
  {
    time: "10:00 – 10:30 AM",
    activity: "Health break",
    lead: "—",
  },
  {
    time: "10:30 AM – 2:00 PM",
    activity: "Project presentations, demonstrations and evaluation",
    lead: "Judging panel",
  },
  {
    time: "2:00 – 3:00 PM",
    activity: "Health break",
    lead: "—",
  },
  {
    time: "3:00 – 3:30 PM",
    activity: "Judging panel deliberation",
    lead: "Judging panel",
  },
  {
    time: "3:30 – 4:30 PM",
    activity: "Awards ceremony and closing remarks",
    lead: "Judging panel, chief guest, university management, lead sponsor",
  },
  {
    time: "4:30 – 5:00 PM",
    activity: "Vote of thanks and closing prayer",
    lead: "Organizing committee",
  },
];

type ScheduleItem = {
  time: string;
  activity: string;
  lead: string;
};

function DaySchedule({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ScheduleItem[];
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-6 border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </header>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={`${title}-${item.time}-${item.activity}`}
            className="grid gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:grid-cols-[170px_1fr] dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{item.time}</p>
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.activity}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.lead}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 sm:px-10 lg:px-16">
        <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-8 text-white sm:px-10 sm:py-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">{eventDetails.university}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{eventDetails.title}</h1>
            <p className="mt-4 max-w-2xl text-base text-emerald-50 sm:text-lg">{eventDetails.theme}</p>
          </div>

          <div className="grid gap-4 px-6 py-8 sm:grid-cols-3 sm:px-10 sm:py-10">
            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Date</p>
              <p className="mt-1 text-base font-semibold">{eventDetails.dates}</p>
            </div>
            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Time</p>
              <p className="mt-1 text-base font-semibold">{eventDetails.time}</p>
            </div>
            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Venue</p>
              <p className="mt-1 text-base font-semibold">{eventDetails.venue}</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Event Schedule</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Program at a glance</h2>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            Two focused days of orientation, practical bootcamp tracks, guided building, presentations, and final awards.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <DaySchedule
            title="Day 1 — Thursday, March 26, 2026"
            subtitle="Bootcamp, orientation and problem definition"
            items={dayOneSchedule}
          />
          <DaySchedule
            title="Day 2 — Friday, March 27, 2026"
            subtitle="Hackathon development, presentations and awards"
            items={dayTwoSchedule}
          />
        </section>
      </main>
    </div>
  );
}
