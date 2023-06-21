// Styles
import { LottieStyle } from "./index.style"
// Nodes
import lottie from "lottie-web";
// React
import { useEffect, useRef, useState } from "react";

export default function Lottie({ animationData, children, ...props }) {
  // References
  const lottieRef = useRef()
  let [bodymovin, setBodymovin] = useState()
  // Effects
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData
    })
    setBodymovin(anim)

    function animatebodymovin() {
      let totalHeight = window.scrollY;
      let scrollFromTop = lottieRef.current.getBoundingClientRect().top;
      let totalFrames = anim.totalFrames;
      let scrollPercentage = (scrollFromTop * 100) / totalHeight;
      let scrollPercentRounded = Math.round(scrollPercentage);

      if ((scrollPercentage * totalFrames) / 100 < totalFrames && (scrollPercentage * totalFrames) / 100 >= 0) {
        anim.goToAndStop((scrollPercentage * totalFrames) / 100, true);
      } else {
        return;
      }
    }
    const onResize = () => {
      if (window.innerWidth <= 1000) {
        window.addEventListener("scroll", onScroll)
      } else {
        window.removeEventListener("scroll", onScroll)
      }
    };
    const onScroll = () => {
      if (!anim) return
      animatebodymovin()
    };
    window.addEventListener("resize", onResize)

    return () => {
      anim.destroy()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onScroll)
    };
  }, [])
  // Handlers
  const onMouseEnterLottie = (e) => {
    bodymovin.setDirection(1)
    bodymovin.play()
  }
  const onMouseExitLottie = () => {    
    bodymovin.setDirection(-1)
    bodymovin.play()
  }
  return (
    <LottieStyle ref={ lottieRef } className="lottie-icon" onMouseEnter={ onMouseEnterLottie } onMouseLeave={ onMouseExitLottie }>
      { children }
    </LottieStyle>
  )
}