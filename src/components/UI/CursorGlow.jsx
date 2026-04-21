import React, { useEffect, useRef } from "react"

export default function CursorGlow() {
  const dotRef  = useRef()
  const ringRef = useRef()
  const pos     = useRef({ x:0, y:0 })
  const ring    = useRef({ x:0, y:0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }
    window.addEventListener("mousemove", onMove)
    let raf
    const lerp = (a, b, t) => a + (b - a) * t
    const loop = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan z-[9998] pointer-events-none mix-blend-screen opacity-90" style={{willChange:"transform"}} />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan/40 z-[9997] pointer-events-none" style={{willChange:"transform"}} />
    </>
  )
}
