// Styles
import { WorkStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useGradientColor from "@/hooks/useGradientColor"
//Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
import HoverMediaText from "@/components/texts/HoverMedia"
// Icons
import Arrow02Icon from "@/components/icons/Arrow02"
import Section from "@/components/modules/Section"
import OnuIcon from "@/components/icons/Onu"
import QuatarFondationIcon from "@/components/icons/QuatarFondation"
import RedbullIcon from "@/components/icons/Redbull"
import OfpeaceIcon from "@/components/icons/Ofpeace"
import AlephIcon from "@/components/icons/Aleph"
// import TagIcon from "@/components/icons/Tag"
import FirstClimateIcon from "@/components/icons/FirstClimate"
// import NzzIcon from "@/components/icons/Nzz"

const projects = [
  {
    name: "Website Design & Visualization",
    media: {
      type: "image",
      src: "./images/img-project-firstclimate.png",
      alt: "Cover image of the project First Climate"
    },
    infos: {
      description: "Biochar producer landing page and web app design with knowledge visualization for",
      provider: "First Climate"
    }
  },{
    link: "https://linesofcontrol.com/",
    name: "Interactive Documentary",
    media: {
      type: "video",
      src: "./videos/video-project-lines.mp4",
    },
    infos: {
      description: "An interactive web documentary in partnership with",
      provider: "Stand With Kashmir"
    }
  },
  {
    link: "https://yementribute.com/",
    name: "Visual Essay",
    media: {
      type: "video",
      src: "./videos/video-project-yemen.mp4",
    },
    infos: {
      description: "Visualising investigative data with mapping and editorial alongside",
      provider: "The Yemen Foundation"
    }
  },
  {
    link: "https://buried-signals.medium.com/report-design-for-talent-acquisition-group-e9b603ebf125",
    name: "Report Design",
    media: {
      type: "image",
      src: "./images/img-project-tag.png",
      alt: "Cover image of the project Talent Search"
    },
    infos: {
      description: "Information design and data visualization in a PDF report for",
      provider: "Talent Acquisition Group"
    }
  },
  {
    link: "https://gather.seedsofpeace.org/",
    name: "NGO Promo Film & Website",
    media: {
      type: "video",
      src: "./videos/video-project-gather.mp4",
    },
    infos: {
      description: "An NGO promotion video using archived footage, with website design and development",
      provider: "Seeds of Peace"
    }
  },
  {
    name: "NGO Data-led Experience",
    media: {
      type: "video",
      src: "./videos/video-project-qf.mp4",
    },
    infos: {
      description: "Information design and data visualization for Immersive Garden and the",
      provider: "Qatar Foundation"
    }
  },
  {
    name: "Explanatory Video Animation",
    media: {
      type: "video",
      src: "./videos/video-project-aleph.mp4",
    },
    infos: {
      description: "A animated explanatory video of the company's strategy using data",
      provider: "Aleph"
    }
  },
  {
    link: "https://www.youtube.com/watch?v=IhYN0Ayo0i0",
    name: "Wallrunners of Gaza",
    media: {
      type: "video",
      src: "./videos/video-project-kapture.mp4",
    },
    infos: {
      description: "Web documentary about the history of parkour in Gaza",
      provider: "Red Bull"
    }
  }
]

const clients = [
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <OnuIcon />)(),
    // widthIcon: "74px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <QuatarFondationIcon />)(),
    // widthIcon: "191px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <RedbullIcon />)(),
    // widthIcon: "101px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <OfpeaceIcon />)(),
    // widthIcon: "140px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <FirstClimateIcon />)(),
    // widthIcon: "126px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <AlephIcon />)(),
    // widthIcon: "166px"
  }
]

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
        <TitleFirstIconText>What we've done</TitleFirstIconText>
        <ul className="projects">
          { projects.map((project, index) => {
            return (
              <li className="project" key={ index }>
                { project.link ? 
                  <HoverMediaText media={ project.media }>
                    <a className="datas-container" href={ project.link } target="_blank" rel="noopener noreferrer" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                      <div className="datas">
                        <p className="name typography-03">{ project.name }</p>
                        <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                      </div>
                      <Arrow02Icon />
                    </a>
                  </HoverMediaText>
                  :
                  <HoverMediaText media={ project.media }>
                    <div className="datas-container no-link"  onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                        <div className="datas">
                          <p className="name typography-03">{ project.name }</p>
                          <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
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
          <h3 className="typography-04">They trusted us</h3>
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