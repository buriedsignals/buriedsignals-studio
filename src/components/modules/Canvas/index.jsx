// Styles
import { CanvasStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useGradientColor from "@/hooks/useGradientColor"

export default function Canvas({ ...props }) {
  // References
  const canvasRef = useRef()
  // States
  const [context, setContext] = useState()
  const [colors, setColors] = useState()
  const [active, setActive] = useState(true)
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0, _x: 0, _y: 0 })
  // Effects
  useEffect(() => {
    function onResize() {    
      setColors(useGradientColor("#71f2ba", "#377A5D", window.innerWidth / 50))
      if (window.innerWidth <= 500) {
        setActive(false)
      } else {
        setActive(true)
      }
    }
    onResize()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])
  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'))
  }, [canvasRef.current])

  const mousePos = useRef({ x: 0, y: 0, _x: 0, _y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const animate = (time) => {   

    mousePos.current._x = mousePos.current._x + (mousePos.current.x - mousePos.current._x) * 0.09
    mousePos.current._y = mousePos.current._y + (mousePos.current.y - mousePos.current._y) * 0.09

    redraw(mousePos.current)

    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  useEffect(() => {
  }, [mousePos])
  
  useEffect(() => {
    if (!context) return
    if (!active) {
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      context.fillStyle = "#F5F2ED";
      context.fillRect(0,0,canvasRef.current.width,canvasRef.current.height);
      cancelAnimationFrame(requestRef.current);
    } else {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [active, context])
  // Handlers
  const onMouseMove = (e) => {
    document.querySelector('.canvasParent').classList.add("is-canvas")
    getMouse(e, canvasRef.current)
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
    mousePos.current.x = mx
    mousePos.current.y = my
    return {
        x: mx,
        y: my
    }
  }
  const redraw = (mouse) => {
    canvasRef.current.width = canvasRef.current.offsetWidth;
    canvasRef.current.height = canvasRef.current.offsetHeight;
    for (var x = 0; x <= window.innerWidth; x += 50) {
      for (var y = 0; y <= window.innerHeight; y += 50) {
        const distX = (x + 15) - mouse._x
        const distY = (y + 15) - mouse._y
        const dist = Math.sqrt(distX * distX + distY * distY)
        if (dist < 60) {
          const size = 6
          let xSize = size + size * (20 / dist)
          let ySize = size + size * (20 / dist)
          xSize = xSize > 11 ? 11 : xSize
          ySize = ySize > 11 ? 11 : ySize
          xSize = xSize + (size - xSize) * 0.1
          ySize = ySize + (size - ySize) * 0.1
          const xPos = (x + 15 + 3) - (xSize / 2)
          const yPos = (y + 15 + 3) - (ySize / 2)
          context.beginPath()
          context.rect(xPos, yPos, xSize, ySize);
          context.fillStyle = colors[x/50];
          context.fill();
          context.closePath()
        } else {
          context.beginPath()
          context.rect(x + 15, y + 15, 6, 6);
          context.fillStyle = colors[x/50];
          context.fill();
          context.closePath()
        }
      }
    }
    const gradient = context.createRadialGradient(mouse._x, mouse._y, 30, mouse._x, mouse._y, 109);
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