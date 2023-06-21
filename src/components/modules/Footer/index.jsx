// Styles
import { FooterStyle } from "./index.style"
// Next
import Link from "next/link"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import MediumIcon from "@/components/icons/Medium"
import LogoSimpleIcon from "@/components/icons/LogoSimple"

export default function Footer() {
  return (
    <FooterStyle className="footer section-dark">
      <div className="footer-container container-module-extra-extra-large">
        <div className="links">
          <div className="socials">
            <a href="https://www.instagram.com/buriedsignals" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://twitter.com/buriedsignals" className="network" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://www.linkedin.com/company/buried-signals" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href="https://www.buried-signals.medium.com" className="network" target="_blank" rel="noopener noreferrer"><MediumIcon /></a>
          </div>
          <div className="buried">
            <a href="https://buriedsignals.com" className="typography-02" target="_blank" rel="noopener noreferrer">Magazine</a>
            <Link href="/"><a className="typography-02">Studio</a></Link>
            <a href="https://buriedsignals.com/membership" className="typography-02" target="_blank" rel="noopener noreferrer">Membership</a>
            <a href="https://buriedsignals.substack.com" className="typography-02" target="_blank" rel="noopener noreferrer">Subscribe</a>
            <a href="https://buriedsignals.com/about" className="typography-02" target="_blank" rel="noopener noreferrer">About</a>
          </div>
        </div>
        <div className="infos">
          <div className="legal">
            <p className="typography-13">Zurich, Switzerland</p>
            <a href="mailto:tom@buriedsignals.com" className="typography-13" target="_blank" rel="noopener noreferrer">tom@buriedsignals.com</a>
            <p className="copyright typography-13">© 2023 Buried Signals. See <a href="https://buriedsignals.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>, <a href="https://buriedsignals.com/terms" target="_blank" rel="noopener noreferrer">Terms</a> and <a href="https://buriedsignals.com/notice" target="_blank" rel="noopener noreferrer">Information Collection Notice</a></p>
          </div>
          <a href="https://buriedsignals.com" className="logo" target="_blank" rel="noopener noreferrer"><LogoSimpleIcon colored={ false } /></a>
        </div>
      </div>
    </FooterStyle>
  )
}