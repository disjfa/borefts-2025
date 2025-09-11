import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  const theme = ref(prefersDark.matches ? 'dark' : 'light')

  function setTheme(newTheme) {
    theme.value = newTheme
    document.documentElement.setAttribute('data-bs-theme', newTheme)
  }

  function toggleTheme() {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Listen for system theme changes
  prefersDark.addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'light')
  })

  // Initialize theme
  setTheme(theme.value)

  return {
    theme,
    setTheme,
    toggleTheme
  }
})
