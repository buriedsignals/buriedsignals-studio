// Styles
import { WorkStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useGradientColor from "@/hooks/useGradientColor"
// Modules
import Section from "@/components/modules/Section"
//Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
import HoverMediaText from "@/components/texts/HoverMedia"
// Icons
import Arrow02Icon from "@/components/icons/Arrow02"
// Data
import { projects } from "@/data/projects"
import { clients } from "@/data/clients"


export default function Work({ ...props }) {
  const colors = useGradientColor("#60d09f", "#377A5D", projects.length)
  // Handlers
  const onMouseEnter = (e, index) => {
    e.currentTarget.style.background = colors[index]
    e.currentTarget.classList.add('is-hover')
  }
  const onMouseLeave = (e) => {
    e.currentTarget.style.background = "inherit"
    e.currentTarget.classList.remove('is-hover')
  }
  return (
    <Section className="section-dark">
      <WorkStyle { ...props } id="work" className="container-module-large">
        <h2 className="typography-05">Data stories you can explore 📊</h2>
        <ul className="projects">
          { projects.map((project, index) => {
            return (
              <li className="project" key={ index }>
                { project.link ? 
                  <HoverMediaText media={ project.media }>
                    <a className="datas-container" href={ project.link } target="_blank" rel="noopener noreferrer" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                      <div className="datas">
                        <p className="name typography-03">{ project.name }</p>
                        <p className="infos typography-06">{ project.infos.description }</p>
                      </div>
                      <Arrow02Icon />
                    </a>
                  </HoverMediaText>
                  :
                  <HoverMediaText media={ project.media }>
                    <div className="datas-container no-link"  onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                        <div className="datas">
                          <p className="name typography-03">{ project.name }</p>
                          <p className="infos typography-06">{ project.infos.description }</p>
                        </div>
                        <Arrow02Icon />
                    </div>
                  </HoverMediaText>
                }
              </li>
            )
          }) }
        </ul>
        <div className="trust">
          <h3 className="typography-05">I&apos;ve worked with 🤝</h3>
          <ul className="clients">
            { clients.map((client, index) => {
              return (
                <li className="client" key={ index }>
                  <div className="datas-container">
                    { client.icon }
                    {/* <img src={ client.icon } style={{ maxWidth: client.widthIcon }} /> */}
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      </WorkStyle>
    </Section>
  )
}