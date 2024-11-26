// Styles
import { ContactStyle } from "./index.style"
// Texts
import SpanGradientText from "@/components/texts/SpanGradient"
import Section from "@/components/modules/Section"

export default function Contact({ ...props }) {
  return (
    <Section className="section-dark">
      <ContactStyle { ...props } id="contact" className="container-module-small">
        <p className="typography-09">Do you want to collaborate on an investigation?</p>
        <a className="typography-09" href="https://linktr.ee/tomvaillant" target="_blank" rel="noopener noreferrer">
          <SpanGradientText hover={ true } revert={ true } theme="dark">Get in touch</SpanGradientText>
        </a>
      </ContactStyle>
    </Section>
  )
}