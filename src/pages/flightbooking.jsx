'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, CalendarDays, MapPin, Search, Hash, RefreshCw, Github, ExternalLink, Sparkles } from 'lucide-react'
import 'tailwindcss/tailwind.css'



export default function FlightBooking() {
  const shots = [
    { src: '/FlightBooking/Flights.png', alt: 'Flights Page', caption: 'Flights · Browse & Populate Form' },
    { src: '/FlightBooking/FlightsDisplay.png', alt: 'Flights Display Page', caption: 'Display · Available Options' },
    { src: '/FlightBooking/Code.png', alt: 'Reservation Code Page', caption: 'Reservation · Unique Code' },
    { src: '/FlightBooking/Update.png', alt: 'Update Page', caption: 'Reservations · Update & Modify' },
    { src: '/FlightBooking/Search.png', alt: 'Reserve Search Page', caption: 'Lookup · Search by Code' }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(34,197,94,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

    
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span initial={{ rotate: -15, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Plane className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">FLIGHT BOOKING · C# + XAML</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/karmdesai13/FlightBooking.git"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
          >
            <Github className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
          </Link>
          <Link href="/#projects" className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">Back</Link>
        </div>
      </header>

      
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-8 md:pt-10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Flight Booking System
          </motion.h1>
          <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            A Flight Booking System Made With C#
          </motion.p>

        
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[{ Icon: MapPin, label: 'Flights Tab' }, { Icon: Hash, label: 'Unique Reservation Code' }, { Icon: Search, label: 'Search by Airports & Dates' }, { Icon: RefreshCw, label: 'Reservations Tab · Update' }].map(({ Icon, label }) => (
              <motion.span key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md">
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      
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

        
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)}>
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={shots[lightboxIndex].src} alt={shots[lightboxIndex].alt} fill className="object-contain" />
                </div>
                <div className="mt-3 text-right">
                  <button onClick={() => setLightboxIndex(null)} className="rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Design and Development Insights</h2>
        <article className="prose prose-invert mx-auto max-w-4xl text-white/90">
          <p>
            Our FlightBooking System is a testament to sophisticated software architecture, designed meticulously with C# and XAML to ensure a seamless user experience. The application’s UI harnesses the flexibility and power of XAML, presenting an intuitive interface that brings flight browsing and booking into the modern era with style and efficiency.
          </p>
          <p className="mt-4">
            Navigating to the Flights tab unfolds a world of possibilities, where selections not only showcase available flights but also populate the reservation form effortlessly, symbolizing the integration of form and function. On making a reservation, the system cleverly generates a unique code, encapsulating the complexity of backend C# logic in a simple, user-friendly output.
          </p>
          <p className="mt-4">
            The robust search functionality, driven by a combination of XAML prowess and C# backend algorithms, enables users to filter flights by arrival and departure airports and dates. The UI lays out the options for any given day with precision, making it a breeze for travelers to plan their journeys.
          </p>
          <p className="mt-4">
            In the Reservations tab, users are greeted with their booking details, reflecting the seamless synchronization between the Flights and Reservation tabs. This page is not just a static view but a dynamic interface allowing updates and modifications, showcasing the malleable nature of the underlying XAML interface elements, all underpinned by the robust C# backend.
          </p>
          <p className="mt-4">
            The reservation lookup feature, empowered by a sophisticated C# search algorithm, accepts reservation codes and swiftly retrieves booking details, further exemplifying the system's commitment to user-centric design and technological excellence.
          </p>
          <p className="mt-4">
            Experience the FlightBooking System, where the amalgamation of C# precision and XAML design aesthetics transports you to your destination. It's more than just a booking platform; it's a journey in luxurious efficiency, crafted to make every traveler's experience memorable and hassle-free.
          </p>
        </article>
      </section>

     
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Stack And Visit the Project</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['C#', 'XAML', 'Flights Tab', 'Reservation Code', 'Search by Airports & Dates', 'Reservations Tab', 'Reservation Lookup'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <Link href="https://github.com/karmdesai13/FlightBooking.git" target="_blank" className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-600 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">
            <Github className="h-5 w-5" />
            Visit the Repository
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </Link>
          <Link href="/#projects" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">Back</Link>
        </div>
      </section>

     
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">© 2025 FlightBooking. All rights reserved.</footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
        .prose :where(code, pre){ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
      `}</style>
    </main>
  )
}
