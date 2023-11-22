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
// import OnuIcon from "@/components/icons/Onu"
// import QuatarFondationIcon from "@/components/icons/QuatarFondation"
import RedbullIcon from "@/components/icons/Redbull"
import OfpeaceIcon from "@/components/icons/Ofpeace"
// import AlephIcon from "@/components/icons/Aleph"
// import TagIcon from "@/components/icons/Tag"
import FirstClimateIcon from "@/components/icons/FirstClimate"
import WhoIcon from "@/components/icons/Who"
import TheWorldBankIcon from "@/components/icons/TheWorldBank"
import TheBureauInvestigatesIcon from "@/components/icons/TheBureauInvestigates"
// import NzzIcon from "@/components/icons/Nzz"

const projects = [
  {
    link: "https://buried-signals.medium.com/case-study-animated-map-scrollytelling-for-the-who-2c93fa7cda63",
    name: "Interactive Case Study",
    media: {
      type: "video",
      src: "./images/video-project-polio.mp4",
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
      src: "./images/video-project-sop.mp4",
      alt: "Cover video of the project Seeds of Peace"
    },
    infos: {
      description: "Interactive and static impact reports for",
      provider: "Seeds of Peace"
    }
  },
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
    link: "https://yemen.buriedsignals.com/",
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
  }
  {
    name: "Data-led Experience",
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
      description: "A animated explanatory video of the company's strategy using data for",
      provider: "Aleph"
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
    icon: (() => <WhoIcon />)(),
    // widthIcon: "74px"
  },
  {
    // link: "https://linesofcontrol.com/",
    icon: (() => <TheWorldBankIcon />)(),
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
        <TitleFirstIconText>What I've done</TitleFirstIconText>
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