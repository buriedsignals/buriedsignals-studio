// Styles
import { HomeStyle } from "./index.style"
// Modules
import PopupModule from "@/components/modules/Popup"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"

import gsap, { Circ, Expo, Power2, Power4, Sine } from 'gsap';
import SplitText from '@/scripts/SplitText';
import { useEffect, useRef, useState } from "react";
import Section from "@/components/modules/Section";
import useStore from "@/hooks/useStore";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(SplitText);

export default function Home({ ...props }) {
  const templateRef = useRef()
  const titleRef = useRef()
  const [buttonPopup, setButtonPopup] = useState(0)
  useEffect(() => {
      if (titleRef.current) {
        setTimeout(() => {
          new SplitText(titleRef.current.querySelectorAll('h1, h2'), { type: 'lines,words', linesClass: 'line', wordsClass: 'word' });
        }, 100)
      }
  }, [titleRef]);
  useEffect(() => {
    const timeline = new gsap.timeline();      
    setTimeout(() => {
      if (titleRef.current) {
        timeline.set(titleRef.current, { opacity: 1 });
        // timeline.set(document.querySelector('.header'), { opacity: 0 });
        // timeline.set(templateRef.current.querySelector('.visualization-popup'), { opacity: 0 });
        // timeline.set(titleRef.current.querySelectorAll('.underline'), { width: 0, opacity: 0 });
        const lines = titleRef.current.querySelectorAll('.line');
        // lines.forEach((line, i) => {
        //   timeline.set(line, { css: { overflow: 'hidden' } });
        //   timeline.set(line.querySelectorAll('.word'), { y: 100 });
        // });
        lines.forEach((line, i) => {
          if (line.textContent.length != 1) {
            timeline.to(line.querySelectorAll('.word'), 0.75, { y: 0, ease: CustomEase.create("custom", "0.25, 0.1, 0.74, 0.91") }, i !== 0 ? '-=0.55' : '');
          }
        });
        timeline.to(titleRef.current.querySelectorAll('.underline'), 1, { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=.75');
        timeline.to(document.querySelector('.header'), 0.5, { opacity: 1, y: 0, ease: CustomEase.create("custom", "0.25, 0.1, 0.74, 0.91") }, '-=0.75');
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup .circle-after'), 0.45, { scale: 1, ease: Power2.easeOut }, '-=0.8');
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup .circle-before'), 0.45, { scale: 1, ease: Power2.easeOut }, '-=0.8');
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup svg'), 0.5, { opacity: 1, x: '-50%', y: '-50%', rotation: 0, ease: Sine.easeOut }, '-=0.75');      
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup p'), 0.5, { x: 0, opacity: 1, ease: Sine.easeIn }, '-=0.75');
      }
    }, 100);
    return () => {
      timeline.kill()
    }
  }, [])
  // Handlers
  const onClickButton = () => {
    setButtonPopup(buttonPopup + 1)
  }
  return (
    <Section>
      <HomeStyle ref={templateRef} { ...props } className="container-module-large">      
        <div ref={titleRef} className="titles">
          <h1 className="typography-05">A <button onClick={ onClickButton }><SpanGradientText hover={ true } revert={ true }>data&nbsp;storytelling</SpanGradientText></button> and <button onClick={ onClickButton }><SpanGradientText hover={ true } revert={ true }>visual&nbsp;journalism</SpanGradientText></button> studio.</h1>
          <h2 className="typography-12">We help organisations solve complex communication problems by transforming their research or data into impactful visual content.</h2>
        </div>
        <PopupModule className="visualization-popup" titleButton="Pricing" callBackButtonPopup={ buttonPopup }>
          <TitleFirstIconText letterColored={ false }>PPricing</TitleFirstIconText>
          <div className="description-visualization-popup">
            <p className="typography-08">
            Digital reports | $ 16k
            <br />
            Data stories | $ 14k
            <br />
            Investigative reports | $ 8k
            <br />
            Scientific visualization | $ 8.5k
            <br />
            Data visualization websites | $ 32k
            <br />
            Landing pages | $ 13k
            <br />
            Animated data videos | $ 21k
            <br />
            Presentation design | $ 7k
            <br />
            SoMe visual content | $ 3.5k
            </p>
          </div>
        </PopupModule>
      </HomeStyle>
    </Section>
  )
}