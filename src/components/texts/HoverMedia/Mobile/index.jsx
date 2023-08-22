// Styles
import { HoverMediaMobileStyle } from "./index.style"
// React
import { useState } from "react";
// Hooks
import useStore from "@/hooks/useStore";
import useToggle from "@/hooks/useToggle";
import ExternalLinkIcon from "@/components/icons/ExternalLink";

export default function HoverMediaMobile({ children, media, ...props }) {
  // State// Hooks
  const [opened, setOpened] = useToggle(false) 
  const [link, setLink] = useState()
  // Store
  const [popupOpen] = useStore((state) => [state.popupOpen])
  // Handlers
  const onClickOpen = (e) => {
    if (!opened) {
      e.preventDefault()
      setLink(children.props.href)
      setOpened(true)
      useStore.setState({ scroll: false })
    }
  }
  const onClickClose = (e) => {
    e.stopPropagation()
    setOpened(false)
    useStore.setState({ scroll: true })
  }
  return (
    <HoverMediaMobileStyle className="media-hover-container" { ...props } onClick={ onClickOpen }>
      { children }
      <div className={ `panel ${ opened ? ' is-open' : '' }` }>
        <div className="background" onClick={ onClickClose }></div>
        { media.type == "image" && <img className="media-hover" src={ media.src } alt={ media.alt } /> }
        { media.type == "video" && <video className="media-hover" src={ media.src } autoPlay loop muted playsInline /> }
        <div className="actions">
          <button onClick={ onClickClose }>
            <div className="link-container">
              <p className="typography-02">Close</p>
            </div>
          </button>
          { link && <a href={ link } target="_blank" rel="noopener noreferrer" onClick={ onClickClose }>
            <div className="link-container external-link">
              <p className="typography-02">Visit <ExternalLinkIcon /></p>
            </div>
          </a> }
        </div>
      </div>
    </HoverMediaMobileStyle>
  )
}