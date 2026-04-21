import React from "react"
import { motion } from "framer-motion"
import { useAppContext } from "../../context/AppContext"

/* ═══════════════════════════════════════════════════════════════
   THEME ICON — Shows Axon OS logo based on theme
   Used in boot sequence and taskbar
   ═══════════════════════════════════════════════════════════════ */

export default function ThemeIcon({ 
  size = 40, 
  animated = true,
  className = "" 
}) {
  const { theme } = useAppContext()
  const isDark = theme === 'dark'

  const iconSize = size
  const iconSrc = isDark 
    ? "/IconDarkMode.svg" 
    : "/IconLightMode.svg"

  if (animated) {
    return (
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
        }}
        className={className}
        style={{ width: iconSize, height: iconSize }}
      >
        <img 
          src={iconSrc} 
          alt={isDark ? "Dark mode" : "Light mode"} 
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: '12px'
          }}
        />
      </motion.div>
    )
  }

  return (
    <div className={className} style={{ width: iconSize, height: iconSize }}>
      <img 
        src={iconSrc} 
        alt={isDark ? "Dark mode" : "Light mode"} 
        style={{ 
          width: '100%', 
          height: '100%',
          borderRadius: '12px'
        }}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   LARGE THEME ICON — For boot sequence splash
   ═══════════════════════════════════════════════════════════════ */
export function LargeThemeIcon() {
  const { theme } = useAppContext()
  const isDark = theme === 'dark'

  const iconSrc = isDark 
    ? "/IconDarkMode.svg" 
    : "/IconLightMode.svg"

  return (
    <motion.div
      key={`large-${theme}`}
      initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <img 
        src={iconSrc} 
        alt={isDark ? "AxonOS Dark" : "AxonOS Light"} 
        style={{ 
          width: '280px',
          height: '280px',
          opacity: 0.9
        }}
      />
    </motion.div>
  )
}
