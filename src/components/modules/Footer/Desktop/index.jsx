// Styles
import { FooterStyle } from "./index.style"
// Next
import Link from "next/link"
// Icons
import LogoIcon from "@/components/icons/Logo"
import TwitterIcon from "@/components/icons/Twitter"

export default function FooterDesktop() {
  return (
    <FooterStyle className="container-module-large">
      <div className="visu">
        <Link href="/">
          <a className="logo">
            <LogoIcon />
          </a>
        </Link>
        <p className="twitter typography-10">Follow us on <TwitterIcon /></p>
      </div>
      <div className="legals">
        <p className="typography-10">© 2023 Nuanced Studio. See <Link href="/privacy"><a className="typography-11">Privacy</a></Link>, <Link href="/terms"><a className="typography-11">Terms</a></Link> and <Link href="/notice"><a className="typography-11">Information Collection Notice</a></Link></p>
      </div>
    </FooterStyle>
  )
}