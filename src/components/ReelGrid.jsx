import { Play, Square } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Creator Hype Reel',
    tag: 'YouTube / TikTok',
    thumb: 'https://images.unsplash.com/photo-1523246191900-428a0c5fa692?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Game Launch Teaser',
    tag: 'Gaming',
    thumb: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Product Motion Cut',
    tag: 'Brand',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Esports Aftermovie',
    tag: 'Event',
    thumb: 'https://images.unsplash.com/photo-1556663519-dde931ed1c00?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function ReelGrid() {
  return (
    <section id="work" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">Selected Work</h2>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition-colors">Request full portfolio →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((v) => (
            <article key={v.id} className="group relative rounded-xl overflow-hidden bg-zinc-900">
              <img src={v.thumb} alt={v.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{v.title}</p>
                  <p className="text-xs text-zinc-400">{v.tag}</p>
                </div>
                <button className="h-10 w-10 rounded-full bg-white/10 border border-white/20 grid place-items-center text-white group-hover:scale-105 transition-transform">
                  <Play className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
