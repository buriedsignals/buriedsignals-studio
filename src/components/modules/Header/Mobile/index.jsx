// Styles
import { HeaderStyle } from "./index.style"
// Next
import Link from "next/link"
import { useRouter } from "next/router"
// Hooks
import useStore from "@/hooks/useStore"
import useToggle from "@/hooks/useToggle"
// Icons
import LogoIcon from "@/components/icons/Logo"
import BurgerIcon from "@/components/icons/Burger"
import MoreIcon from "@/components/icons/More"
import useTheme from "@/hooks/useTheme"

export default function HeaderMobile() {
  // Router
  const router = useRouter()
  // Hooks
  const [popupOpen] = useStore((state) => [state.popupOpen])
  const [menuOpen, setMenuOpen] = useToggle(false)
  const [getTheme, setTheme] = useTheme()
  // Handlers
  const onClickLink = () => {
    document.body.classList.add('no-animation-popup')
    setTimeout(() => {
      document.body.classList.remove('no-animation-popup')
    }, 2000);
    setMenuOpen(false)
    setTheme('light')
    useStore.setState({ popupOpen: false, scroll: true })
  }
  const onClickMenu = () => {
    setMenuOpen(!menuOpen)
    if (menuOpen) {
      if (popupOpen) {
        setTheme('green')
      } else {
        setTheme('light')
      }
    } else {
      setTheme('light')
    }
  }
  return (
    <HeaderStyle>
      <div className="header-mobile-container container-module-extra-extra-large">
        <Link href="/">
          <a className="logo" onClick={ onClickLink }>
            <LogoIcon colored={ getTheme() == "light" || menuOpen } />
          </a>
        </Link>
        <button className={ `menu${ menuOpen ? " is-open" : '' }` } onClick={ onClickMenu }>
          { menuOpen ? <MoreIcon /> : <BurgerIcon colored={ getTheme() == "light" || menuOpen } /> }
        </button>
        <div className={ `panel-transition${ menuOpen ? " is-open" : '' }` }></div>
        <ul className={ `pages${ menuOpen ? " is-open" : '' }` }>
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
          <li className={ `external${ menuOpen ? " is-open" : '' }` }>
            <a href="https://calendly.com/buriedsignals/15min" target="_blank" rel="noopener noreferrer">
              <div className="link-container">
                <p className="typography-01">Book a call</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  )
}