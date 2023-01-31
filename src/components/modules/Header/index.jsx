// Styles
import { HeaderStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  return (
    <HeaderStyle className={ `header ${ router.pathname !== "/privacy" && router.pathname !== "/notice" && router.pathname !== "/terms" ? "is-hide" : "" }` }>
      { useBreakpoint(down('md')) ?
          <HeaderMobile />
        : 
          <HeaderDesktop />
      }
    </HeaderStyle>
  )
}