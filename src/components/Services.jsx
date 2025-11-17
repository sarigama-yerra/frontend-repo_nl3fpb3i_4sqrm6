import { Scissors, Wand2, Subtitles, AudioLines } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Cut & Story', desc: 'Tight edits with a clean narrative arc that respects pacing and emotion.' },
  { icon: Wand2, title: 'Motion & Graphics', desc: 'Minimal on-screen design, kinetic type, and transitions that feel intentional.' },
  { icon: AudioLines, title: 'Sound & Mix', desc: 'Crisp dialog, layered SFX, and music edits that hit at the right frame.' },
  { icon: Subtitles, title: 'Short-Form Mastering', desc: 'Platform-optimized outputs for YouTube, TikTok, Reels, and ads.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl text-white font-semibold">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <div className="h-12 w-12 rounded-lg bg-white/10 border border-white/10 grid place-items-center">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
