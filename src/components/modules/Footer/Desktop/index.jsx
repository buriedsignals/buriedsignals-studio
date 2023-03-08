// Styles
import { FooterStyle } from "./index.style"
// Next
import Link from "next/link"
// Icons
import LogoIcon from "@/components/icons/Logo"
import TwitterIcon from "@/components/icons/Twitter"
import LinkedinIcon from "@/components/icons/Linkedin"
import MediumIcon from "@/components/icons/Medium"
import PercentPlanetIcon from "@/components/icons/PercentPlanet"

export default function FooterDesktop() {
  return (
    <FooterStyle className="section-dark container-module-extra-extra-large">
      <div className="visu">
        <Link href="/">
          <a className="logo">
            <LogoIcon />
          </a>
        </Link>
      </div>
      <div className="center">
        <div className="networks">
          <p className="typography-06">Follow us on</p>
          <div className="socials">
            <a href="https://twitter.com/NuancedStudio" className="network twitter typography-10" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="https://www.linkedin.com/company/nuanced-studio" className="network linkedin typography-10" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href="https://medium.com/@nuancedstudio" className="network medium typography-10" target="_blank" rel="noopener noreferrer"><MediumIcon /></a>
          </div>
        </div>
        <div className="contribute">
          <p className="typography-06">We contribute to</p>
          <img src="./images/percentPlanet.png" />
        </div>
      </div>
      <div className="legals">        
        <p className="typography-10">© 2023 Nuanced Studio.</p>
        {/* <p className="typography-10">© 2023 Nuanced Studio. See <Link href="/privacy"><a className="typography-11">Privacy</a></Link>, <Link href="/terms"><a className="typography-11">Terms</a></Link> and <Link href="/notice"><a className="typography-11">Information Collection Notice</a></Link></p> */}
      </div>
    </FooterStyle>
  )
}