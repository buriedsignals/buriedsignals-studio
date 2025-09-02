// Styles
import { VideosStyle } from "./index.style"
// Modules
import Section from "@/components/modules/Section"
// Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"

const videos = [
  "https://www.youtube.com/embed/0OhlEgf_lew",
  "https://www.youtube.com/embed/PnNuV4UNJiQ",
  "https://www.youtube.com/embed/7iFOjVrf7Xg"
]

export default function Videos({ ...props }) {
  return (
    <Section className="section-dark">
      <VideosStyle { ...props } id="videos" className="container-module-large">
        <h2 className="typography-05">Latest video investigations 📹</h2>
        <div className="videos-grid">
          { videos.map((videoUrl, index) => {
            return (
              <div className="video-item" key={ index }>
                <div className="video-embed">
                  <iframe
                    src={videoUrl}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )
          }) }
        </div>
      </VideosStyle>
    </Section>
  )
}