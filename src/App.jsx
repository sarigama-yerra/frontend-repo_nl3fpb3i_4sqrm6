import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReelGrid from './components/ReelGrid'
import Services from './components/Services'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <Navbar />
      <Hero />
      <ReelGrid />
      <Services />
      <ContactCTA />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} FRAME/EDIT — Freelance Video Editor</p>
          <a href="#" className="hover:text-zinc-300">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default App
