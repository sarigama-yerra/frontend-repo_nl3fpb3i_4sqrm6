import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[580px] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex items-end pb-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-300">Video Editing / Digital Content / Gaming</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Cinematic edits for creators, brands, and game studios.
          </h1>
          <p className="mt-5 text-zinc-300/90 text-lg max-w-2xl">
            I craft tight, story-driven cuts with bold motion, clean graphics, and sound that hits. Fast turnarounds. Broadcast polish.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">
              See Work
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
