'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Map, Database, Filter, Github, ExternalLink, Rocket, ShieldAlert, Maximize2 } from 'lucide-react'

export default function CrimeDashboard() {
  const [open, setOpen] = useState(false)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(220,38,38,0.15),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(59,130,246,0.15),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(234,179,8,0.10),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

      
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span 
            initial={{ rotate: -15, scale: 0.6 }} 
            animate={{ rotate: 0, scale: 1 }} 
            transition={{ type: 'spring', stiffness: 220, damping: 16 }} 
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15"
          >
            <ShieldAlert className="h-5 w-5 text-red-400" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">DATA ANALYTICS PORTFOLIO</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/yourusername/crime-dashboard-repo" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            <Github className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
          </a>
          <a
            href="/#projects"
            className="rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            Back
          </a>
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
            Toronto Crime Analytics
          </motion.h1>

          
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { Icon: BarChart3, label: 'Power BI' }, 
              { Icon: Database, label: 'DAX Measures' }, 
              { Icon: Map, label: 'Geospatial Mapping' }, 
              { Icon: Filter, label: 'Dynamic Filtering' }
            ].map(({ Icon, label }) => (
              <motion.span 
                key={label} 
                initial={{ opacity: 0, y: 8 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4 }} 
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md"
              >
                <Icon className="h-4 w-4 text-blue-300" /> {label}
              </motion.span>
            ))}
          </div>

          
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 120, damping: 14 }}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur-lg"
          >
            <Rocket className="h-4 w-4 text-yellow-400" />
            Interact with the live dashboard below.
            <button onClick={() => setOpen(true)} className="rounded-xl bg-white/10 px-3 py-1 font-semibold hover:bg-white/20 transition flex items-center gap-2">
              <Maximize2 className="h-4 w-4" /> Open Fullscreen
            </button>
            <a href="https://github.com/yourusername/crime-dashboard-repo" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/10 px-3 py-1 font-semibold hover:bg-white/20 transition">Open Repo</a>
          </motion.div>
        </div>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2 backdrop-blur hover:border-white/30 transition duration-500 shadow-2xl shadow-blue-900/10">
            <div className="aspect-video w-full rounded-xl bg-gray-900 overflow-hidden relative">
               <iframe 
                title="Crime Stats" 
                width="100%" 
                height="100%" 
                src="https://app.powerbi.com/view?r=eyJrIjoiODI5YjgxZDgtMTg5NC00NjNhLWJiZDktMjdlNTA2NGZmMzhhIiwidCI6IjhjZDM2MGMyLTA2OGItNGUzNi04ZGI1LTI3YjM1NzkyZjUzZiIsImMiOjZ9" 
                frameBorder="0" 
                allowFullScreen={true}
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-[90vw] h-[85vh] overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-1 backdrop-blur-xl flex flex-col"
            >
              <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-900">
                <iframe 
                  title="Crime Stats Fullscreen" 
                  width="100%" 
                  height="100%" 
                  src="https://app.powerbi.com/view?r=eyJrIjoiODI5YjgxZDgtMTg5NC00NjNhLWJiZDktMjdlNTA2NGZmMzhhIiwidCI6IjhjZDM2MGMyLTA2OGItNGUzNi04ZGI1LTI3YjM1NzkyZjUzZiIsImMiOjZ9" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  className="absolute inset-0"
                />
              </div>
              <div className="mt-2 text-right px-2 pb-1">
                <button onClick={() => setOpen(false)} className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition">Close Preview</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical Overview */}
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Overview</h2>
        <article className="prose prose-invert mx-auto max-w-4xl text-white/90">
          <p>
            This project is a comprehensive <strong>Power BI Dashboard</strong> designed to analyze over 10 years of Toronto Major Crime Indicators (MCI) data. It transforms raw datasets into actionable insights, helping stakeholders visualize trends in public safety.
          </p>
          <p className="mt-4">
            The core of the analysis relies on advanced <strong>DAX (Data Analysis Expressions)</strong> to calculate complex metrics, such as dynamic Year-over-Year (YoY) growth percentages and seasonal crime density.
          </p>
          <p className="mt-4">
            <strong>Geospatial Analysis:</strong> By integrating Bing Maps with latitude and longitude data, the dashboard features interactive heatmaps. These allow users to identify specific high-risk neighborhoods and visualize how crime hotspots have shifted from 2014 to 2024.
          </p>
          <p className="mt-4">
            <strong>Data Engineering:</strong> The project involved extensive data cleaning using Power Query. This included handling null values, standardizing "Premise Types" (e.g., grouping various residential types), and creating a robust data model with a dedicated Date Table for accurate time-intelligence calculations.
          </p>
          <p className="mt-4">
            Key insights revealed include a <strong>7.7% decrease</strong> in reported crimes for 2024 and distinct seasonal patterns where incident frequency correlates strongly with warmer months and weekends.
          </p>
        </article>
      </section>

      {/* Tech Stack & Links */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Tech Stack & Tools</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['Power BI', 'DAX', 'Power Query', 'Geospatial Analysis', 'Data Modeling', 'ETL'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
              {t}
            </span>
          ))}
        </div>
       
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">
        © 2025 Crime Analytics Portfolio. All rights reserved.
      </footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
        .prose :where(code, pre){ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      `}</style>
    </main>
  )
}