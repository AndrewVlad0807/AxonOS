import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAppContext } from "../../context/AppContext"
import { UI } from "../../i18n"

/* ═══════════════════════════════════════════════════════════════
   BOOT SEQUENCE — Shows Axon OS logo and centered terminal text
   Theme-aware colors for both dark and light mode
   ═══════════════════════════════════════════════════════════════ */

// Timing offsets (ms) for each line reveal
const TIMINGS = [0, 400, 800, 1200, 1600, 2000, 2400, 2600, 3000, 3400, 3600]

// Map dark mode colors to light mode colors
const colorMap = {
  // Dark mode Catppuccin Mocha → Light mode Latte
  '#1e1e2e': '#4c4f69',  // base
  '#bac2de44': '#4c4f6944',  // text transparent
  '#bac2decc': '#4c4f69cc',  // text strong
  '#bac2de88': '#4c4f6988',  // text medium
  '#89b4fa88': '#0097a788',  // blue → teal
  '#cba6f788': '#7c3aed88',  // mauve
  '#89b4fa': '#0097a7',      // solid blue → teal
}

/**
 * Convert dark mode color to light mode equivalent
 */
function getThemeColor(hexColor, isDark) {
  if (!hexColor || hexColor === 'transparent') return hexColor
  if (isDark) return hexColor
  
  // Light mode color mapping
  return colorMap[hexColor] || hexColor
}

export default function BootSequence({ onComplete, language = "ro" }) {
  const { theme } = useAppContext()
  const [visible, setVisible] = useState([])
  const lines = UI[language]?.bootLines ?? UI.ro.bootLines
  const isDark = theme === 'dark'

  useEffect(() => {
    const timers = TIMINGS.map((t, i) => setTimeout(() => setVisible(v => [...v, i]), t))
    const done = setTimeout(onComplete, 4200)
    return () => { timers.forEach(clearTimeout); clearTimeout(done) }
  }, [onComplete])

  const iconSrc = isDark ? "/IconDarkMode.svg" : "/IconLightMode.svg"

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(16px)", scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Centered Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <img 
          src={iconSrc} 
          alt="AxonOS" 
          style={{ width: '200px', height: '200px' }}
        />
      </motion.div>

      {/* Centered Boot Terminal */}
      <div className="max-w-lg text-center">
        <div 
          className="mb-6 w-12 h-0.5 mx-auto rounded-full"
          style={{ backgroundColor: isDark ? '#00e5ff' : '#0097a7' }}
        />
        
        <div className="font-mono text-sm leading-7 space-y-0 text-left">
          {lines.map((l, i) =>
            visible.includes(i) ? (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: getThemeColor(l.color, isDark) }}
                className="tracking-wider whitespace-pre"
              >
                {l.text || " "}
              </motion.p>
            ) : null
          )}
        </div>
        
        {/* Blinking cursor */}
        {visible.length < lines.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 mt-4 rounded-sm mx-auto"
            style={{ backgroundColor: isDark ? '#00e5ff' : '#0097a7' }}
          />
        )}
      </div>

      {/* Version */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <span 
          className="text-[10px] font-mono tracking-[0.3em] uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          v2.1.0
        </span>
      </motion.div>
    </motion.div>
  )
}
