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
        <div className="expertise-container container-module-large">
          <div className="studio-container">
            <TitleFirstIconText className="test" letterColored={ true }>What we do</TitleFirstIconText>
            <p className="typography-08">We blend information design with multimedia storytelling and creative technology to create unique narratives that share insights about our clients data with a larger audience.</p>
          </div>
          <PopupModule className="studio-popup" titleButton="How we work">
            <Accordion titleButton="What we do" opened={ true }>
              <p className="typography-08">Using scientific insights from the fields of cognitive science and visual encoding we simplify complex subjects and amplify the impact of our clients communications. </p>
              <p className="typography-08">We’ve produced data stories for media publishers, interactive impact reports and experiences for NGOs, websites and apps for climate tech companies. </p>
              <p className="typography-08">These stories come in many shapes and sizes; print, video, editorial, social media, PDFs, presentations, and microsites.</p>
            </Accordion>
            <Accordion titleButton="How do we do it">
              <p className="typography-08">Using specialized expertise from our collective in fields such as data science, 3D, video, design and development we make unconventional connections to produce enhanced editorial experiences.</p>
              <p className="typography-08">We use value-based pricing to make sure that our clients are able to do their work effectively and get a return on their investment. We build long-term partnerships, not absurd profits.</p>
              <p className="typography-08">As a small team of seniors we give our clients individual attention and strategic adivce.</p>
            </Accordion>
          </PopupModule>
        </div>
        <div className="client-container container-module-large">
          <div className="title-container">
            <h3 className="typography-04">Clients turn to us when:</h3>
          </div>
          <ul className="clients">
            <li className="client">
              <Lottie animationData={ BubbleLottie } />
              <p className="typography-08">They need to visualize complex information for a large audience.</p>
            </li>
            <li className="client">
              <Lottie animationData={ GraphLottie } />
              <p className="typography-08">They need to find and communicate the stories in their data (no matter the format).</p>
            </li>
            <li className="client">
              <Lottie animationData={ GlobeLottie } />
              <p className="typography-08">They want an explorable or explanatory web experience to reach people emotionally.</p>
            </li>
          </ul>
        </div>
      </ExpertiseStyle>
    </Section>
  )
}