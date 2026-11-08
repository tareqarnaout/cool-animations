import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { DayNightSwitch } from '../src'
import './style.css'

function Demo() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#17191d' : '#e7e6df')
  }, [dark])

  return (
    <main className={`demo ${dark ? 'demo--dark' : ''}`}>
      <header><span>Cool Animations</span><span>01 / Day & night</span></header>
      <section aria-labelledby="title">
        <p className="eyebrow">A little light. A little motion.</p>
        <h1 id="title">Change the mood.</h1>
        <p className="description">A glowing switch with a pixel sun and moon.<br />Click to scatter the pixels and slide into the other side.</p>
        <div className="switch-stage"><DayNightSwitch dark={dark} onToggle={() => setDark(value => !value)} /></div>
        <p className="mode" aria-live="polite">{dark ? 'Moonlight' : 'Daylight'}</p>
      </section>
      <footer><span>React + CSS + SVG</span><a href="https://github.com/tareqarnaout/cool-animations">View source ↗</a></footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
