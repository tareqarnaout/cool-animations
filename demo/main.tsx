import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import { DayNightSwitch, runThemeTransition } from '../src'
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
        <p className="description">A glowing switch with a pixel sun and moon.<br />Drag the button or click for a crystalline theme reveal.</p>
        <div className="switch-stage"><DayNightSwitch dark={dark} onToggle={event => {
          const bounds = event.currentTarget.getBoundingClientRect()
          runThemeTransition({
            dark: !dark,
            origin: { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 },
            update: () => flushSync(() => setDark(value => !value)),
          })
        }} /></div>
        <p className="mode" aria-live="polite">{dark ? 'Moonlight' : 'Daylight'}</p>
      </section>
      <footer><span>React + CSS + SVG</span><a href="https://github.com/tareqarnaout/cool-animations">View source ↗</a></footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
