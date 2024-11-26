// Styles
import { HeaderStyle } from "./index.style"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useStore from "@/hooks/useStore"
// Icons
import LogoIcon from "@/components/icons/Logo"
import useTheme from "@/hooks/useTheme"

export default function HeaderDesktop() {
  // Router
  const router = useRouter()
  // Hooks
  const [popupOpen] = useStore((state) => [state.popupOpen])
  const [getTheme, setTheme] = useTheme()
  // Handlers
  const onClickLink = () => {
    useStore.setState({ popupOpen: false, scroll: true })
  }
  return (
    <HeaderStyle>
      <div className="header-desktop-container container-module-extra-extra-large">
        <Link href="/">
          <a className="logo" onClick={ onClickLink }>
            <LogoIcon colored={ getTheme() == "light" } />
          </a>
        </Link>
        <ul className="pages">
          <li className="page">
            <Link href="/">
              <a className={ `typography-01 ${ router.asPath == "/" ? "is-active" : "" }` } onClick={ onClickLink }>
                Home
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#expertise">
              <a className={ `typography-01 ${ router.asPath == "/#expertise" ? "is-active" : "" }` } onClick={ onClickLink }>
                Expertise
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#work">
              <a className={ `typography-01 ${ router.asPath == "/#work" ? "is-active" : "" }` } onClick={ onClickLink }>
                Work
              </a>
            </Link>
          </li>
          <li className="page">
            <Link href="/#contact">
              <a className={ `typography-01 ${ router.asPath == "/#contact" ? "is-active" : "" }` } onClick={ onClickLink }>
                Contact
              </a>
            </Link>
          </li>
          <li className="external">
            <a href="https://linktr.ee/tomvaillant" target="_blank" rel="noopener noreferrer">
              <div className="link-container">
                <p className="typography-01">Links</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  )
}