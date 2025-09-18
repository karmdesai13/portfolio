'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Users,
  CalendarDays,
  Database,
  ShieldCheck,
  LayoutDashboard,
  Sparkles,
  Github,
  ExternalLink
} from 'lucide-react'
import 'tailwindcss/tailwind.css'

// LEARNOCITY — Futuristic LMS Showcase (JavaScript)
// Deps: npm i framer-motion lucide-react

export default function LearnOCity() {
  const shots = [
    { src: '/LearnOCity/HomePage.png', alt: 'Home Page', caption: 'Home · On‑ramps to Learning' },
    { src: '/LearnOCity/CourseInfo.png', alt: 'Course Info', caption: 'Course Info · Deep Details' },
    { src: '/LearnOCity/InstructorCourse.png', alt: 'Instructor Course', caption: 'Instructor · Course List' },
    { src: '/LearnOCity/InstructorPage.png', alt: 'Instructor Page', caption: 'Instructor Dashboard' },
    { src: '/LearnOCity/StudentPage.png', alt: 'Student Page', caption: 'Student Dashboard' },
    { src: '/LearnOCity/Course.png', alt: 'Course Page', caption: 'Catalog & Enrollment' }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      {/* Aurora gradient + subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(34,197,94,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(236,72,153,0.16),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]"
      />

      {/* NAV */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span
            initial={{ rotate: -15, scale: 0.6 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15"
          >
            <BookOpen className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">LEARNOCITY · LMS</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/karmdesai13/LearnOCity.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            <Github className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
          </Link>
          <Link
            href="/#projects"
            className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            Back
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-8 md:pt-10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
          >
            LearnOCity — Learning Management System
          </motion.h1>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            Role‑based dashboards, rich course pages, and a responsive, accessible UI powered by a robust C# backend and MariaDB.
          </motion.p>

          {/* Feature chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { Icon: GraduationCap, label: 'Student/Instructor Roles' },
              { Icon: LayoutDashboard, label: 'Dashboards' },
              { Icon: CalendarDays, label: 'Schedules' },
              { Icon: Database, label: 'MariaDB + SQL' },
              { Icon: ShieldCheck, label: 'OOP C#' }
            ].map(({ Icon, label }) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md"
              >
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h2 className="mb-5 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Screens</h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-white/70">Click any screen to open a lightbox.</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 text-left backdrop-blur transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  priority={i < 2}
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <Sparkles className="h-4 w-4" />
                <span>{s.caption}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
            >
              <motion.div
                layout
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={shots[lightboxIndex].src}
                    alt={shots[lightboxIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2 text-white/90">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="text-sm">{shots[lightboxIndex].caption}</span>
                  </div>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* INSIGHTS */}
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Design & Development Insights</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<LayoutDashboard className="h-5 w-5" />} title="Dashboards" desc="Role‑aware views for students & instructors keep focus clear and actions close." />
          <FeatureCard icon={<CalendarDays className="h-5 w-5" />} title="Scheduling" desc="Personalized timetables render responsively with at‑a‑glance readability." />
          <FeatureCard icon={<Database className="h-5 w-5" />} title="Data Layer" desc="MariaDB schema + optimized SQL (HeidiSQL) deliver snappy queries." />
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="C# Backend" desc="OOP design patterns power secure, maintainable business logic." />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85">
          <p className="text-balance text-lg">
            Built to make learning feel intuitive and fast: rich content, instant feedback, and accessibility baked in.
          </p>
        </div>
      </section>

      {/* STACK + LINKS */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Stack & Repository</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['C# Backend', 'MariaDB', 'HeidiSQL', 'React', 'Tailwind CSS', 'Design for Accessibility'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="https://github.com/karmdesai13/LearnOCity.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-600 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            <Github className="h-5 w-5" />
            Visit the Repository
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">
        © 2025 LearnOCity. All rights reserved.
      </footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
      `}</style>
    </main>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500/15 to-blue-500/10" />
      <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-white/10 p-2 ring-1 ring-white/15">{icon}</div>
      <h3 className="text-lg font-semibold text-white/95">{title}</h3>
      <p className="mt-1.5 text-sm text-white/75">{desc}</p>
    </motion.div>
  )
}
