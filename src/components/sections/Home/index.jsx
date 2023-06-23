// Styles
import { HomeStyle } from "./index.style"
// Scripts
import SplitText from '@/scripts/SplitText';
// Nodes
import gsap, { Expo, Power2, Sine } from 'gsap';
import { CustomEase } from "gsap/dist/CustomEase";
// React
import { useEffect, useRef, useState } from "react";
// Modules
import Section from "@/components/modules/Section";
import PopupModule from "@/components/modules/Popup"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import HoverImageText from "@/components/texts/HoverMedia";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(SplitText);

const pricing = [
  { name: "Annual reports", price: "$ 16k" },
  { name: "Data stories", price: "$ 14k" },
  { name: "Investigative reports", price: "$ 8k" },
  { name: "Science visualizations", price: "$ 8.5k" },
  { name: "Data visualization websites", price: "$ 32k" },
  { name: "Landing pages", price: "$ 13k" },
  { name: "Animated data videos", price: "$ 21k" },
  { name: "Presentation design", price: "$ 7k" },
  { name: "SoMe visual content", price: "$ 3.5k" }
]

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
        timeline.set(titleRef.current, { opacity: 1, pointerEvents: 'none' });
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
        timeline.to(titleRef.current, 0, { pointerEvents: 'auto' });
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
  return (
    <Section>
      <HomeStyle ref={templateRef} { ...props } className="container-module-large">      
        <div ref={titleRef} className="titles">
          <h1 className="typography-05">A <HoverImageText media={{ type: "image", src: "./images/img-project-tag.png", alt: "" }}><SpanGradientText hover={ true } revert={ true }>data&nbsp;storytelling</SpanGradientText></HoverImageText> and <HoverImageText media={{ type: "video", src: "./videos/video-project-lines.mp4" }}><SpanGradientText hover={ true } revert={ true }>knowledge&nbsp;visualization</SpanGradientText></HoverImageText> studio.</h1>
          <h2 className="typography-12">We help organisations solve complex communication problems by transforming their research or data into impactful visual content.</h2>
        </div>
        <PopupModule className="visualization-popup" titleButton="Pricing" callBackButtonPopup={ buttonPopup }>
        <h2 className="pricing typography-05">Pricing</h2>
          <div className="description-visualization-popup">
            <ul className="names">
              { pricing.map((item, index) => {
                return (
                  <li key={ `name-${ index }` }>
                    <p className="typography-08">{ item.name }</p>
                  </li>
                ) 
              }) }
            </ul>
            <ul className="prices">
              { pricing.map((item, index) => {
                return (
                  <li key={ `price-${ index }` }>
                    <p className="typography-08">{ item.price }</p>
                  </li>
                ) 
              }) }
            </ul>
          </div>
        </PopupModule>
      </HomeStyle>
    </Section>
  )
}