// Styles
import { ContactStyle } from "./index.style"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import Section from "@/components/modules/Section"

export default function Contact({ ...props }) {
  return (
    <Section className="section-dark">
      <ContactStyle { ...props } id="contact" className="container-module-small">
        <p className="typography-09">Do you need to create clarity in complexity?</p>
        <a className="typography-09" href="mailto:tom@buriedsignals.com" target="_blank" rel="noopener noreferrer">
          <SpanGradientText hover={ true } revert={ true } theme="dark">Let’s&nbsp;work&nbsp;together.</SpanGradientText>
        </a>
      </ContactStyle>
    </Section>
  )
}