// Styles
import { LetterWStyle } from "./index.style"

export default function LetterW({ colored, ...props }) {
  return (
    <LetterWStyle className={ `letter-w ${ colored ? 'is-colored' : '' }` } { ...props } width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9631 35.9866H10.9891L0.577148 0.93799L6.52268 0.937988L16.9631 35.9866Z"/>
      <path d="M39.5305 35.9866H33.5565L23.1445 0.93799L29.0901 0.937988L39.5305 35.9866Z"/>
      <path d="M16.4256 23.5782L19.418 33.6092L24.5705 16.3279L21.5818 6.30048L16.4256 23.5782Z"/>
      <path d="M38.2029 21.0312L41.1914 31.0313L50.1284 0.938012L44.1829 0.938012L38.2029 21.0312Z"/>
    </LetterWStyle>
  )
}