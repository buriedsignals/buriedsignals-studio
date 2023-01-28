// Styles
import { ContactStyle } from "./index.style"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"

export default function Contact({ ...props }) {
  return (
    <ContactStyle { ...props } id="contact">
      <p className="typography-09">Do you need to create clarity in complexity?</p>
      <a className="typography-09" href="http://" target="_blank" rel="noopener noreferrer">
        <SpanGradientText>Let’s Contact together.</SpanGradientText>
      </a>
    </ContactStyle>
  )
}