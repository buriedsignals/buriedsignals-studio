// Styles
import { FooterStyle } from "./index.style"
// Next
import Link from "next/link"
// Icons
import LogoIcon from "@/components/icons/Logo"
import TwitterIcon from "@/components/icons/Twitter"

export default function FooterDesktop() {
  return (
    <FooterStyle className="container-module-extra-extra-large">
      <div className="visu">
        <Link href="/">
          <a className="logo">
            <LogoIcon />
          </a>
        </Link>
        <a href="https://twitter.com/NuancedStudio" className="twitter typography-10" target="_blank" rel="noopener noreferrer">Follow us on <TwitterIcon /></a>
      </div>
      <div className="legals">        
        <p className="typography-10">© 2023 Nuanced Studio.</p>
        {/* <p className="typography-10">© 2023 Nuanced Studio. See <Link href="/privacy"><a className="typography-11">Privacy</a></Link>, <Link href="/terms"><a className="typography-11">Terms</a></Link> and <Link href="/notice"><a className="typography-11">Information Collection Notice</a></Link></p> */}
      </div>
    </FooterStyle>
  )
}