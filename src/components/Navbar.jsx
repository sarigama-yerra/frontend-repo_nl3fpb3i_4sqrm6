import { Menu, Play, Camera } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-zinc-900/70 border border-zinc-700/60 grid place-items-center">
            <Camera className="h-4 w-4 text-zinc-100" />
          </div>
          <div className="leading-tight">
            <p className="text-zinc-100 font-semibold tracking-wide">FRAME/EDIT</p>
            <p className="text-xs text-zinc-400">Freelance Video Editor</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-zinc-300 hover:text-white transition-colors">Work</a>
          <a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a>
          <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-zinc-900 bg-white hover:bg-zinc-100 px-4 py-2 rounded-full font-medium transition-colors">Start a Project</a>
        </nav>
        <button className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-white/10 text-white/90">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
