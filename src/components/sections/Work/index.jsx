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
    name: "First Climate",
    img: {
      src: "./images/img-project-firstclimate.png",
    },
    infos: {
      description: "Biochar producer landing page and web app design for",
      provider: "First Climate"
    }
  },{
    link: "https://linesofcontrol.com/",
    name: "Lines of Control",
    video: {
      src: "./videos/video-project-lines.mp4",
    },
    infos: {
      description: "An interactive web documentary in partnership with",
      provider: "Stand With Kashmir"
    }
  },
  {
    link: "https://yementribute.com/",
    name: "The Yemen Tribute",
    video: {
      src: "./videos/video-project-yemen.mp4",
    },
    infos: {
      description: "Visualising investigative data with mapping and editorial alongside",
      provider: "The Yemen Foundation"
    }
  },
  {
    name: "Talent Search",
    img: {
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
    name: "GATHER Initiative",
    video: {
      src: "./videos/video-project-gather.mp4",
    },
    infos: {
      description: "Branding, website design and film production for",
      provider: "GATHER Foundation"
    }
  },
  {
    name: "QF in Numbers",
    video: {
      src: "./videos/video-project-qf.mp4",
    },
    infos: {
      description: "Information design and data visualization for Immersive Garden and the",
      provider: "Qatar Foundation"
    }
  },
  {
    name: "Investor Presentation Infoviz",
    img: {
      src: "./images/img-project-aleph.png",
      alt: "Cover image of the project Investor Presentation Infoviz"
    },
    infos: {
      description: "Creative direction and information visualization for an investor video and presentation video by",
      provider: "Aleph Group"
    }
  },
  {
    link: "https://www.youtube.com/watch?v=IhYN0Ayo0i0",
    name: "Wallrunners of Gaza",
    video: {
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
  // References
  const imageActiveHover = useRef();
  const mousePos = useRef({ x: 0, y: 0, _x: 0, _y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  // Handlers
  const onMouseEnter = (e, index) => {
    e.target.style.background = colors[index]
    e.target.classList.add('is-hover')
    imageActiveHover.current = e.target.querySelector('.image')
  }
  const onMouseMove = (e) => {
    mousePos.current._x = mousePos.current.x
    mousePos.current._y = mousePos.current.y
    mousePos.current.x = e.clientX
    mousePos.current.y = e.clientY
  }
  const onMouseLeave = (e) => {
    e.target.style.background = "inherit"
    e.target.classList.remove('is-hover')
  }
  // Animate
  const animate = (time) => {
    if (imageActiveHover.current) {
      const imageWidth = imageActiveHover.current.offsetWidth
      const imageHeight = imageActiveHover.current.offsetHeight
      imageActiveHover.current.style.transform = `translate3D(${ lerp(mousePos.current._x, mousePos.current.x, 0.001) - imageWidth / 2 }px, ${ lerp(mousePos.current._y, mousePos.current.y, 0.001) - imageHeight / 2 }px, 0)`
    }

    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }
  // Effects
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  // Functions
  function lerp(start_value, end_value, pct) {
    return (start_value + (end_value - start_value) * pct)
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
                  <a className="datas-container" href={ project.link } target="_blank" rel="noopener noreferrer" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                    <div className="datas">
                      <p className="name typography-03">{ project.name }</p>
                      <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                    </div>
                    <Arrow02Icon />
                    { project.img && <img className="image" src={ project.img.src } alt={ project.img.alt } /> }
                    { project.video && <video className="image" autoPlay loop muted playsInline src={ project.video.src } /> }
                  </a>
                  :
                  <div className="datas-container no-link" onMouseEnter={ (e) => onMouseEnter(e, index) } onMouseLeave={ (e) => onMouseLeave(e) }>
                    <div className="datas">
                      <p className="name typography-03">{ project.name }</p>
                      <p className="infos typography-06">{ project.infos.description } <span className="provider typography-07">{ project.infos.provider }</span></p>
                    </div>
                    <Arrow02Icon />
                    { project.img && <img className="image" src={ project.img.src } alt={ project.img.alt } /> }
                    { project.video && <video className="image" autoPlay loop muted playsInline src={ project.video.src } /> }
                  </div>
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