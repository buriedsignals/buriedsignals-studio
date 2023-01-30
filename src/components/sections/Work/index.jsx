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
    link: "https://www.google.fr",
    name: "Hello sunshine",
    infos: {
      description: "Blip blop",
      provider: "The client"
    }
  },
  {
    link: "https://www.google.fr",
    name: "The Yemen Foundation",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  },
  {
    link: "https://www.google.fr",
    name: "The Yemen Foundation",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  },
  {
    link: "https://www.google.fr",
    name: "The Yemen Foundation",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  },
  {
    link: "https://www.google.fr",
    name: "The Yemen Foundation",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  },
  {
    name: "Hello sunshine",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  }
]

export default function Work({ ...props }) {
  const colors = useGradientColor("#60d09f", "#377A5D", projects.length)
  // Handlers
  const onMouseEnter = (e, index) => {
    e.target.style.background = colors[index]
  }
  const onMouseLeave = (e) => {
    e.target.style.background = "inherit"
  }
  return (
    <Section>
      <WorkStyle { ...props } id="work" className="container-module-large">
        <TitleFirstIconText>What we have done</TitleFirstIconText>
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