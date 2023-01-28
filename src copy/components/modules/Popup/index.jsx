// Styles
import { PopupStyle } from "./index.style"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Icons
import MoreIcon from "@/components/icons/More"
import { useEffect, useRef } from "react"

export default function Popup({ children, className = '', titleButton, ...props }) {
  // Hooks
  const [opened, setOpened] = useToggle(false) 
  // References
  const closeButtonContainerRef = useRef()
  // Store
  const [popupOpen] = useStore((state) => [state.popupOpen])
  // Effects
  useEffect(() => {
    if (!popupOpen) {    
      setOpened(popupOpen)
    }
  }, [popupOpen])
  // Functions
  const onClickButton = (e) => {
    if (e.target.parentNode.classList.contains('open-button-container-popup')) {
      const bounding = e.target.getBoundingClientRect()
      closeButtonContainerRef.current.style.top = `${ bounding.y }px`
      closeButtonContainerRef.current.style.left = `${ bounding.x }px`
    }
    setOpened(!opened)
    useStore.setState({ popupOpen: !opened, scroll: opened })
  }
  return (
    <PopupStyle { ...props } className={ `${ className } popup ${ opened ? ' is-open' : '' }` }>
      <div className="open-button-container-popup button-container-popup">
        <button className="open-button-popup button-popup" onClick={ onClickButton }>
          <MoreIcon />
          <div className="transition-container-popup" />
        </button>
        <p className="typography-02">{ titleButton }</p>
      </div>
      <div className="panel-container-popup">
        <div ref={ closeButtonContainerRef } className="close-button-container-popup button-container-popup">
          <button className="close-button-popup button-popup" onClick={ onClickButton }>
            <MoreIcon />
          </button>
          <p className="typography-02">Close</p>
        </div>
        <div className="children-container-popup">
          { children }
        </div>
      </div>
    </PopupStyle>
  )
}