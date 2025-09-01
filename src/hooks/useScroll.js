import useBodyClass from "./useBodyClass"

export default function useScroll(defaultScroll = true) {
  return useBodyClass(
    "scroll", 
    "no-scroll", 
    defaultScroll,
    (value) => !value ? "no-scroll" : null
  )
}