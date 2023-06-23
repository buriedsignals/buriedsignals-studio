// Styles
import { ContactStyle } from "./index.style"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import Section from "@/components/modules/Section"

export default function Contact({ ...props }) {
  return (
    <Section className="section-dark">
      <ContactStyle { ...props } id="contact" className="container-module-small">
        <p className="typography-09">Do you have a visualization project?</p>
        <a className="typography-09" href="https://calendly.com/buriedsignals/15min" target="_blank" rel="noopener noreferrer">
          <SpanGradientText hover={ true } revert={ true } theme="dark">Book a free call</SpanGradientText>
        </a>
      </ContactStyle>
    </Section>
  )
}