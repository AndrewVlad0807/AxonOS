import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CHAPTERS } from "../../config/chapters"
import { translateChapter } from "../../i18n"
import { useAppContext } from "../../context/AppContext"
import { useWindowManager } from "../../hooks/useWindowManager"
import DesktopIcon from "./DesktopIcon"
import Taskbar from "./Taskbar"
import WindowFrame from "../Window/WindowFrame"
import BrowserWindow from "../Window/BrowserWindow"
import SettingsMenu from "../Menu/SettingsMenu"

/* ═══════════════════════════════════════════════════════════════
   AXON OS DESKTOP — TASTE SKILL ENHANCED
   Variance: 8 | Motion: 6 | Density: 4
   Spring physics, staggered orchestration, premium motion
   ═══════════════════════════════════════════════════════════════ */

export default function Desktop() {
  const { language } = useAppContext()
  const [menuOpen, setMenuOpen] = useState(false)

  const {
    windows, activeId, openWindow, closeWindow, minimizeWindow, focusWindow, toggleMaximize, updateWindowBounds,
    stackWindows, tileWindows, minimizeAll, closeAll,
    browserWindows, openBrowser, closeBrowser,
  } = useWindowManager()

  /* Staggered icon entrance — waterfall reveal */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.3,
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1] /* Premium spring */
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col"
    >
      {/* Premium Icon Grid — staggered waterfall entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 p-8 grid grid-cols-7 auto-rows-max gap-3 content-start"
      >
        {CHAPTERS.map((ch, i) => {
          const translatedCh = translateChapter(ch, language)
          return (
            <motion.div
              key={ch.id}
              variants={iconVariants}
              custom={i}
            >
              <DesktopIcon 
                chapter={translatedCh} 
                onOpen={() => openWindow(translatedCh)}
                accent={ch.accent}
              />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Chapter Windows — Scale-in with spring physics */}
      <AnimatePresence mode="sync">
        {windows.filter(w => !w.minimized).map(w => {
          const translatedCh = translateChapter(w.chapter, language)
          const translatedWin = { ...w, chapter: translatedCh }
          return (
            <WindowFrame
              key={w.id}
              win={translatedWin}
              isActive={activeId === w.id}
              onClose={() => closeWindow(w.id)}
              onMinimize={() => minimizeWindow(w.id)}
              onMaximize={() => toggleMaximize(w.id)}
              onFocus={() => focusWindow(w.id)}
              onOpenLink={openBrowser}
              onBoundsChange={updateWindowBounds}
            />
          )
        })}
      </AnimatePresence>

      {/* Browser Windows */}
      <AnimatePresence>
        {browserWindows.map(bw => (
          <BrowserWindow
            key={bw.id}
            id={bw.id}
            url={bw.url}
            title={bw.title}
            onClose={closeBrowser}
            isActive={true}
            onFocus={() => {}}
            z={200 + bw.id % 1000}
          />
        ))}
      </AnimatePresence>

      {/* Settings Menu — Slide-up reveal */}
      <SettingsMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        stackWindows={stackWindows}
        tileWindows={tileWindows}
        minimizeAll={minimizeAll}
        closeAll={closeAll}
      />

      {/* Taskbar — Fade-up entrance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Taskbar
          windows={windows}
          activeId={activeId}
          onOpen={openWindow}
          onFocus={focusWindow}
          onOpenSettings={() => setMenuOpen(v => !v)}
          menuOpen={menuOpen}
        />
      </motion.div>
    </motion.div>
  )
}
