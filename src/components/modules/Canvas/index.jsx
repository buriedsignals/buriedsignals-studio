// Styles
import { CanvasStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"

export default function Canvas({ ...props }) {
  // References
  const canvasRef = useRef()
  // States
  const [context, setContext] = useState()
  const [active, setActive] = useState(true)
  // Effects
  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 500) {
        setActive(false)
      } else {
        setActive(true)
      }
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'))
  }, [canvasRef.current])
  useEffect(() => {
    if (!context) return
    if (!active) {

      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      context.fillStyle = "#F5F2ED";
      context.fillRect(0,0,canvasRef.current.width,canvasRef.current.height);
      window.removeEventListener('mousemove', onMouseMove)
    } else {
      window.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [active, context])
  // Handlers
  const onMouseMove = (e) => {
    document.querySelector('.canvasParent').classList.add("is-canvas")
    var mouse = getMouse(e, canvasRef.current)
    redraw(mouse)
  }
  // Functions
  const getMouse = (e, canvas) => {
    let element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft
            offsetY += element.offsetTop
        } while ((element = element.offsetParent))
    }
    mx = e.pageX - offsetX
    my = e.pageY - offsetY
    return {
        x: mx,
        y: my
    }
  }
  const redraw = (mouse) => {
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;
    const gradient = context.createRadialGradient(mouse.x, mouse.y, 30, mouse.x, mouse.y, 109);
    gradient.addColorStop(0.2, "#F5F2ED80");
    gradient.addColorStop(0.9, "#F5F2ED");
    gradient.addColorStop(1, "#F5F2ED");
    context.fillStyle = gradient;
    context.fillRect(0,0,canvasRef.current.width,canvasRef.current.height);
}
  return (
    <CanvasStyle 
      ref={ canvasRef } 
      { ...props } 
    />
  )
}