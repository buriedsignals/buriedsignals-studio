// Styles
import { BurgerStyle } from "./index.style"

export default function Burger({ colored = true, ...props }) {
  return (
    <BurgerStyle className={ `${ colored ? 'is-colored' : '' }` } { ...props } width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25.8623" y="7.87988" width="3" height="25" transform="rotate(90 25.8623 7.87988)"/>
      <rect x="25.8623" y="0.379883" width="3" height="25" transform="rotate(90 25.8623 0.379883)"/>
      <rect x="25.8623" y="15.3799" width="3" height="25" transform="rotate(90 25.8623 15.3799)"/>
    </BurgerStyle>
  )
}