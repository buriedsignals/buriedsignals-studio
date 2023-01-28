// React
import { useEffect, useState } from "react"
// Hooks
import useStore from "./useStore"

export default function useTheme(defaultTheme = "light") {
  // Store
  const theme = useStore((state) => state.theme)
  // Effect
  useEffect(() => {
    if (theme !== undefined) {
      let newClassNames = []
      if (document.body.className.length !== 0) {
        const classNames = document.body.className.split(' ')
        newClassNames = classNames.filter((className) => {
          return !className.includes("theme-")
        })
      }
      newClassNames.push(`theme-${ theme }`)
      document.body.className = newClassNames.join(' ');
    } else {
      setTheme(defaultTheme)
    }
  }, [theme])
  // Handlers
  const setTheme = (value) => {
    useStore.setState({ theme: value })
  }
  const getTheme = () => {
    return useStore.getState().theme
  }
  // ->
  return [getTheme, setTheme]
}