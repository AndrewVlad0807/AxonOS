import { useState, useCallback } from 'react'

export function useWindowManager() {
  const [windows,        setWindows]        = useState([])
  const [browserWindows, setBrowserWindows] = useState([])
  const [activeId,       setActiveId]       = useState(null)
  const [zCounter,       setZCounter]       = useState(100)

  const openWindow = useCallback((chapter) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === chapter.id)
      if (exists) {
        setWindows(ws => ws.map(w => w.id === chapter.id ? { ...w, minimized: false, maximized: false } : w))
        setActiveId(chapter.id)
        return prev
      }
      setActiveId(chapter.id)
      setZCounter(z => z + 1)
      const dp = chapter.defaultPos || { x: 120, y: 80, w: 860, h: 600 }
      return [...prev, {
        id: chapter.id,
        chapter,
        minimized:  false,
        maximized:  false,
        prevBounds: null,
        z:          zCounter + 1,
        x:          dp.x,
        y:          dp.y,
        width:      dp.w,
        height:     dp.h,
      }]
    })
  }, [zCounter])

  const closeWindow = useCallback((id) => {
    setWindows(prev => prev.filter(w => w.id !== id))
    setActiveId(prev => prev === id ? null : prev)
  }, [])

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: true } : w))
    setActiveId(prev => prev === id ? null : prev)
  }, [])

  const focusWindow = useCallback((id) => {
    setZCounter(z => z + 1)
    setActiveId(id)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: false, z: zCounter + 1 } : w))
  }, [zCounter])

  const toggleMaximize = useCallback((id) => {
    setWindows(prev => prev.map(w => {
      if (w.id !== id) return w
      if (w.maximized) {
        return { ...w, maximized: false, ...(w.prevBounds || {}) }
      } else {
        return {
          ...w,
          maximized:  true,
          prevBounds: { x: w.x, y: w.y, width: w.width, height: w.height },
          x:      0,
          y:      0,
          width:  window.innerWidth,
          height: window.innerHeight - 52,
        }
      }
    }))
  }, [])

  // Called by WindowFrame on drag/resize so the manager stays in sync
  const updateWindowBounds = useCallback((id, x, y, width, height) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, x, y, width, height } : w))
  }, [])

  // Cascade all non-minimized windows diagonally
  const stackWindows = useCallback(() => {
    const OFFSET  = 32
    const START_X = 48
    const START_Y = 48
    setWindows(prev => {
      let idx = 0
      return prev.map(w => {
        if (w.minimized) return w
        const result = {
          ...w,
          maximized:  false,
          prevBounds: null,
          x:          START_X + idx * OFFSET,
          y:          START_Y + idx * OFFSET,
          width:      w.width  || 860,
          height:     w.height || 600,
        }
        idx++
        return result
      })
    })
  }, [])

  // Tile all non-minimized windows side-by-side
  const tileWindows = useCallback(() => {
    setWindows(prev => {
      const visible = prev.filter(w => !w.minimized)
      if (visible.length === 0) return prev
      const tileW  = Math.floor(window.innerWidth  / visible.length)
      const tileH  = window.innerHeight - 52
      let   col    = 0
      return prev.map(w => {
        if (w.minimized) return w
        const result = {
          ...w,
          maximized:  false,
          prevBounds: null,
          x:          col * tileW,
          y:          0,
          width:      tileW,
          height:     tileH,
        }
        col++
        return result
      })
    })
  }, [])

  const minimizeAll = useCallback(() => {
    setWindows(prev => prev.map(w => ({ ...w, minimized: true })))
    setActiveId(null)
  }, [])

  const closeAll = useCallback(() => {
    setWindows([])
    setActiveId(null)
  }, [])

  const openBrowser = useCallback((url, title) => {
    setBrowserWindows(prev => [...prev, { id: Date.now(), url, title }])
  }, [])

  const closeBrowser = useCallback((id) => {
    setBrowserWindows(prev => prev.filter(bw => bw.id !== id))
  }, [])

  return {
    windows, activeId,
    openWindow, closeWindow, minimizeWindow, focusWindow, toggleMaximize, updateWindowBounds,
    stackWindows, tileWindows, minimizeAll, closeAll,
    browserWindows, openBrowser, closeBrowser,
  }
}
