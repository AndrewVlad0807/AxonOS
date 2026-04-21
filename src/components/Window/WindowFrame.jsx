import React, { useRef } from "react"
import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import { X, Minus, Maximize2, Minimize2 } from "lucide-react"
import ChapterContent from "../Content/ChapterContent"
import { useAppContext } from "../../context/AppContext"
import { UI } from "../../i18n"

/* ═══════════════════════════════════════════════════════════════
   WINDOW FRAME — Theme-aware using CSS variables
   ═══════════════════════════════════════════════════════════════ */

const ANIM = {
  initial:    { opacity: 0, scale: 0.92, y: 24, filter: "blur(8px)" },
  animate:    { opacity: 1, scale: 1,    y: 0,  filter: "blur(0px)" },
  exit:       { opacity: 0, scale: 0.96, y: 12, filter: "blur(6px)" },
  transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
}

const CLOSE_COLOR = "#ff5f57"
const MIN_COLOR   = "#febc2e"
const MAX_COLOR   = "#28c840"

export default function WindowFrame({ win, isActive, onClose, onMinimize, onMaximize, onFocus, onOpenLink, onBoundsChange }) {
  const { chapter } = win
  const { accent, Icon } = chapter
  const { language } = useAppContext()
  const t = UI[language] ?? UI.en

  const rndRef = useRef(null)

  const pos  = { x: win.x  ?? 120, y: win.y      ?? 80  }
  const size = { width: win.width ?? 860, height: win.height ?? 600 }

  const onDragStop  = (_, d) => onBoundsChange?.(win.id, d.x, d.y, win.width, win.height)
  const onResizeStop = (_, __, ref, ___, position) => {
    onBoundsChange?.(win.id, position.x, position.y, ref.offsetWidth, ref.offsetHeight)
  }

  const handleMaximize = () => {
    onMaximize()
  }

  const isMacFullscreen = win.maximized

  return (
    <Rnd
      ref={rndRef}
      position={pos}
      size={size}
      minWidth={480}
      minHeight={360}
      bounds="window"
      dragHandleClassName="win-drag"
      style={{ zIndex: win.z || 100, position: "fixed" }}
      onMouseDown={onFocus}
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
      disableDragging={isMacFullscreen}
      enableResizing={!isMacFullscreen}
    >
      {/* Window with theme-aware CSS variables */}
      <motion.div
        {...ANIM}
        className="w-full h-full flex flex-col rounded-2xl overflow-hidden relative"
        style={{
          background: 'var(--win-bg)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          border: isActive ? `1px solid ${accent}40` : '1px solid var(--border)',
          boxShadow: isActive
            ? `0 50px 120px rgba(0,0,0,0.5), 0 0 0 1px ${accent}20, 0 0 80px ${accent}12`
            : 'var(--shadow-glass)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Title bar */}
        <div
          className="win-drag h-12 flex items-center gap-3 px-5 shrink-0 cursor-move relative"
          style={{ 
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            transition: 'background 0.3s ease, border-color 0.3s ease',
          }}
        >
          {/* Traffic lights */}
          <div className="flex gap-3.5 items-center ml-1">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={e => { e.stopPropagation(); onClose() }}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
              style={{ background: CLOSE_COLOR }}
              title={t.close}
            >
              <X size={8} style={{ color: '#450a0a' }} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={e => { e.stopPropagation(); onMinimize() }}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
              style={{ background: MIN_COLOR }}
              title={t.minimize}
            >
              <Minus size={8} style={{ color: '#451a03' }} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={e => { e.stopPropagation(); handleMaximize() }}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
              style={{ background: MAX_COLOR }}
              title={isMacFullscreen ? t.restore : t.maximize}
            >
              {isMacFullscreen
                ? <Minimize2 size={7} style={{ color: '#052e16' }} />
                : <Maximize2 size={7} style={{ color: '#052e16' }} />
              }
            </motion.button>
          </div>

          {/* Title */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <Icon size={15} style={{ 
              color: isActive ? accent : 'var(--text-muted)',
              filter: isActive ? `drop-shadow(0 0 6px ${accent})` : 'none',
              transition: 'filter 0.3s ease'
            }} />
            <span
              className="text-[12px] font-mono font-medium tracking-wide truncate"
              style={{ 
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.3s ease',
              }}
            >
              {chapter.label}
            </span>
            <span 
              className="text-[10px] font-mono tracking-wider truncate hidden sm:block"
              style={{ color: 'var(--text-muted)' }}
            >
              — {chapter.subtitle}
            </span>
          </div>

          {/* Status indicator */}
          <motion.div
            animate={{ 
              boxShadow: [
                `0 0 8px ${accent}`,
                `0 0 16px ${accent}80`,
                `0 0 8px ${accent}`
              ],
              scale: isActive ? [1, 1.1, 1] : 1,
            }}
            transition={{ 
              duration: isActive ? 2 : 0, 
              repeat: isActive ? Infinity : 0,
              ease: 'easeInOut'
            }}
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: accent }}
          />
        </div>

        {/* Content area */}
        <div 
          className="flex-1 overflow-y-auto overscroll-contain"
          style={{
            background: 'var(--bg-primary)',
          }}
        >
          <ChapterContent chapter={chapter} accent={accent} onOpenLink={onOpenLink} />
        </div>
      </motion.div>
    </Rnd>
  )
}
