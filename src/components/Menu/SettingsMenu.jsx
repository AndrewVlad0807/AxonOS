import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Layers, LayoutPanelLeft, Minus, Trash2, Clock, Activity, Globe, Sun, Moon } from "lucide-react"
import { useAppContext } from "../../context/AppContext"
import { UI, LANGUAGES } from "../../i18n"

// ── Small toggle switch ──────────────────────────────────────────────────────
function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative w-9 h-5 rounded-full transition-colors duration-200 shrink-0"
      style={{ 
        background: value ? "rgba(30,102,245,0.2)" : "rgba(76,79,105,0.15)", 
        border: `1px solid ${value ? "rgba(30,102,245,0.4)" : "var(--border)"}`,
      }}
    >
      <motion.div
        animate={{ x: value ? 16 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-4 h-4 rounded-full"
        style={{ 
          background: value ? "#1e66f5" : "var(--text-muted)", 
          boxShadow: value ? "0 0 6px #1e66f5" : "none" 
        }}
      />
    </button>
  )
}

// ── Theme toggle ─────────────────────────────────────────────────────────────
function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl"
      style={{
        background: 'rgba(76,79,105,0.08)',
        border: '1px solid var(--border)',
        transition: 'background 0.2s, border-color 0.2s',
      }}
    >
      <div className="flex items-center gap-2.5">
        <motion.div
          animate={{ rotate: isLight ? 0 : 180, scale: isLight ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          style={{ color: isLight ? '#df8e1d' : '#8839ef' }}
        >
          {isLight ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
        </motion.div>
        <span className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
          {isLight ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
      
      <div
        className="px-2.5 py-1 rounded-full border text-[9px] font-mono font-medium tracking-wider"
        style={{ 
          backgroundColor: isLight ? 'rgba(223,142,29,0.15)' : 'rgba(136,57,239,0.15)',
          borderColor: isLight ? 'rgba(223,142,29,0.3)' : 'rgba(136,57,239,0.3)',
          color: isLight ? '#df8e1d' : '#8839ef',
          transition: 'background-color 0.3s, border-color 0.3s, color 0.3s'
        }}
      >
        {isLight ? 'LIGHT' : 'DARK'}
      </div>
    </motion.button>
  )
}

// ── Action button inside menu ────────────────────────────────────────────────
function ActionBtn({ icon: Icon, label, accent = "#1e66f5", onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-[11px] font-mono"
      style={{ 
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)',
        background: 'rgba(76,79,105,0.04)',
        transition: 'background 0.2s',
      }}
    >
      <Icon size={13} style={{ color: accent, flexShrink: 0 }} />
      {label}
    </motion.button>
  )
}

// ── Section heading ──────────────────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-mono tracking-widest uppercase px-1" style={{ color: 'var(--text-muted)' }}>
        {title}
      </p>
      {children}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function SettingsMenu({ open, onClose, stackWindows, tileWindows, minimizeAll, closeAll }) {
  const { language, setLanguage, clock24h, setClock24h, showEQ, setShowEQ, theme, toggleTheme } = useAppContext()
  const t = UI[language]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[900]" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 8,  scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[60px] left-4 z-[901] w-72 rounded-2xl overflow-hidden"
            style={{
              background: 'var(--win-bg)',
              backdropFilter: 'blur(32px) saturate(180%)',
              WebkitBackdropFilter: 'blur(32px) saturate(180%)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-glass)',
              transition: 'background 0.3s, border-color 0.3s',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                {t.settingsTitle}
              </span>
              <button
                onClick={onClose}
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={11} />
              </button>
            </div>

            {/* Body */}
            <div className="p-3 space-y-4">

              {/* ── Appearance ── */}
              <Section title={t.displaySection || 'Appearance'}>
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </Section>

              {/* ── Language ── */}
              <Section title={t.langSection}>
                <div className="flex gap-1.5 p-1 rounded-lg" style={{ 
                  background: 'rgba(76,79,105,0.06)', 
                  border: '1px solid var(--border)' 
                }}>
                  {Object.entries(LANGUAGES).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => setLanguage(code)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-mono"
                      style={{
                        background: language === code ? 'rgba(30,102,245,0.15)' : 'transparent',
                        border: language === code ? '1px solid rgba(30,102,245,0.35)' : '1px solid transparent',
                        color: language === code ? '#1e66f5' : 'var(--text-muted)',
                        transition: 'background 0.2s, border 0.2s, color 0.2s',
                      }}
                    >
                      <Globe size={11} />
                      {name}
                    </button>
                  ))}
                </div>
              </Section>

              {/* ── Windows ── */}
              <Section title={t.windowsSection}>
                <div className="grid grid-cols-2 gap-1.5">
                  <ActionBtn icon={Layers}          label={t.stackWindows} accent="#8839ef" onClick={() => { stackWindows(); onClose() }} />
                  <ActionBtn icon={LayoutPanelLeft} label={t.tileWindows}  accent="#40a02b" onClick={() => { tileWindows();  onClose() }} />
                  <ActionBtn icon={Minus}           label={t.minimizeAll}  accent="#df8e1d" onClick={() => { minimizeAll();  onClose() }} />
                  <ActionBtn icon={Trash2}          label={t.closeAll}     accent="#d20f39" onClick={() => { closeAll();     onClose() }} />
                </div>
              </Section>

              {/* ── Display ── */}
              <Section title="Options">
                <div className="space-y-1">
                  {/* 24h Clock */}
                  <div
                    className="flex items-center justify-between px-3 py-2 rounded-lg"
                    style={{ 
                      background: 'rgba(76,79,105,0.06)', 
                      border: '1px solid var(--border)' 
                    }}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                      <Clock size={12} style={{ color: '#04a5e5' }} />
                      {t.clock24h}
                    </div>
                    <Toggle value={clock24h} onChange={setClock24h} />
                  </div>

                  {/* Show EQ */}
                  <div
                    className="flex items-center justify-between px-3 py-2 rounded-lg"
                    style={{ 
                      background: 'rgba(76,79,105,0.06)', 
                      border: '1px solid var(--border)' 
                    }}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                      <Activity size={12} style={{ color: '#1e66f5' }} />
                      {t.showEQ}
                    </div>
                    <Toggle value={showEQ} onChange={setShowEQ} />
                  </div>
                </div>
              </Section>

            </div>

            {/* Footer accent line */}
            <div className="h-px mx-4 mb-3" style={{ background: 'linear-gradient(90deg, transparent, rgba(30,102,245,0.3), transparent)' }} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
