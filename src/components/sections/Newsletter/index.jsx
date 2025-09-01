// Styles
import { NewsletterStyle } from "./index.style"
// Modules
import Section from "@/components/modules/Section"

export default function Newsletter({ ...props }) {
  return (
    <Section className="section-dark">
      <NewsletterStyle { ...props } id="newsletter" className="container-module-large">
        <div className="newsletter-content">
          <div className="logo-container">
            <img src="/icons/bs-logo.svg" alt="Buried Signals" className="newsletter-logo" />
          </div>
          <div className="details">
            <p className="typography-09">Stories from data and the tools to craft them, delivered monthly.</p>
          </div>
          <a 
            href="https://buriedsignals.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="subscribe-link"
          >
            <p className="typography-08" data-text="Subscribe">Subscribe</p>
          </a>
        </div>
      </NewsletterStyle>
    </Section>
  )
}