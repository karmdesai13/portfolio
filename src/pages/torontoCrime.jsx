'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Layers, Route, Gauge, Video, Github, ExternalLink, Rocket } from 'lucide-react'
import 'tailwindcss/tailwind.css'



export default function AICourse() {
  const [open, setOpen] = useState(false)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(34,197,94,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

     
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span initial={{ rotate: -15, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Brain className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">AI COURSE SCHEDULER</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/karmdesai13/AI-course-Scheduler.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Github className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
          </Link>
          <Link
            href="/#projects"
            className="rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            Back
          </Link>
        </div>
      </header>

      
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-2 md:pt:10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
          >
            AI Course Scheduler
          </motion.h1>

          
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[{ Icon: Layers, label: 'Graph Algorithms' }, { Icon: Route, label: 'A* Search' }, { Icon: Gauge, label: 'Term Assignment' }, { Icon: Video, label: 'Demo Video' }].map(({ Icon, label }) => (
              <motion.span key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </div>

          
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 120, damping: 14 }}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur-lg"
          >
            <Rocket className="h-4 w-4" />
            Watch the demo and explore the repository.
            <button onClick={() => setOpen(true)} className="rounded-xl bg-white/10 px-3 py-1 font-semibold hover:bg-white/20">Play Video</button>
            <Link href="https://github.com/karmdesai13/AI-course-Scheduler.git" target="_blank" className="rounded-xl bg-white/10 px-3 py-1 font-semibold hover:bg-white/20">Open GitHub</Link>
          </motion.div>
        </div>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2 backdrop-blur">
            <video
              controls
              src="/CourseScheduler/AIProject.mp4"
              className="aspect-video w-full rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl"
            >
              <video
                controls
                autoPlay
                src="/CourseScheduler/AIProject.mp4"
                className="aspect-video w-full rounded-xl"
              />
              <div className="mt-3 text-right">
                <button onClick={() => setOpen(false)} className="rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Overview</h2>
        <article className="prose prose-invert mx-auto max-w-4xl text-white/90">
          <p>
            Introducing my Interactive Course Scheduler. This advanced desktop application, built with Python and PyQt5, simplifies complex academic planning. It helps students and advisors efficiently manage course prerequisites and generate optimized study schedules.
          </p>
          <p className="mt-4">
            The application uses advanced graph algorithms to model and analyze course dependencies. It intelligently detects cycles within prerequisites, preventing impossible study paths.
          </p>
          <p className="mt-4">
            A core feature is its implementation of the A star search algorithm. This allows users to find the optimal prerequisite chain to a desired course, considering an estimated work hour cost for each.
          </p>
          <p className="mt-4">
            It also incorporates sophisticated logic for assigning courses to terms. This respects constraints like maximum courses per term, elective limits, and balances workload based on course difficulty levels.
          </p>
          <p className="mt-4">
            This project showcases blending complex algorithmic solutions with an intuitive user experience. It allows users to add courses, simulate schedules, generate reports, and save or load academic plans.
          </p>
        </article>
      </section>

     
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Stack And Visit the Project</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['Python', 'PyQt5', 'Graph Algorithms', 'A* Search', 'Term Assignment', 'Desktop App'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="https://github.com/karmdesai13/AI-course-Scheduler.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-fuchsia-600 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Github className="h-5 w-5" />
            Visit the Repository
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </section>

      
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">
        © 2025 AICourse Scheduler. All rights reserved.
      </footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
        .prose :where(code, pre){ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      `}</style>
    </main>
  )
}
