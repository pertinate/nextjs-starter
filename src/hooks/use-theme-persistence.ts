"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemePersistence() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [themeHistory, setThemeHistory] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)

    // Load theme history from localStorage
    const savedHistory = localStorage.getItem("onyx-theme-history")
    if (savedHistory) {
      try {
        setThemeHistory(JSON.parse(savedHistory))
      } catch (error) {
        console.warn("Failed to parse theme history:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (mounted && theme) {
      // Update theme history
      setThemeHistory((prev) => {
        const newHistory = [theme, ...prev.filter((t) => t !== theme)].slice(0, 5)
        localStorage.setItem("onyx-theme-history", JSON.stringify(newHistory))
        return newHistory
      })

      // Store additional theme metadata
      const themeMetadata = {
        selectedTheme: theme,
        timestamp: new Date().toISOString(),
        systemTheme: systemTheme,
        resolvedTheme: resolvedTheme,
      }
      localStorage.setItem("onyx-theme-metadata", JSON.stringify(themeMetadata))
    }
  }, [theme, systemTheme, resolvedTheme, mounted])

  const getThemeStats = () => {
    if (!mounted) return null

    try {
      const metadata = localStorage.getItem("onyx-theme-metadata")
      return metadata ? JSON.parse(metadata) : null
    } catch {
      return null
    }
  }

  const clearThemeHistory = () => {
    localStorage.removeItem("onyx-theme-history")
    localStorage.removeItem("onyx-theme-metadata")
    setThemeHistory([])
  }

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    themeHistory,
    getThemeStats,
    clearThemeHistory,
    mounted,
  }
}
