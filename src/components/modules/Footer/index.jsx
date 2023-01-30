// Styles
import { FooterStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import FooterDesktop from "@/components/modules/Footer/Desktop"
import FooterMobile from "@/components/modules/Footer/Mobile"

export default function Footer() {
  return (
    <FooterStyle className="footer">
      { useBreakpoint(down('md')) ?
          <FooterMobile />
        : 
          <FooterDesktop />
      }
    </FooterStyle>
  )
}