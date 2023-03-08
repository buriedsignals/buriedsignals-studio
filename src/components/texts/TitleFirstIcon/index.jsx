// Styles
import { TitleFirstIconStyle } from "./index.style"
// Next
import { useEffect, useState } from "react"
// Icons 
import LetterWIcon from "@/components/icons/LetterW"
import LetterHIcon from "@/components/icons/LetterH"

export default function TitleFirstIcon({ className, children, letterColored = true, ...props }) {
  // States
  const [letterW, setLetterW] = useState(false)
  const [letterH, setLetterH] = useState(false)
  const [sentence, setSentence] = useState(children.slice(1))
  // Effects
  useEffect(() => {
    const firstLetter = children.charAt(0).toLowerCase()
    if (firstLetter === 'w') {
      setLetterW(true)
    }
    if (firstLetter === 'h') {
      setLetterH(true)
    }
  }, [])
  return (
    <TitleFirstIconStyle className={ `title-first-icon typography-05 ${className  }` }>
      { letterW && <LetterWIcon colored={ letterColored } /> }
      { letterH && <LetterHIcon colored={ letterColored } /> }
      { sentence }
    </TitleFirstIconStyle>
  )
}