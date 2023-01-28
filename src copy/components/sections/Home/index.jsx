// Styles
import { HomeStyle } from "./index.style"
// Modules
import PopupModule from "@/components/modules/Popup"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"

export default function Home({ ...props }) {
  return (
    <HomeStyle { ...props }>
      <h1 className="typography-05">Nuanced is an award-winning film and interactive production studio within <SpanGradientText hover={ true }>Buried Signals</SpanGradientText>.<br/><br/>We specialize in <SpanGradientText>information design</SpanGradientText> and <SpanGradientText>narrative visualization</SpanGradientText>.</h1>
      <PopupModule className="visualization-popup" titleButton="What is visualization?">
        <TitleFirstIconText letterColored={ false }>What is visualitation?</TitleFirstIconText>
        <div className="description-visualization-popup">
          <p className="typography-08">Visualization is a process that involves turning complex information or data into visual representations, such as charts, graphs, and maps, in order to better understand and communicate insights.</p>
          <p className="typography-08">It can help to improve accessibility, comprehension, and memory by allowing people to make sense of complex data in a more intuitive way.</p>
          <p className="typography-08">In today's world many aspects of society, science, business, finance, journalism and everyday life are becoming increasingly quantified and intricate.</p>
          <p className="typography-08">Visualization is essential for companies or individuals who need to effectively communicate nuanced problems to a wide audience.</p>
        </div>
      </PopupModule>
    </HomeStyle>
  )
}