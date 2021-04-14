import React from 'react'

import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
      const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
      return [darkMode, setDarkMode]
}

