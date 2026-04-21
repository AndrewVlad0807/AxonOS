import React from "react"
import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const ANIM = {
  initial:  { opacity:0, scale:0.92, y:24, filter:"blur(8px)" },
  animate:  { opacity:1, scale:1,    y:0,  filter:"blur(0px)" },
  exit:     { opacity:0, scale:0.96, y:12, filter:"blur(6px)" },
  transition: { duration:0.38, ease:[0.16,1,0.3,1] }
}

export default function BrowserWindow({ id, url, title, onClose, isActive, onFocus, z }) {
  return (
    <Rnd
      default={{ x:100, y:100, width:900, height:640 }}
      minWidth={480} minHeight={360}
      bounds="window"
      style={{ zIndex: z || 200, position:"fixed" }}
      onMouseDown={onFocus}
    >
      <motion.div {...ANIM} className="w-full h-full flex flex-col rounded-[14px] overflow-hidden"
        style={{
          background:"rgba(9,9,16,0.92)",
          backdropFilter:"blur(28px)",
          WebkitBackdropFilter:"blur(28px)",
          border: isActive ? "1px solid #00e5ff44" : "1px solid rgba(255,255,255,0.07)",
          boxShadow: isActive
            ? "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px #00e5ff22, 0 0 60px #00e5ff10"
            : "0 24px 60px rgba(0,0,0,0.6)",
          transition:"border 0.2s, box-shadow 0.3s"
        }}
      >
        {/* ── Title bar ── */}
        <div
          className="h-11 flex items-center gap-3 px-4 shrink-0"
          style={{ borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(0,0,0,0.25)" }}
        >
          {/* Traffic lights */}
          <div className="flex gap-2 items-center">
            <button
              onClick={e => { e.stopPropagation(); onClose(id) }}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all flex items-center justify-center group"
            >
              <X size={7} className="opacity-0 group-hover:opacity-100 text-red-900" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] opacity-60" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] opacity-60" />
          </div>

          {/* Title */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span
              className="text-xs font-mono tracking-wide truncate"
              style={{ color: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)" }}
            >
              {title || url}
            </span>
          </div>

          {/* Accent dot */}
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#00e5ff", boxShadow:"0 0 6px #00e5ff" }} />
        </div>

        {/* ── iframe content ── */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={url}
            title={title || url}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </motion.div>
    </Rnd>
  )
}
