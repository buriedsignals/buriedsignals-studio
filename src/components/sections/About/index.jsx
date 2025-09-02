// Styles
import { AboutStyle } from "./index.style"
// Modules
import Section from "@/components/modules/Section"
// Next
import Link from "next/link"

export default function About({ ...props }) {
  return (
    <Section>
      <AboutStyle { ...props } className="container-module-large">
        <div className="logo-container">
          <Link href="/">
            <img src="/icons/bs-logo.svg" alt="Buried Signals" className="bs-logo" />
          </Link>
        </div>
        <div className="about-content">
          <div className="profile-image-container">
            <img src="/images/profile.jpg" alt="Tom Vaillant" className="profile-image" />
          </div>
          <div className="about-text">
            <p className="typography-09">After leading large production teams for agencies I created an independent studio to publish data-driven stories for NGOs. I was awarded a grant by the Pulitzer Center and a scholarship for Columbia&apos;s summer data journalism program, after which I took on a staff position for the Swiss newspaper 20 Minuten.</p>
            <p className="typography-09">My work sits at the intersection of documentary filmmaking and data visualization —using maps, charts, and visual evidence to reveal patterns that matter.</p>
            <p className="typography-09">Beyond my own investigations, I&apos;m building AI-powered tools that help local journalists find and tell data stories. The goal is simple: make investigative techniques accessible to every newsroom, regardless of size or resources.</p>
          </div>
        </div>
      </AboutStyle>
    </Section>
  )
}