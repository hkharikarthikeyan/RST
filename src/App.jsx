import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Support from './components/Support'
import CTA from './components/CTA'
import WhatsAppButton from './components/WhatsAppButton'
import ServicePage from './components/ServicePage'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [view, setView] = useState('home')

  useEffect(() => {
    const savedTheme = localStorage.getItem('research-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('research-theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Navbar onNavigate={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Services onSelect={setView} />
            <Process />
            <Support />
            <CTA />
          </>
        ) : (
          <ServicePage slug={view} onBack={() => setView('home')} />
        )}
      </main>
      <WhatsAppButton />
    </div>
  )
}
