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
    link: "https://www.google.fr",
    name: "Hello sunshine",
    infos: {
      description: "An interactive experience for",
      provider: "Qatar Foundation"
    }
  }
]

export default function Work({ ...props }) {
  const colors = useGradientColor("#71F2BA", "#377A5D", projects.length)
  // Handlers
  const onMouseEnter = (e, index) => {
    e.target.style.background = colors[index]
  }
  const onMouseLeave = (e) => {
    e.target.style.background = "inherit"
  }
  return (
    <WorkStyle { ...props } id="work">
      <TitleFirstIconText>What we have done</TitleFirstIconText>
      <ul className="projects">
        { projects.map((project, index) => {
          return (
            <li className="project" key={ index }>
              <a href={ project.link } target="_blank" rel="noopener noreferrer" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                <p className="name typography-03">{ project.name }</p>
                <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                <Arrow02Icon />
              </a>
            </li>
          )
        }) }
      </ul>
    </WorkStyle>
  )
}