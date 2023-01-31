// Styles
import { LetterHStyle } from "./index.style"

export default function LetterH({ colored, ...props }) {
  return (
    <LetterHStyle className={ `letter-h ${ colored ? 'is-colored' : '' }` } { ...props } width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.523438" y="0.529297" width="5.75439" height="35.0005"/>
      <rect x="25.2617" y="0.529297" width="5.75439" height="35.0005"/>
      <rect x="23.29" y="15.1523" width="5.75439" height="15.0405" transform="rotate(90 23.29 15.1523)"/>
    </LetterHStyle>
  )
}