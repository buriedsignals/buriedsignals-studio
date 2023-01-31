// Styles
import { HomeStyle } from "./index.style"
// Modules
import PopupModule from "@/components/modules/Popup"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"

import gsap, { Expo, Power2, Power4, Sine } from 'gsap';
import SplitText from '@/scripts/SplitText';
import { useEffect, useRef, useState } from "react";
import Section from "@/components/modules/Section";
import useStore from "@/hooks/useStore";
gsap.registerPlugin(SplitText);

export default function Home({ ...props }) {
  const templateRef = useRef()
  const titleRef = useRef()
  const [buttonPopup, setButtonPopup] = useState(0)
  useEffect(() => {
      if (titleRef.current) {
        setTimeout(() => {
          new SplitText(titleRef.current, { type: 'lines,words', linesClass: 'line', wordsClass: 'word' });
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
            timeline.to(line.querySelectorAll('.word'), 0.5, { y: 0, ease: Sine.easeOut }, i !== 0 ? '-=0.325' : '');
          }
        });
        timeline.to(titleRef.current.querySelectorAll('.underline'), 1, { width: '100%', opacity: 1, ease: Expo.easeInOut });
        timeline.to(document.querySelector('.header'), 0.5, { opacity: 1, ease: Sine.easeIn });
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup .circle-after'), 0.45, { scale: 1, ease: Power2.easeOut }, '+=0.25');
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup .circle-before'), 0.45, { scale: 1, ease: Power2.easeOut }, '-=0.25');
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup svg'), 0.5, { opacity: 1, x: '-50%', y: '-50%', rotation: 0, ease: Sine.easeOut }, '-=0.15');      
        timeline.to(templateRef.current.querySelector('.visualization-popup .open-button-container-popup p'), 0.5, { x: 0, opacity: 1, ease: Sine.easeIn }, '-=0.15');
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
        <h1 ref={titleRef} className="typography-05">Nuanced is a film and interactive design studio within <a href="https://buriedsignals.com/" target="_blank" rel="noopener noreferrer"><SpanGradientText hover={ true }>Buried&nbsp;Signals</SpanGradientText></a>.<br/><br/>We specialize in <button onClick={ onClickButton }><SpanGradientText hover={ true } revert={ true }>information&nbsp;design</SpanGradientText></button> and <button onClick={ onClickButton }><SpanGradientText hover={ true } revert={ true }>narrative&nbsp;visualization</SpanGradientText></button>.</h1>
        <PopupModule className="visualization-popup" titleButton="What is visualization?" callBackButtonPopup={ buttonPopup }>
          <TitleFirstIconText letterColored={ false }>What is visualization?</TitleFirstIconText>
          <div className="description-visualization-popup">
            <p className="typography-08">Visualization is a process that involves turning complex information or data into visual representations, such as charts, graphs, and maps, in order to better understand and communicate insights.</p>
            <br />
            <p className="typography-08">It can help to improve accessibility, comprehension, and memory by allowing people to make sense of complex data in a more intuitive way.</p>
            <br />
            <p className="typography-08">In today's world many aspects of society, science, business, finance, journalism and everyday life are becoming increasingly quantified and intricate. Visualization is essential for companies or individuals who need to effectively communicate nuanced problems to a wide audience.</p>
          </div>
        </PopupModule>
      </HomeStyle>
    </Section>
  )
}