"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const eventDetails = {
  university: "Karatina University",
  title: "Geniuslab Hackathon 2026",
  theme: "Minds Behind the Machine. The Shield Behind the Code.",
  dates: "March 26-27, 2026",
  time: "8:00 AM - 5:00 PM",
  venue: "LRM 2, Mwai Kibaki Library",
};

const heroSlides = [
  "Build, defend, and reimagine the future of tech.",
  "Collaborate with mentors and industry innovators.",
  "Prototype bold solutions for real-world impact.",
];

const heroImages = [
  "/group-young-african-people-hanging-out-outdoor-cafe_181624-45932.jpg",
  "/instructor-teaches-computer-science-diverse-students-with-programming-code-slides-concept-computer-science-programming-instruction-diverse-students-instructorstudent-interaction-code-slides_918839-374880.jpg",
  "/group-students-studying-together_53876-70073.jpg",
];

const orderOfEvents = [
  {
    title: "Registration and welcome",
    description: "Check-in, badges, and opening remarks.",
  },
  {
    title: "Bootcamp tracks",
    description: "Hands-on sessions in AI, cybersecurity, and IoT.",
  },
  {
    title: "Team formation",
    description: "Problem statement briefing and team setup.",
  },
  {
    title: "Build sprint",
    description: "Mentored ideation, prototyping, and coding.",
  },
  {
    title: "Project demos",
    description: "Presentations, judging, and feedback.",
  },
  {
    title: "Awards and closing",
    description: "Celebration, thanks, and next steps.",
  },
];

const dayOneSchedule = [
  {
    time: "8:00 - 9:00 AM",
    activity: "Arrival and registration",
    lead: "Organizing committee",
  },
  {
    time: "9:00 - 9:10 AM",
    activity: "Opening prayer",
    lead: "Organizing committee",
  },
  {
    time: "9:10 - 9:45 AM",
    activity: "Opening session and welcome remarks",
    lead: "HoD Computing, HoD Informatics & Innovation, Dean SCI, University management",
  },
  {
    time: "9:45 - 10:00 AM",
    activity: "Hackathon overview and introductions",
    lead: "Organizing committee",
  },
  {
    time: "10:00 - 10:30 AM",
    activity: "Keynote: Innovation, industry trends and emerging technologies",
    lead: "Lead industry speaker / guest of honor",
  },
  {
    time: "10:30 - 11:00 AM",
    activity: "Health break",
    lead: "N/A",
  },
  {
    time: "11:00 AM - 1:00 PM",
    activity:
      "Technical bootcamp sessions on AI, cybersecurity, IoT, software development and tools",
    lead: "Industry experts and partner organizations",
  },
  {
    time: "1:00 - 2:00 PM",
    activity: "Health break",
    lead: "N/A",
  },
  {
    time: "2:00 - 2:30 PM",
    activity: "Problem statement presentation, clarifications and team formation",
    lead: "Judging panel",
  },
  {
    time: "2:30 - 3:00 PM",
    activity: "Hackathon kickoff: ideation, design thinking and mentorship",
    lead: "Mentors and technical coaches",
  },
  {
    time: "3:00 - 5:00 PM",
    activity: "Project development and coding sprint",
    lead: "Participant teams",
  },
];

const dayTwoSchedule = [
  {
    time: "8:00 - 8:30 AM",
    activity: "Arrival and registration",
    lead: "Organizing committee",
  },
  {
    time: "8:30 - 9:00 AM",
    activity: "Judges panel brief",
    lead: "Judging panel",
  },
  {
    time: "9:00 - 10:00 AM",
    activity: "Final development, testing and prototype completion",
    lead: "Participant teams",
  },
  {
    time: "10:00 - 10:30 AM",
    activity: "Health break",
    lead: "N/A",
  },
  {
    time: "10:30 AM - 2:00 PM",
    activity: "Project presentations, demonstrations and evaluation",
    lead: "Judging panel",
  },
  {
    time: "2:00 - 3:00 PM",
    activity: "Health break",
    lead: "N/A",
  },
  {
    time: "3:00 - 3:30 PM",
    activity: "Judging panel deliberation",
    lead: "Judging panel",
  },
  {
    time: "3:30 - 4:30 PM",
    activity: "Awards ceremony and closing remarks",
    lead: "Judging panel, chief guest, university management, lead sponsor",
  },
  {
    time: "4:30 - 5:00 PM",
    activity: "Vote of thanks and closing prayer",
    lead: "Organizing committee",
  },
];

const highlightItems = [
  { label: "Dates", value: eventDetails.dates, icon: Calendar },
  { label: "Time", value: eventDetails.time, icon: Clock },
  {
    label: "Venue",
    value: eventDetails.venue,
    icon: MapPin,
    imageSrc: "/JIM_5182-1500x1000-100x50.jpg",
    imageAlt: "Mwai Kibaki Library venue",
  },
];

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const motionItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
    <section className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
      <header className="mb-6 border-b border-emerald-100 pb-4">
        <h3 className="text-xl font-semibold text-[#0d3b2a]">{title}</h3>
        <p className="mt-1 text-sm text-emerald-700/80">{subtitle}</p>
      </header>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={`${title}-${item.time}-${item.activity}`}
            className="grid gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 sm:grid-cols-[170px_1fr]"
          >
            <p className="text-sm font-semibold text-emerald-700">{item.time}</p>
            <div>
              <p className="text-sm font-medium text-[#0a2e1d]">
                {item.activity}
              </p>
              <p className="mt-1 text-sm text-emerald-700/80">{item.lead}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const slideCount = heroSlides.length;
  const imageCount = heroImages.length;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 3600);

    return () => clearInterval(interval);
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % imageCount);
    }, 2200);

    return () => clearInterval(interval);
  }, [imageCount]);

  const currentSlide = useMemo(
    () => heroSlides[activeSlide],
    [activeSlide]
  );

  const currentImage = useMemo(
    () => heroImages[activeImage],
    [activeImage]
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f7f4] text-[#0a2e1d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(46,192,113,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute -top-28 right-[-8%] h-[320px] w-[320px] rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-10%] h-[360px] w-[360px] rounded-full bg-amber-200/60 blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
        <header className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:rounded-full sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 bg-white/90 p-1 shadow-sm sm:h-10 sm:w-10">
              <Image
                src="/karu2.png"
                alt="Karatina University logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700/70 sm:text-xs sm:tracking-[0.3em]">
                Geniuslab
              </p>
              <p className="text-sm font-semibold text-[#0d3b2a]">
                Hackathon 2026
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-800/80 sm:gap-6 sm:text-sm">
            <a className="transition hover:text-emerald-700" href="#schedule">
              Schedule
            </a>
            <a className="transition hover:text-emerald-700" href="#poster">
              Poster
            </a>
            <a className="transition hover:text-emerald-700" href="#about">
              About
            </a>
            <a className="transition hover:text-emerald-700" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <motion.section
          variants={motionContainer}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="flex flex-col gap-6">
            <motion.div variants={motionItem} className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700/70 sm:text-sm sm:tracking-[0.3em]">
                {eventDetails.title}
              </p>
              <h1 className="font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[#0d3b2a] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
                <span className="flow-text">
                  Build, defend, and reimagine the future of tech.
                </span>
              </h1>
              <div className="h-8 text-base text-emerald-800/80 sm:text-lg">
                {isMounted ? (
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentSlide}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      aria-live="polite"
                    >
                      {currentSlide}
                    </motion.p>
                  </AnimatePresence>
                ) : (
                  <p>{heroSlides[0]}</p>
                )}
              </div>
              <p className="max-w-xl text-base text-emerald-800/80 sm:text-lg">
                {eventDetails.theme}
              </p>
            </motion.div>

            <motion.div
              variants={motionItem}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 sm:w-auto"
                href="#schedule"
              >
                View full program <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800 sm:w-auto"
                href="#poster"
              >
                View poster details
              </a>
            </motion.div>

            <motion.div
              variants={motionItem}
              className="grid gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {highlightItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-100 bg-white/90 p-3 shadow-sm sm:p-4"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-700/70">
                    <item.icon className="h-4 w-4 text-emerald-500" />
                    {item.label}
                  </div>
                  <p className="mt-2 text-base font-semibold text-[#0a2e1d]">
                    {item.value}
                  </p>
                  {item.imageSrc ? (
                    <div className="mt-3 overflow-hidden rounded-xl border border-emerald-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? "Venue"}
                        width={320}
                        height={200}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={motionItem} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-200/40">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b2a]/70 via-transparent to-transparent" />
              <div className="relative h-[420px] w-full [perspective:1200px]">
                {isMounted ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, rotateY: -80, x: -40 }}
                      animate={{ opacity: 1, rotateY: 0, x: 0 }}
                      exit={{ opacity: 0, rotateY: 80, x: 40 }}
                      transition={{ duration: 0.55, ease: "easeInOut" }}
                      className="absolute inset-0 origin-left [transform-style:preserve-3d]"
                    >
                      <Image
                        src={currentImage}
                        alt="Hackathon inspiration"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-black/30 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0">
                    <Image
                      src={heroImages[0]}
                      alt="Hackathon inspiration"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-black/30 to-transparent" />
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Replace with your Unsplash image
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Inspired by innovation, grounded in community.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          variants={motionItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-sm"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                Order of events
              </p>
              <h2 className="font-[var(--font-display)] mt-3 text-3xl font-semibold text-[#0d3b2a]">
                A clear flow from kickoff to awards.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-emerald-800/80">
              Designed for momentum: orientation, practical bootcamps, mentor
              guidance, and showcase-ready demos.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderOfEvents.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                  Step {index + 1}
                </span>
                <p className="text-base font-semibold text-[#0a2e1d]">
                  {item.title}
                </p>
                <p className="text-sm text-emerald-800/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          id="poster"
          variants={motionItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
              Official poster
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#0d3b2a]">
              Visual identity inspired by Karatina University.
            </h2>
            <p className="text-base text-emerald-800/80">
              The poster sets the tone for the hackathon. The green and gold
              palette, clean geometric layouts, and bold tech imagery guide this
              landing page design.
            </p>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-5">
              <p className="text-sm font-semibold text-[#0a2e1d]">
                Featured elements
              </p>
              <ul className="mt-3 space-y-2 text-sm text-emerald-800/80">
                <li>Forward-looking AI and cybersecurity visuals</li>
                <li>Emerald gradients with gold accents</li>
                <li>Bold typography and clean spacing</li>
              </ul>
            </div>
            <a
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0d3b2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4a33]"
              href="#poster"
            >
              View poster details <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-200/40">
              <Image
                src="/karatina-hackathon-poster.jpg"
                alt="Karatina University Geniuslab Hackathon poster"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="schedule"
          variants={motionItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
              Event schedule
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#0d3b2a]">
              Program at a glance
            </h2>
            <p className="max-w-2xl text-base text-emerald-800/80">
              Two focused days of orientation, practical bootcamp tracks, guided
              building, presentations, and final awards.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <DaySchedule
              title="Day 1 - Thursday, March 26, 2026"
              subtitle="Bootcamp, orientation and problem definition"
              items={dayOneSchedule}
            />
            <DaySchedule
              title="Day 2 - Friday, March 27, 2026"
              subtitle="Hackathon development, presentations and awards"
              items={dayTwoSchedule}
            />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={motionItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 p-10 text-white shadow-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
                Ready to join?
              </p>
              <h2 className="font-[var(--font-display)] mt-3 text-3xl font-semibold">
                Bring your ideas to the Geniuslab Hackathon.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-emerald-50/90">
                Connect with mentors, build real-world solutions, and showcase
                your innovations to industry leaders and university partners.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              href="mailto:geniuslab@karu.ac.ke"
            >
              Contact the organizers <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.section>

        <footer className="flex flex-col items-center gap-2 border-t border-emerald-100 pt-8 text-center text-sm text-emerald-800/80">
          <p className="font-semibold text-[#0d3b2a]">
            Geniuslab Hackathon 2026 - Karatina University
          </p>
          <p>Developed by Steve &amp; Oscar</p>
        </footer>
      </main>
    </div>
  );
}
