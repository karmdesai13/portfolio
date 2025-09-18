'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gamepad2,
  Images,
  MessageSquare,
  Users,
  Radio,
  Film,
  Sparkles,
  ExternalLink
} from 'lucide-react'
import 'tailwindcss/tailwind.css'



export default function GamersHut() {
  const shots = [
    { src: '/gamershut/Home.png', alt: 'Home Page', caption: 'Home · Story‑style Feed' },
    { src: '/gamershut/LogIn.png', alt: 'Login Page', caption: 'Log In' },
    { src: '/gamershut/Notification.png', alt: 'Notification Page', caption: 'Notifications' },
    { src: '/gamershut/Server.png', alt: 'Server Page', caption: 'Server · Communication' },
    { src: '/gamershut/Gamers.png', alt: 'Gamers Page', caption: 'Gamers · Community' },
    { src: '/gamershut/FriendOpinion.png', alt: 'Friends Opinion Page', caption: 'Opinion · Discussions' }
  ]

  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.20),transparent),radial-gradient(50%_45%_at_80%_30%,rgba(236,72,153,0.18),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(34,197,94,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_70%)]" />

     
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <motion.span initial={{ rotate: -15, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Gamepad2 className="h-5 w-5" />
          </motion.span>
          <span className="text-sm/6 tracking-wider text-white/70">GAMERS HUT</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/#projects" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60">Back</Link>
          <a
            href="https://www.figma.com/file/2mbRF3ZKdFAZSdCP7VBuPs/Gamers-Hut?type=design&node-id=0%3A1&mode=design&t=BAnNvTUfKe15t8tS-1"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            <Images className="h-4 w-4" />
            Open Figma
            <ExternalLink className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </header>

      
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-6 md:pt-10">
        <div className="mx-auto grid max-w-4xl place-items-center text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="glow-text mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            Gamers Hut
          </motion.h1>
          <p className="max-w-2xl text-balance text-lg text-white/80 md:text-xl">A Social Media Platform for Gamers</p>

         
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { Icon: Images, label: 'Figma · Wireframes → Prototypes' },
              { Icon: MessageSquare, label: 'Opinion Page · Discussions' },
              { Icon: Users, label: 'Community & Chat' },
              { Icon: Radio, label: 'Server Page · Communication' },
              { Icon: Film, label: 'Live Content Streaming' }
            ].map(({ Icon, label }) => (
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
            Gamers Hut represents the zenith of UI/UX design, meticulously crafted using Figma, the industry-leading interface design tool. From conceptual wireframes to high-fidelity prototypes, each element of the app was iterated to perfection. The Home Page design echoes Instagrams intuitive storytelling, achieved by employing Figmas vector-based tools for responsive and fluid layouts that adapt to various devices.
          </p>
          <p className="mt-4">
            The Server Page is the fruit of collaborative real-time design sessions within Figma, allowing us to experiment with numerous user flow scenarios to optimize the communication experience. This space leverages Figmas interactive components and smart animate features to simulate the engagement and connectivity of real-time gaming environments.
          </p>
          <p className="mt-4">
            The Opinion Page is a result of extensive user testing facilitated by Figmas prototyping capabilities, ensuring a user-centric platform for discussions, similar to Reddit but fine-tuned for the gaming community. The design process involved constant feedback loops and iterative testing to achieve a seamless and engaging user interface.
          </p>
          <p className="mt-4">
            For live content streaming, Figmas collaborative environment enabled designers and developers to synchronize perfectly, ensuring the streamed content is displayed with minimal latency and optimal interactivity, providing a window to the gaming worlds luminaries.
          </p>
          <p className="mt-4">
            Our chat feature was visualized and refined through Figmas prototyping tools, focusing on conversational design with instant previews to evaluate the chats look and feel in real-time, mirroring a natural and intuitive conversational flow for gamers worldwide.
          </p>
          <p className="mt-4">
            Embrace Gamers Hut, a fusion of technological prowess and design excellence, all rooted in the powerful capabilities of Figma. Its more than just an app; it's a platform where gaming culture is woven into the fabric of community and connection.
          </p>
        </article>
      </section>

     
      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">Technical Stack And Visit the Project</h2>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
          {['Figma', 'Wireframes → Prototypes', 'Interactive Components', 'Smart Animate', 'User Testing', 'Community & Chat'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <a
            href="https://www.figma.com/file/2mbRF3ZKdFAZSdCP7VBuPs/Gamers-Hut?type=design&node-id=0%3A1&mode=design&t=BAnNvTUfKe15t8tS-1"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-600 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
          >
            <Images className="h-5 w-5" />
            View Figma
            <ExternalLink className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
          </a>
          <Link href="/#projects" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">Back</Link>
        </div>
      </section>

      
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 text-center text-sm text-white/60">© 2025 Gamers Hut. All rights reserved.</footer>

      <style jsx>{`
        .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.25); }
        .prose :where(code, pre){ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
      `}</style>
    </main>
  )
}
