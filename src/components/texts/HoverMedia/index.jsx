// Styles
import { HoverMediaStyle } from "./index.style"
// Nodes
import { down } from "styled-breakpoints"
import { useBreakpoint } from 'styled-breakpoints/react-styled';
// Modules
import HoverMediaDesktop from "@/components/texts/HoverMedia/Desktop"
import HoverMediaMobile from "@/components/texts/HoverMedia/Mobile"

export default function HoverMedia({ children, media, ...props }) {
  return (
    <HoverMediaStyle { ...props }>
      { useBreakpoint(down('sm')) ?
          <HoverMediaMobile media={ media }>
            { children }
          </HoverMediaMobile>
        : 
          <HoverMediaDesktop media={ media }>
            { children }
          </HoverMediaDesktop>
      }
    </HoverMediaStyle>
  )
}