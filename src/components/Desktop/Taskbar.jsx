import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CHAPTERS } from "../../config/chapters"
import { useAppContext } from "../../context/AppContext"
import { DATE_LOCALES, translateChapter } from "../../i18n"

/* ═══════════════════════════════════════════════════════════════
   TASKBAR — Theme-aware
   Shows Axon OS logo and window buttons
   ═══════════════════════════════════════════════════════════════ */

export default function Taskbar({ windows, activeId, onOpen, onFocus, onOpenSettings, menuOpen }) {
  const { language, clock24h, showEQ, theme } = useAppContext()
  const locale = DATE_LOCALES[language] ?? "ro-RO"

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const iconSrc = theme === 'dark' ? "/IconDarkMode.svg" : "/IconLightMode.svg"

  return (
    <div
      className="h-14 mx-5 mb-4 rounded-2xl relative"
      style={{
        background: 'var(--win-bg)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-glass)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="relative h-full flex items-center px-4 gap-3">
        
        {/* Axon OS Logo — Triggers Settings Menu */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenSettings}
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
          style={{ 
            background: menuOpen ? 'rgba(30,102,245,0.12)' : 'transparent',
            border: menuOpen ? '1px solid rgba(30,102,245,0.3)' : '1px solid transparent',
            transition: 'background 0.2s, border 0.2s',
          }}
        >
          <img 
            src={iconSrc} 
            alt="AxonOS" 
            style={{ width: '100%', height: '100%' }}
          />
        </motion.button>

        {/* AXOS wordmark */}
        <motion.span
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-[11px] font-semibold tracking-[0.25em] shrink-0"
          style={{ color: 'var(--c-blue)' }}
        >
          AXOS
        </motion.span>

        <div className="w-px h-7" style={{ background: 'var(--border)' }} />

        {/* Open Windows */}
        <div className="flex-1 flex gap-2 overflow-x-auto">
          {windows.map(w => {
            const ch = CHAPTERS.find(c => c.id === w.id)
            if (!ch) return null
            const translatedCh = translateChapter(ch, language)
            const isActive = activeId === w.id && !w.minimized
            const { Icon, accent } = ch
            
            return (
              <motion.button
                key={w.id}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onFocus(w.id)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[11px] font-mono shrink-0 relative"
                style={{
                  background: isActive ? `${accent}14` : 'rgba(76,79,105,0.06)',
                  border: isActive ? `1px solid ${accent}30` : '1px solid var(--border)',
                  borderBottom: isActive ? `2px solid ${accent}` : '2px solid transparent',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'background 0.2s, border 0.2s, color 0.2s',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeWindowGlow"
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    style={{
                      background: `radial-gradient(ellipse at center, ${accent}10, transparent 70%)`,
                    }}
                  />
                )}
                <Icon size={13} style={{ color: isActive ? accent : 'currentColor' }} />
                <span className="max-w-[85px] truncate relative z-10">{translatedCh.label}</span>
              </motion.button>
            )
          })}
        </div>

        <div className="w-px h-7" style={{ background: 'var(--border)' }} />

        {/* Right side */}
        <div 
          className="flex items-center gap-4 shrink-0 font-mono text-[11px]"
          style={{ color: 'var(--text-muted)' }}
        >
          {/* EQ Visualizer */}
          {showEQ && (
            <div className="flex gap-0.5 items-end h-5">
              {[3, 5, 4, 6, 3, 5, 4].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scaleY: [1, h / 3, 0.6, 1],
                    opacity: [0.4, 0.8, 0.5, 0.4],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.4, 
                    delay: i * 0.1, 
                    ease: 'easeInOut' 
                  }}
                  className="w-0.5 rounded-sm origin-bottom"
                  style={{ 
                    height: `${h * 2}px`,
                    background: 'var(--c-blue)',
                  }}
                />
              ))}
            </div>
          )}

          {/* Time */}
          <motion.span
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--text-secondary)' }}
          >
            {time.toLocaleTimeString(locale, clock24h
              ? { hour: "2-digit", minute: "2-digit", hour12: false }
              : { hour: "2-digit", minute: "2-digit" }
            )}
          </motion.span>
          
          <span style={{ color: 'var(--text-muted)' }}>
            {time.toLocaleDateString(locale, { month: "short", day: "numeric" })}
          </span>
        </div>
      </div>
    </div>
  )
}
