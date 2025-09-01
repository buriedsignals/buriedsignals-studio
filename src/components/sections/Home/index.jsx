// Styles
import { HomeStyle } from "./index.style"
// Nodes
// React
// Modules
import Section from "@/components/modules/Section";
import PopupModule from "@/components/modules/Popup"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import HoverImageText from "@/components/texts/HoverMedia";


const pricing = [
  { name: "Annual reports", price: "$ 8-16k" },
  { name: "Data stories", price: "$ 10-14k" },
  { name: "Investigative reports", price: "$ 8-12k" },
  { name: "Science visualizations", price: "$ 4-8.5k" },
  { name: "Data visualization websites", price: "$ 24-32k" },
  { name: "Landing pages", price: "$ 13k" },
  { name: "Animated data videos", price: "$ 17-22k" },
  { name: "Presentation design", price: "$ 6-8.5k" },
  { name: "SoMe visual content", price: "$ 3.5k" }
]

export default function Home({ ...props }) {
  return (
    <Section>
      <HomeStyle { ...props } className="container-module-large">
        <div className="logo-container">
          <img src="/icons/bs-logo.svg" alt="Buried Signals" className="bs-logo" />
        </div>
        <div className="header-about-link-container">
          <a href="/about" className="header-about-link">
            <p className="typography-08">About</p>
          </a>
        </div>
        <div className="titles">
          <h1 className="typography-04"><a href="https://www.youtube.com/@buriedsignals" target="_blank" rel="noopener noreferrer"><SpanGradientText hover={ true } revert={ true }>Visual&nbsp;</SpanGradientText></a>journalist and <a href="https://buriedsignals.substack.com/" target="_blank" rel="noopener noreferrer"><SpanGradientText hover={ true } revert={ true }>technologist</SpanGradientText></a></h1>
          <h2 className="typography-12">based in 🇨🇭, reporting on data-driven stories with maps and charts.</h2>
        </div>
      </HomeStyle>
    </Section>
  )
}