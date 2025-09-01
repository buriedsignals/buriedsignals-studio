// Styles
import { FooterStyle } from "./index.style"
// Next
import Link from "next/link"
// Icons
import InstagramIcon from "@/components/icons/Instagram"
import LinkedinIcon from "@/components/icons/Linkedin"
import LogoSimpleIcon from "@/components/icons/LogoSimple"

export default function Footer() {
  return (
    <FooterStyle className="footer section-dark">
      <div className="footer-container container-module-extra-extra-large">
        <div className="socials-wrapper">
          <div className="socials">
            <a href="https://x.com/buriedsignals" className="network" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="/icons/x.svg" alt="X" height="23" />
            </a>
            <a href="https://www.instagram.com/buriedsignals/" className="network" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://www.youtube.com/@buriedsignals" className="network" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/icons/youtube.svg" alt="YouTube" height="23" />
            </a>
            <a href="https://tiktok.com/@buriedsignals" className="network" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="/icons/tiktok.svg" alt="TikTok" height="23" />
            </a>
            <a href="https://www.linkedin.com/in/tomvaillant/" className="network" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}