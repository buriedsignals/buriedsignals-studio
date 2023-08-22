// Styles
import { HoverMediaDesktopStyle } from "./index.style"
// React
import { useEffect, useRef } from "react";

export default function HoverMediaDesktop({ children, media, ...props }) {
  // References
  const imageActiveHover = useRef();
  const mousePos = useRef({ x: 0, y: 0, _x: 0, _y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  // Handlers
  const onMouseEnter = (e) => {
    imageActiveHover.current = e.currentTarget.querySelector('.media-hover')
    const imageWidth = imageActiveHover.current.offsetWidth
    const imageHeight = imageActiveHover.current.offsetHeight
    imageActiveHover.current.style.transition = "inherit"
    imageActiveHover.current.style.transform = `translate3D(${ mousePos.current.x - imageWidth / 2 }px, ${ mousePos.current.y - imageHeight / 2 }px, 0)`
    setTimeout(() => {
      if (imageActiveHover.current) {
        imageActiveHover.current.style.transition = "opacity .05s cubic-bezier(0.12, 0, 0.39, 0), transform .085s linear"
      }
    }, 10)
  }
  const onMouseMove = (e) => {
    mousePos.current._x = mousePos.current.x
    mousePos.current._y = mousePos.current.y
    mousePos.current.x = e.clientX
    mousePos.current.y = e.clientY
  }
  const onMouseLeave = () => {
    imageActiveHover.current = null
  }
  // Animate
  const animate = (time) => {
    if (imageActiveHover.current) {
      const imageWidth = imageActiveHover.current.offsetWidth
      const imageHeight = imageActiveHover.current.offsetHeight
      imageActiveHover.current.style.transform = `translate3D(${ mousePos.current.x - imageWidth / 2 }px, ${ mousePos.current.y - imageHeight / 2 }px, 0)`
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }
  // Effects
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return (
    <HoverMediaDesktopStyle className="media-hover-container" onMouseEnter={ (e) => onMouseEnter(e) } onMouseLeave={ (e) => onMouseLeave(e) } { ...props }>
      { children }
      { media.type == "image" && <img className="media-hover" src={ media.src } alt={ media.alt } /> }
      { media.type == "video" && <video className="media-hover" src={ media.src } autoPlay loop muted playsInline /> }
    </HoverMediaDesktopStyle>
  )
}