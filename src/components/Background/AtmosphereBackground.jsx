import React from "react"
import { motion } from "framer-motion"
import wallpaperDark from "/assets/Wallpaper.jpg"

/* ═══════════════════════════════════════════════════════════════
   ATMOSPHERE BACKGROUND — Theme-aware with wallpaper
   Premium mesh gradients, perpetual floating orbs
   Hardware-accelerated, pointer-events-none
   ═══════════════════════════════════════════════════════════════ */

export default function AtmosphereBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Wallpaper */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${wallpaperDark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(30,30,46,0.7) 0%, rgba(17,17,27,0.6) 100%)',
        }}
      />
      
      {/* Primary gradient orbs — floating animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 15% 25%, rgba(137,180,250,0.15), transparent 60%)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 85% 15%, rgba(203,166,247,0.12), transparent 55%)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 55% at 65% 80%, rgba(245,194,231,0.08), transparent 60%)',
        }}
      />
      
      {/* Secondary accent orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 90% 60%, rgba(166,227,161,0.06), transparent 50%)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 45% at 10% 70%, rgba(249,226,175,0.05), transparent 50%)',
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  )
}