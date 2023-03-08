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
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0, _x: 0, _y: 0 })
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
  // useEffect(() => {
  //   if (!context) return
  //   if (!active) {
  //     canvasRef.current.width = canvasRef.current.offsetWidth;
  //     canvasRef.current.height = canvasRef.current.offsetHeight;
  //     context.fillStyle = "#F5F2ED";
  //     context.fillRect(0,0,canvasRef.current.width,canvasRef.current.height);
  //     window.removeEventListener('mousemove', onMouseMove)
  //   } else {
  //     window.addEventListener('mousemove', onMouseMove)
  //   }
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [active, context])

  const mousePos = useRef({ x: 0, y: 0, _x: 0, _y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const animate = (time) => {   
    function lerp (start, end, amt){
      return (1-amt)*start+amt*end
    }

    mousePos.current._x = mousePos.current._x + (mousePos.current.x - mousePos.current._x) * 0.09
    mousePos.current._y = mousePos.current._y + (mousePos.current.y - mousePos.current._y) * 0.09
    // mousePos.current._x = lerp(mousePos.current._x, mousePos.current.x, 0.1)
    // mousePos.current._y = lerp(mousePos.current._y, mousePos.current.y, 0.1)
    // const dX = mousePos.current.x - mousePos.current._x;
    // const dY = mousePos.current.y - mousePos.current._y;
  
    // mousePos.current._x += (dX / 10);
    // mousePos.current._y += (dY / 10);

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
    var mouse = getMouse(e, canvasRef.current)
    // redraw(mouse)
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