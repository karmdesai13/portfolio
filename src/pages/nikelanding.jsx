'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flame,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  Trophy,
  Search,
  ExternalLink,
  Images
} from 'lucide-react'
import 'tailwindcss/tailwind.css'



export default function Nike() {
  const shots = [
    { src: '/nike/nike1.png', alt: 'Home Page', caption: 'Hero · New Drops' },
    { src: '/nike/nike2.png', alt: 'Login Page', caption: 'Auth · Join & Sign In' },
    { src: '/nike/nike3.png', alt: 'Notifications', caption: 'Alerts · Drops & Orders' }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(250,204,21,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

      
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span initial={{ rotate: -15, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Flame className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">NIKE LANDING · FIGMA</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/#projects" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60">Back</Link>
          <a
            href="https://www.figma.com/proto/zq08XCjuho4GtGpn6VRct6/Untitled?node-id=2-3"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-yellow-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-yellow-500/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60"
          >
            <Images className="h-4 w-4" />
            Open Figma
            <ExternalLink className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-8 md:pt-10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            NIKE — Concept Landing Experience
          </motion.h1>
          <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            A fast, minimal, athlete‑inspired storefront: hero product stories, swift search, and seamless sign‑in.
          </motion.p>

         
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[{ Icon: ShoppingBag, label: 'Shop Flow' }, { Icon: SlidersHorizontal, label: 'Smart Filters' }, { Icon: Search, label: 'Quick Search' }, { Icon: Trophy, label: 'Athlete Energy' }, { Icon: Sparkles, label: 'Motion & Micro‑UX' }].map(({ Icon, label }) => (
              <motion.span key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h2 className="mb-5 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Screens</h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-white/70">Tap any screen to open a lightbox.</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 text-left backdrop-blur transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60"
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
                  priority={i < 1}
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <Sparkles className="h-4 w-4" />
                <span>{s.caption}</span>
              </div>
            </motion.button>
          ))}
        </div>

       
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)}>
              <motion.div
                layout
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={shots[lightboxIndex].src} alt={shots[lightboxIndex].alt} fill className="object-contain" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2 text-white/90">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="text-sm">{shots[lightboxIndex].caption}</span>
                  </div>
                  <button onClick={() => setLightboxIndex(null)} className="rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

     
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Design & Development Insights</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<ShoppingBag className="h-5 w-5" />} title="Hero Merch" desc="High‑impact visuals & product storytelling drive instant engagement." />
          <FeatureCard icon={<SlidersHorizontal className="h-5 w-5" />} title="Filter UX" desc="Size, style, sport—snappy controls with clear feedback & shortcuts." />
          <FeatureCard icon={<Search className="h-5 w-5" />} title="Speedy Search" desc="Minimal friction: find styles in seconds with predictive cues." />
          <FeatureCard icon={<Trophy className="h-5 w-5" />} title="Performance" desc="Ship a fast feel with responsive layouts and micro‑interactions." />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85">
          <p className="text-balance text-lg">
            Designed in Figma and brought to life with React + Tailwind. This concept emphasizes clarity, speed, and brand energy while keeping the buying journey effortless.
          </p>
        </div>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Prototype</h2>
        <div className="flex justify-center">
          <a
            href="https://www.figma.com/proto/zq08XCjuho4GtGpn6VRct6/Untitled?node-id=2-3"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-yellow-500 to-fuchsia-600 px-5 py-3 font-semibold shadow-lg shadow-yellow-500/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60"
          >
            <Images className="h-5 w-5" />
            View Prototype
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </section>

      
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">© 2025 Nike Landing Page. All rights reserved.</footer>

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
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-yellow-500/15 to-fuchsia-500/10" />
      <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-white/10 p-2 ring-1 ring-white/15">{icon}</div>
      <h3 className="text-lg font-semibold text-white/95">{title}</h3>
      <p className="mt-1.5 text-sm text-white/75">{desc}</p>
    </motion.div>
  )
}
