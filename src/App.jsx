import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { AppProvider, useAppContext } from "./context/AppContext"
import BootSequence from "./components/Boot/BootSequence"
import Desktop from "./components/Desktop/Desktop"
import AtmosphereBackground from "./components/Background/AtmosphereBackground"
import CursorGlow from "./components/UI/CursorGlow"

function OSRoot() {
  const [booted, setBooted] = useState(false)
  const { language, theme } = useAppContext()

  // Apply theme to <html> on theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div
      className="scanlines relative w-screen h-screen overflow-hidden select-none"
      style={{ color: 'var(--text-primary)' }}
    >
      <CursorGlow />
      <AnimatePresence mode="wait">
        {!booted
          ? <BootSequence key="boot" language={language} onComplete={() => setBooted(true)} />
          : (
            <React.Fragment key="os">
              <AtmosphereBackground />
              <Desktop />
            </React.Fragment>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <OSRoot />
    </AppProvider>
  )
}
