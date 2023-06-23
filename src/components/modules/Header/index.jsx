// Styles
import { HeaderStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react";
// Next
import { useRouter } from "next/router";
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HeaderDesktop from "@/components/modules/Header/Desktop"
import HeaderMobile from "@/components/modules/Header/Mobile"
// Hooks
import useStore from "@/hooks/useStore"

export default function Header() {
  // References
  const lastScroll = useRef(0)
  // States
  const [stick, setStick] = useState(true)
  // Hooks
  const [popupOpen] = useStore((state) => [state.popupOpen])
  // Effects
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  useEffect(() => {
    if (popupOpen) {
      setTimeout(() => {
        setStick(true)
      }, 1000)
    }
  }, [popupOpen])
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