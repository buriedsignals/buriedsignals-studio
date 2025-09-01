import useBodyClass from "./useBodyClass"

export default function useTheme(defaultTheme = "light") {
  return useBodyClass(
    "theme", 
    "theme-", 
    defaultTheme,
    (value, prefix) => `${prefix}${value}`
  )
}