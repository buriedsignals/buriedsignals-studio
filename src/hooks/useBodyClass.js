// React
import { useEffect } from "react"
// Hooks
import useStore from "./useStore"

/**
 * Generic hook for managing body classes based on store state
 * @param {string} stateKey - The key in the store to watch
 * @param {string} classPrefix - The prefix for the class name
 * @param {*} defaultValue - Default value if state is undefined
 * @param {function} classNameGenerator - Function to generate class name from value
 */
export default function useBodyClass(stateKey, classPrefix, defaultValue, classNameGenerator) {
  // Store
  const stateValue = useStore((state) => state[stateKey])
  
  // Effect
  useEffect(() => {
    if (stateValue !== undefined) {
      let newClassNames = []
      if (document.body.className.length !== 0) {
        const classNames = document.body.className.split(' ')
        newClassNames = classNames.filter((className) => {
          return !className.includes(classPrefix)
        })
      }
      
      const newClassName = classNameGenerator(stateValue, classPrefix)
      if (newClassName) {
        newClassNames.push(newClassName)
      }
      
      document.body.className = newClassNames.join(' ')
    } else {
      setValue(defaultValue)
    }
  }, [stateValue])
  
  // Handlers
  const setValue = (value) => {
    useStore.setState({ [stateKey]: value })
  }
  
  const getValue = () => {
    return useStore.getState()[stateKey]
  }
  
  return [getValue, setValue]
}