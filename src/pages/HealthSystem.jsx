'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, Activity, User, Users, ClipboardList, DollarSign, ExternalLink, Github } from 'lucide-react'
import 'tailwindcss/tailwind.css'



export default function Health() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
     
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(34,197,94,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

      
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span initial={{ rotate: -10, scale: 0.7 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Terminal className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">HEALTH SYSTEM · PYTHON CONSOLE</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/karmdesai13/HealthSystem.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
          </Link>
          <Link href="/#projects" className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">Back</Link>
        </div>
      </header>

      
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-8 md:pt-10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Health System
          </motion.h1>
          <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            A Health System Made With Python
          </motion.p>

         
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[{ Icon: Activity, label: 'Python' }, { Icon: Terminal, label: 'Console Interface' }, { Icon: User, label: 'Doctor Management' }, { Icon: Users, label: 'Patient Management' }, { Icon: ClipboardList, label: 'Facility Management' }, { Icon: DollarSign, label: 'Costs Display' }].map(({ Icon, label }) => (
              <motion.span key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Design and Development Insights</h2>
        <article className="prose prose-invert mx-auto max-w-4xl text-white/90">
          <p>
            Our Health Management System is constructed with precision in Python, and operated through a console interface that emphasizes functionality and ease of use.
          </p>
          <p className="mt-4">
            Upon accessing the doctor management feature, users can effortlessly search for doctors by name or ID, displaying a depth of information with minimal input. The addition of new doctors is streamlined, reflecting the sophistication of the system&apos;s backend logic crafted in Python.
          </p>
          <p className="mt-4">
            Patients are treated with the same level of finesse, where their information can be browsed, accessed, and managed with straightforward commands. Adding a new patient is as simple as filling in the details, which the system processes and stores with robust Python programming acumen.
          </p>
          <p className="mt-4">
            The facility management component unfolds a catalog of services, each with associated costs, presented in a clear and concise format. This functionality not only showcases the available healthcare amenities but also demonstrates the system&apos;s capability to handle financial aspects with ease.
          </p>
          <p className="mt-4">
            Adding a new facility is a demonstration of the system&apos;s flexible data architecture, which allows for seamless integration of new services and cost structures. This aspect highlights the adaptable and scalable nature of the Python code at the heart of the system.
          </p>
          <p className="mt-4">
            Dive into our Health Management System, where Python&apos;s powerful scripting capabilities meet the no-nonsense efficiency of a console application. It is not just a tool; it&apos;s a comprehensive solution that epitomizes our dedication to making healthcare management accessible, intuitive, and reliable for users of all levels.
          </p>
        </article>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Stack And Visit the Project</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['Python', 'Console Application'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <Link href="https://github.com/karmdesai13/HealthSystem.git" target="_blank" className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-blue-600 to-emerald-600 px-5 py-3 font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">
            <Github className="h-5 w-5" />
            Visit the Repository
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </Link>
          <Link href="/#projects" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">
            Back
          </Link>
        </div>
      </section>

      
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">© 2025 HealthSystem. All rights reserved.</footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
        .prose :where(code, pre){ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      `}</style>
    </main>
  )
}
