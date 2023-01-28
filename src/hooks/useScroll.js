// React
import { useEffect } from "react"
// Hooks
import useStore from "./useStore"

export default function useScroll(defaultScroll = true) {
  // Stores
  const scroll = useStore((state) => state.scroll)
  // Effects
  useEffect(() => {
    if (scroll !== undefined) {
      let newClassNames = []
      if (document.body.className.length !== 0) {
        const classNames = document.body.className.split(' ')
        newClassNames = classNames.filter((className) => {
          return !className.includes("no-scroll")
        })
      }
      if (!scroll) {
        newClassNames.push("no-scroll")
      }
      document.body.className = newClassNames.join(' ');
    } else {
      setScroll(defaultScroll)
    }
  }, [scroll])
  // Handlers
  const setScroll = (value) => {
    useStore.setState({ scroll: value })
  }
  const getScroll = () => {
    return useStore.getState().scroll
  }
  // Return
  return [getScroll, setScroll]
}