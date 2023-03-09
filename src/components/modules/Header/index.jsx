// Styles
import { HeaderStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  // References
  const lastScroll = useRef(0)
  // States
  const [stick, setStick] = useState(true)
  // Effects
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  // Handlers
  const onScroll = () => {
    if (lastScroll.current > window.pageYOffset || window.pageYOffset == 0) {
      setStick(true)
    } else {
      setStick(false)
    }
    lastScroll.current = window.pageYOffset
  }
  const router = useRouter()
  return (
    <HeaderStyle className={ `header ${ stick ? "is-stick" : "" } ${ router.pathname !== "/privacy" && router.pathname !== "/notice" && router.pathname !== "/terms" ? "is-hide" : "" }` }>
      { useBreakpoint(down('md')) ?
          <HeaderMobile />
        : 
          <HeaderDesktop />
      }
    </HeaderStyle>
  )
}