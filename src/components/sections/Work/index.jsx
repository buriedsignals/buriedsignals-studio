// Styles
import { WorkStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useGradientColor from "@/hooks/useGradientColor"
//Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
// Icons
import Arrow02Icon from "@/components/icons/Arrow02"
import Section from "@/components/modules/Section"

const projects = [
  {
    link: "https://linesofcontrol.com/",
    name: "Lines of Control",
    infos: {
      description: "An interactive web documentary in partnership with",
      provider: "Stand With Kashmir"
    }
  },
  {
    link: "https://yementribute.com/",
    name: "The Yemen Tribute",
    infos: {
      description: "Visualising investigative data with mapping and editorial alongside",
      provider: "The Yemen Foundation"
    }
  },
  {
    name: "Talent Search",
    infos: {
      description: "Information design and data visualization in a PDF report for",
      provider: "Talent Acquisition Group"
    }
  },
  {
    link: "https://gather.seedsofpeace.org/",
    name: "We GATHER",
    infos: {
      description: "Branding, website design and film production for",
      provider: "GATHER"
    }
  },
  {
    name: "QF in Numbers",
    infos: {
      description: "Information design and data visualization for",
      provider: "the Qatar Foundation"
    }
  },
  {
    name: "IPO Visualizations",
    infos: {
      description: "Visual data animations for an IPO roadshow video by",
      provider: "Aleph Group"
    }
  },
  {
    link: "https://www.youtube.com/watch?v=IhYN0Ayo0i0",
    name: "Wallrunners of Gaza",
    infos: {
      description: "Web documentary about the history of parkour in Gaza",
      provider: "Red Bull"
    }
  }
]

export default function Work({ ...props }) {
  const colors = useGradientColor("#60d09f", "#377A5D", projects.length)
  // Handlers
  const onMouseEnter = (e, index) => {
    e.target.style.background = colors[index]
    e.target.classList.add('is-hover')
  }
  const onMouseLeave = (e) => {
    e.target.style.background = "inherit"
    e.target.classList.remove('is-hover')
  }
  return (
    <Section>
      <WorkStyle { ...props } id="work" className="container-module-large">
        <TitleFirstIconText>What we've done</TitleFirstIconText>
        <ul className="projects">
          { projects.map((project, index) => {
            return (
              <li className="project" key={ index }>
                { project.link ? 
                  <a className="datas-container" href={ project.link } target="_blank" rel="noopener noreferrer" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                    <div className="datas">
                      <p className="name typography-03">{ project.name }</p>
                      <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                    </div>
                    <Arrow02Icon />
                  </a>
                  :
                  <div className="datas-container no-link" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                    <div className="datas">
                      <p className="name typography-03">{ project.name }</p>
                      <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                    </div>
                    <Arrow02Icon />
                  </div>
                }
              </li>
            )
          }) }
        </ul>
      </WorkStyle>
    </Section>
  )
}