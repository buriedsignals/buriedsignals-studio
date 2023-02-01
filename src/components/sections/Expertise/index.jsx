// Styles
import { ExpertiseStyle } from "./index.style"
// Modules
import PopupModule from "@/components/modules/Popup"
import Accordion from "@/components/modules/Accordion"
// Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
// Icons
import BubbleIcon from "@/components/icons/Bubble"
import GraphIcon from "@/components/icons/Graph"
import GlobeIcon from "@/components/icons/Globe"
import Section from "@/components/modules/Section"

export default function Expertise({ ...props }) {
  return (
    <Section>
      <ExpertiseStyle { ...props } id="expertise">
        <div className="expertise-container container-module-large">
          <div className="studio-container">
            <TitleFirstIconText letterColored={ true }>What we do</TitleFirstIconText>
            <p className="typography-08">As a film production and design studio that specializes in information vizualisation, we combine the interactive capabilities of technology with media to create unique narratives or share insights about our clients data with a larger audience.</p>
          </div>
          <PopupModule className="studio-popup" titleButton="How we work">
            <Accordion titleButton="What we produce" opened={ true }>
              <p className="typography-08">Our projects come in many shapes and sizes. Whether it is telling explanatory stories with illustration, enabling users to explore and find their own stories within interactive experiences or using animation and documentary filmmaking to guide audiences through complex subjects.</p>
              <p className="typography-08">Sometimes projects require the combination of both explanatory and exploratory approaches to meet the needs of different users.</p>
              <p className="typography-08">We’ve applied this visual storytelling to different formats; for print, video, editorial, blogs, social media, PDFs, presentations, and microsites.</p>
            </Accordion>
            <Accordion titleButton="How do we do it">
              <p className="typography-08">Using specialized expertise from the collective in fields such as data science, 3D, video, design and development we've produced enhanced editorial experiences that provide clarity in complexity across a range of industries and social issues.</p>
              <p className="typography-08">We make connections between disciplines and issues in unconventional ways to increase interdisciplinary understanding.</p>
              <p className="typography-08">We typically separate projects into a few stages based on the format, as a small team we move forward without information loss through heavy handoffs between phases.</p>
            </Accordion>
          </PopupModule>
        </div>
        <div className="client-container container-module-large">
          <h3 className="typography-04">Clients turn to us when:</h3>
          <ul className="clients">
            <li className="client">
              <BubbleIcon className="bubble-icon" />
              <p className="typography-08">They need to visualize complex information, whether in reports, video or presentations.</p>
            </li>
            <li className="client">
              <GraphIcon className="graph-icon" />
              <p className="typography-08">They need to find and communicate the stories in their data, no matter the format.</p>
            </li>
            <li className="client">
              <GlobeIcon className="globe-icon" />
              <p className="typography-08">They want an explorable or explanatory web experience.</p>
            </li>
          </ul>
        </div>
      </ExpertiseStyle>
    </Section>
  )
}