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
import TheBureauInvestigatesIcon from "@/components/icons/TheBureauInvestigates"
import TwentyIcon from "@/components/icons/Twenty"
import NzzIcon from "@/components/icons/Nzz"
import GristIcon from "@/components/icons/Grist"
import PulitzerIcon from "@/components/icons/Pulitzer"
import PuddingIcon from "@/components/icons/Pudding"

const projects = [
  {
    link: "https://www.nzz.ch/wissenschaft/klimawandel-wasserschloss-schweiz-bis-2075-eine-visualisierung-der-auswirkungen-ld.1848954",
    name: "Visual Journalism",
    media: {
      type: "video",
      src: "./videos/video-project-nzz.mp4",
      alt: "Cover video of the NZZ Swiss climate story."
    },
    infos: {
      description: "Concept, cartography and spatial data analysis in a story for",
      provider: "NZZ"
    }
  },{
    link: "https://pudding.cool/2024/07/sleep-training/",
    name: "Visual Journalism",
    media: {
      type: "video",
      src: "./videos/video-project-sleep.mp4",
      alt: "Cover video of the Pudding sleep training project."
    },
    infos: {
      description: "Visual data-driven essay on sleep training for",
      provider: "The Pudding"
    }
  },{
    link: "https://buried-signals.medium.com/case-study-animated-map-scrollytelling-for-the-who-2c93fa7cda63",
    name: "Interactive Case Study",
    media: {
      type: "video",
      src: "./videos/video-project-polio.mp4",
      alt: "Cover video of the project Polio Eradication"
    },
    infos: {
      description: "Animated cartography and scrollytelling on polio eradication for the",
      provider: "WHO"
    }
  },{
    link: "https://buried-signals.medium.com/case-study-interactive-impact-report-for-seeds-of-peaces-30th-anniversary-0471938e2794",
    name: "Interactive Impact Report",
    media: {
      type: "video",
      src: "./videos/video-project-sop.mp4",
      alt: "Cover video of the project Seeds of Peace"
    },
    infos: {
      description: "Interactive and static impact reports for",
      provider: "Seeds of Peace"
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
    link: "https://yemen.tomvaillant.com/",
    name: "Visual Investigation",
    media: {
      type: "video",
      src: "./videos/video-project-yemen.mp4",
    },
    infos: {
      description: "Visualising investigative data with mapping and editorial alongside",
      provider: "The Yemen Foundation"
    }
  },{
    link: "https://www.thebureauinvestigates.com/stories/2023-07-31/the-sunshine-millionaire-how-one-man-took-130m-from-british-taxpayers?x-craft-preview=aY5cgBAy38&token=mO8ih9rfD0pUeYQin_X5lfCXAKvwMnaf",
    name: "Editorial Visualization",
    media: {
      type: "video",
      src: "./videos/video-project-tbij.mp4",
      alt: "Animated scroll illustration of a tax fraud scheme"
    },
    infos: {
      description: "Illustration and scrollytelling for an investigation on tax fraud by",
      provider: "The Bureau Investigates"
    }
  },
  {
    link: "https://www.youtube.com/watch?v=IhYN0Ayo0i0",
    name: "Film Documentary",
    media: {
      type: "video",
      src: "./videos/video-project-kapture.mp4",
    },
    infos: {
      description: "Web documentary about the history of parkour in Gaza for",
      provider: "Red Bull"
    }
  }
]

const clients = [
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <TwentyIcon />)(),
    // widthIcon: "74px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <GristIcon />)(),
    // widthIcon: "191px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <NzzIcon />)(),
    // widthIcon: "101px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <PulitzerIcon />)(),
    // widthIcon: "140px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <PuddingIcon />)(),
    // widthIcon: "126px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <TheBureauInvestigatesIcon />)(),
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
        <TitleFirstIconText>Work I've produced</TitleFirstIconText>
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
          <h3 className="typography-04">They trusted me</h3>
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