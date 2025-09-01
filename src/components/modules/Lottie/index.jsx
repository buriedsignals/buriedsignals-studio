// Styles
import { LottieStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react";

export default function Lottie({ animationData, children, ...props }) {
  // References
  const lottieRef = useRef()
  let [bodymovin, setBodymovin] = useState()
  // Effects
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let anim;
    let onResize, onScroll;
    
    import('lottie-web').then((lottie) => {
      anim = lottie.default.loadAnimation({
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
      onResize = () => {
        if (window.innerWidth <= 1000) {
          window.addEventListener("scroll", onScroll)
        } else {
          window.removeEventListener("scroll", onScroll)
        }
      };
      onScroll = () => {
        if (!anim) return
        animatebodymovin()
      };
      window.addEventListener("resize", onResize)
    });

    return () => {
      if (anim) anim.destroy()
      if (onResize) window.removeEventListener("resize", onResize)
      if (onScroll) window.removeEventListener("scroll", onScroll)
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