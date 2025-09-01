// Styles
import { HomeTemplateStyle } from "./index.style"
// Layouts
import Layout from "@/components/layouts/main"
// Sections
import HomeSection from "@/components/sections/Home"
import ExpertiseSection from "@/components/sections/Expertise"
import VideosSection from "@/components/sections/Videos"
import WorkSection from "@/components/sections/Work"
import NewsletterSection from "@/components/sections/Newsletter"
import ContactSection from "@/components/sections/Contact"
// Modules
import CanvasModule from "@/components/modules/Canvas"
import { useEffect, useRef, useState } from "react"
import useGradientColor from "@/hooks/useGradientColor"

export default function HomeTemplate() {
  // const canvasRef = useRef()
  // const [context, setContext] = useState()

  // function draw() {    
  //   const colors = useGradientColor("#71f2ba", "#377A5D", window.innerWidth / 50)
  //   canvasRef.current.width = window.innerWidth
  //   canvasRef.current.height = window.innerHeight
  //   const ctx = canvasRef.current.getContext('2d')
  //   setContext(ctx)
  //   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //   // for (var x = 0; x <= window.innerWidth; x += 50) {
  //   //   for (var y = 0; y <= window.innerHeight; y += 50) {
  //   //     ctx.beginPath()
  //   //     ctx.rect(x + 15, y + 15, 6, 6);
  //   //     ctx.fillStyle = colors[x/50];
  //   //     ctx.fill();
  //   //     ctx.closePath()
  //   //   }
  //   // }
  // }

  // useEffect(() => {
  //   draw()
  //   window.addEventListener('resize', draw)
  //   return () => {
  //     window.removeEventListener('resize', draw)
  //   }
  // }, [canvasRef.current])

  return (
    <Layout>
      <HomeTemplateStyle>
        <div className="canvasParent">
          <HomeSection />
          {/* <canvas className="toto" ref={ canvasRef } /> */}
          <CanvasModule />
        </div>
        <ExpertiseSection />
        <VideosSection />
        <WorkSection />
        <NewsletterSection />
        <ContactSection />
      </HomeTemplateStyle>
    </Layout>
  )
}