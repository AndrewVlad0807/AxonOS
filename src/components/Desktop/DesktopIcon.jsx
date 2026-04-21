import React, { useState } from "react"
import { motion } from "framer-motion"
import { useAppContext } from "../../context/AppContext"

export default function DesktopIcon({ chapter, onOpen }) {
  const { Icon, label, accent } = chapter
  const [hovered, setHovered] = useState(false)
  const { theme } = useAppContext()
  const isLight = theme === 'light'

  return (
    <motion.button
      onDoubleClick={onOpen}
      onClick={onOpen}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.06 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type:"spring", stiffness:400, damping:20 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer"
      style={{
        background: hovered ? 'rgba(76,79,105,0.08)' : 'transparent',
        transition: "background 0.2s"
      }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accent}22, ${accent}08)`,
          border: `1px solid ${accent}33`,
          boxShadow: hovered 
            ? `0 8px 30px ${accent}20, inset 0 1px 0 rgba(255,255,255,0.9)`
            : `inset 0 1px 0 rgba(255,255,255,0.8)`,
          transition: "box-shadow 0.3s"
        }}
      >
        {/* shimmer line */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            transform: hovered ? "translateX(100%)" : "translateX(-100%)",
            transition: "transform 0.5s ease"
          }}
        />
        <Icon size={26} style={{ 
          color: accent, 
          filter: hovered ? `drop-shadow(0 0 8px ${accent})` : "none", 
          transition:"filter 0.3s" 
        }} />
      </div>
      <span
        className="text-[10px] font-mono tracking-wider text-center leading-tight max-w-[72px] truncate"
        style={{ 
          color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
          transition: "color 0.2s"
        }}
      >
        {label}
      </span>
    </motion.button>
  )
}
