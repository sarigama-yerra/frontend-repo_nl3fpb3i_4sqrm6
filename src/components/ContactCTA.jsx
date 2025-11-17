export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 sm:p-12 relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">Let’s cut something great.</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">Share your brief, references, and deadline. I’ll respond within 24 hours with a scope and quote.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20" placeholder="Name" />
              <input className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20" placeholder="Email" type="email" />
              <input className="sm:col-span-2 bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20" placeholder="Project / Brand" />
              <textarea rows={4} className="sm:col-span-2 bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white/20" placeholder="Goals, links, style refs..." />
              <button className="sm:col-span-2 justify-self-start px-5 py-2.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
