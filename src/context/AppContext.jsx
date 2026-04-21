import React, { createContext, useContext, useState, useEffect } from "react"
import { DEFAULT_LANGUAGE } from "../i18n"

const AppContext = createContext(null)

/* Theme constants */
export const THEME_STORAGE_KEY = 'axon-os-theme'
export const DEFAULT_THEME = 'dark'

export function AppProvider({ children }) {
  /* Language state */
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  
  /* Display preferences */
  const [clock24h, setClock24h] = useState(false)
  const [showEQ, setShowEQ] = useState(true)
  
  /* Theme state with localStorage persistence */
  const [theme, setTheme] = useState(() => {
    // Load from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY)
      return saved || DEFAULT_THEME
    }
    return DEFAULT_THEME
  })
  
  /* Sync theme to DOM and localStorage */
  useEffect(() => {
    // Apply theme to <html>
    document.documentElement.setAttribute('data-theme', theme)
    
    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])
  
  /* Toggle theme helper */
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppContext.Provider value={{ 
      language, setLanguage, 
      clock24h, setClock24h, 
      showEQ, setShowEQ,
      theme, setTheme, toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
