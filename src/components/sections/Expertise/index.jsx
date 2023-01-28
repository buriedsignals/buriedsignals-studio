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
            <p className="typography-08">As a film production, design and development studio that specializes in narrative vizualisation, we combine the dynamic and interactive capabilities of technology with design to create unique narratives or share existing insights about our client’s data with wider audiences.</p>
          </div>
          <PopupModule className="studio-popup" titleButton="Read more about the studio">
            <Accordion titleButton="What we make" opened={ true }>
              <p className="typography-08">These projects can take different forms, such as telling explanatory stories with illustration, enabling users to explore and find their own stories within interactive experiences, or using animation and documentary filmmaking to guide the audience through a particularly complex subject. Other projects require the combination of both explanatory and exploratory approaches to meet the needs of different users.</p>
              <p className="typography-08">We’ve applied this visual storytelling to different formats; for print, video, editorial, blogs, social media, PDFs, presentations, and microsites.</p>
            </Accordion>
            <Accordion titleButton="How do we do it">
              <p className="typography-08">These projects can take different forms, such as telling explanatory stories with illustration, enabling users to explore and find their own stories within interactive experiences, or using animation and documentary filmmaking to guide the audience through a particularly complex subject. Other projects require the combination of both explanatory and exploratory approaches to meet the needs of different users.</p>
              <p className="typography-08">We’ve applied this visual storytelling to different formats; for print, video, editorial, blogs, social media, PDFs, presentations, and microsites.</p>
            </Accordion>
          </PopupModule>
        </div>
        <div className="client-container container-module-large">
          <h3 className="typography-04">Clients turn to us when:</h3>
          <ul className="clients">
            <li className="client">
              <BubbleIcon className="bubble-icon" />
              <p className="typography-08">They need to visualize complex information, whether in reports or presentations.</p>
            </li>
            <li className="client">
              <GraphIcon className="graph-icon" />
              <p className="typography-08">They need to visualize complex information, whether in reports or presentations.</p>
            </li>
            <li className="client">
              <GlobeIcon className="globe-icon" />
              <p className="typography-08">They need to visualize complex information, whether in reports or presentations.</p>
            </li>
          </ul>
        </div>
      </ExpertiseStyle>
    </Section>
  )
}