// Styles
import { PopupStyle } from "./index.style"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
// Icons
import MoreIcon from "@/components/icons/More"
import { useEffect } from "react"

export default function Popup({ children, className = '', titleButton, ...props }) {
  // Hooks
  const [opened, setOpened] = useToggle(false) 
  // Store
  const [popupOpen] = useStore((state) => [state.popupOpen])
  // Effects
  useEffect(() => {
    if (!popupOpen) {    
      setOpened(popupOpen)
    }
  }, [popupOpen])
  // Functions
  const onClickButton = () => {
    setOpened(!opened)
    useStore.setState({ popupOpen: !opened, scroll: opened })
  }
  return (
    <PopupStyle { ...props } className={ `${ className } popup` }>
      <div className={ `button-modal-container button-modal-container-open${ opened ? ' is-open' : '' }` }>
        <button className="button-modal" onClick={ onClickButton }>
          <MoreIcon />
          <div className="panel-button-transition" />
        </button>
        <p className="typography-02">{ titleButton }</p>
      </div>
      <div className={ `panel-modal-container${ opened ? ' is-open' : '' }` }>
        <div className="panel-modal">
          <div className="children-container">
            { children }
            <div className={ `button-modal-container button-modal-container-close${ opened ? ' is-open' : '' }` }>
              <button className="button-modal" onClick={ onClickButton }>
                <MoreIcon />
              </button>
              <p className="typography-02">Close</p>
            </div>
          </div>
        </div>
      </div>
    </PopupStyle>
  )
}