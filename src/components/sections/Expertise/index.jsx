// Styles
import { ExpertiseStyle } from "./index.style"
// Modules
import PopupModule from "@/components/modules/Popup"
import Accordion from "@/components/modules/Accordion"
import Lottie from "@/components/modules/Lottie";
// Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
// Icons
import Section from "@/components/modules/Section"
// Datas
import BubbleLottie from "../../../../public/datas/target.json"
import GraphLottie from "../../../../public/datas/text.json"
import GlobeLottie from "../../../../public/datas/web.json"

export default function Expertise({ ...props }) {
  return (
    <Section>
      <ExpertiseStyle { ...props } id="expertise">
        {/*<div className="expertise-container container-module-large">
          <div className="studio-container">
            <TitleFirstIconText className="test" letterColored={ true }>Where I can help</TitleFirstIconText>
            <p className="typography-08">I occasionally support independent investigative teams with visuals and interactives. As I'm working part-time with 20 Minuten in Switzerland these partnerships require lead time.</p>
          </div>
          <PopupModule className="studio-popup" titleButton="F.A.Q">
            <Accordion titleButton="What do you do?" opened={ true }>
              <p className="typography-08">It's the use of design, media and creative technology to replace text with impactful content that engages broader audiences.</p>
              <p className="typography-08">I’ve applied this visual storytelling to different formats; for print, video, editorial, blogs, social media, PDFs, presentations, and microsites.</p>
            </Accordion>
            <Accordion titleButton="How do you work?">
              <p className="typography-08">Using a network of trusted experts in data science, 3D, video, design and development I've produced enhanced editorial experiences across a range of industries and social issues.</p>
              <p className="typography-08">I use a phased approach, starting with a pilot sprint to get a better idea of your needs and defining the project together.</p>
              <p className="typography-08">My priority is to make sure clients get a return on their investment, not make absurd profits. I love working with impact-driven organisations (which is why I also offer discounts).</p>
            </Accordion>
          </PopupModule>
        </div>
        */}
        <div className="client-container container-module-large">
          <div className="title-container">
            <h3 className="typography-04">Journalists turn to me when:</h3>
          </div>
          <ul className="clients">
            <li className="client">
              <Lottie animationData={ BubbleLottie } />
              <p className="typography-08">They need visuals for a complex investigation.</p>
            </li>
            <li className="client">
              <Lottie animationData={ GraphLottie } />
              <p className="typography-08">They need to communicate stories in their data.</p>
            </li>
            <li className="client">
              <Lottie animationData={ GlobeLottie } />
              <p className="typography-08">They want to partner on an investigation.</p>
            </li>
          </ul>
        </div>
      </ExpertiseStyle>
    </Section>
  )
}