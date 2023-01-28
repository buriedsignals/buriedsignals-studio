// Styles
import { HeaderStyle } from "./index.style"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useStore from "@/hooks/useStore"
// Icons
import LogoIcon from "@/components/icons/Logo"

export default function Header() {
  // Router
  const router = useRouter()
  // Hooks
  const [popupOpen] = useStore((state) => [state.popupOpen])
  return (
    <HeaderStyle className={ `${ popupOpen ? 'header-light' : 'header-dark' }` }>
      <div className="container">
        <Link href="/">
          <a className="logo" onClick={ () => useStore.setState({ popupOpen: false, scroll: true }) }>
            <LogoIcon colored={ !popupOpen } />
          </a>
        </Link>
        <ul className="pages">
          <li className="page">
            <Link href="/">
              <a className={ `typography-01 ${ router.asPath == "/" ? "is-active" : "" }` } onClick={ () => useStore.setState({ popupOpen: false, scroll: true }) }>
                Home
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#expertise">
              <a className={ `typography-01 ${ router.asPath == "/#expertise" ? "is-active" : "" }` } onClick={ () => useStore.setState({ popupOpen: false, scroll: true }) }>
                Expertise
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#work">
              <a className={ `typography-01 ${ router.asPath == "/#work" ? "is-active" : "" }` } onClick={ () => useStore.setState({ popupOpen: false, scroll: true }) }>
                Work
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#contact">
              <a className={ `typography-01 ${ router.asPath == "/#contact" ? "is-active" : "" }` } onClick={ () => useStore.setState({ popupOpen: false, scroll: true }) }>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  )
}