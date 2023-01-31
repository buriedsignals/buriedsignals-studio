// Styles
import { PopupStyle } from "./index.style"
// React
import { useEffect, useRef, useState } from "react"
// Hooks
import useToggle from "@/hooks/useToggle"
import useStore from "@/hooks/useStore"
import useTheme from "@/hooks/useTheme"
// Icons
import MoreIcon from "@/components/icons/More"
import gsap, { TweenMax } from "gsap"

export default function Popup({ children, className = '', titleButton, callBackButtonPopup = false, ...props }) {
  // Hooks
  const [opened, setOpened] = useToggle(false) 
  const [getTheme, setTheme] = useTheme()
  // References
  const closeButtonContainerRef = useRef()
  // Store
  const [popupOpen] = useStore((state) => [state.popupOpen])
  // Effects
  useEffect(() => {
    if (!popupOpen) {    
      setOpened(popupOpen)
    }
    if (!popupOpen) {
      setTimeout(() => {
        setTheme('light')
      }, 1200)
    } else {
      setTimeout(() => {
        setTheme('dark')
      }, 1000)
    }
  }, [popupOpen])
  useEffect(() => {
    callBackButtonPopup && onClickButton()
  }, [callBackButtonPopup])
  // Functions
  const onClickButton = (e) => {
    if (e && e.target.parentNode.classList.contains('open-button-container-popup')) {
      const bounding = e.target.getBoundingClientRect()
      closeButtonContainerRef.current.style.top = `${ bounding.y }px`
      closeButtonContainerRef.current.style.left = `${ bounding.x }px`
    }
    setOpened(!opened)
    useStore.setState({ popupOpen: !opened, scroll: opened })
    if (opened) {
      setTimeout(() => {
        setTheme('light')
      }, 1200)
    } else {
      setTimeout(() => {
        setTheme('dark')
      }, 1000)
    }
    const timeline = new gsap.timeline()
    e && timeline.set(e.target.querySelector('svg'), { x: '-50%', y: '-50%' })
    return () => {
      timeline.kill()
    }
  }
  const onMouseMoveButton = (e) => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    if (check) {
      return
    }
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY
    }
    const icon = e.target.querySelector('svg')
    if (icon) {
      const iconBounding = icon.getBoundingClientRect()
      const triggerDistance = iconBounding.width
      const targetPosition = {
        left: iconBounding.left + iconBounding.width / 2,
        top: iconBounding.top + iconBounding.height / 2
      }
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      }
      const angle = Math.atan2(distance.x, distance.y)
      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      )
      const timeline = new gsap.timeline()
      timeline.to(icon, 0.2, { 
        x: -((Math.sin(angle) * hypotenuse) / 2) - iconBounding.width / 2,
        y: -((Math.cos(angle) * hypotenuse) / 2) - iconBounding.height / 2
      })
    }
  }
  const onMouseLeaveButton = (e) => {
    const timeline = new gsap.timeline()
    timeline.to(e.target.querySelector('svg'), 0.2, { x: '-50%', y: '-50%' }, '+=0.225')
  }
  return (
    <PopupStyle { ...props } className={ `${ className } popup ${ opened ? ' is-open' : '' }` }>
      <div className="open-button-container-popup button-container-popup">
        <button className="open-button-popup button-popup" onClick={ onClickButton } onMouseMove={ onMouseMoveButton } onMouseLeave={ onMouseLeaveButton }>
          <div className="circle circle-before" />
          <div className="circle circle-after" />
          <MoreIcon />
          <div className="transition-container-popup" />
        </button>
        <p className="typography-02">{ titleButton }</p>
      </div>
      <div className="panel-container-popup theme-dark">
        <div ref={ closeButtonContainerRef } className="close-button-container-popup button-container-popup">
          <button className="close-button-popup button-popup" onClick={ onClickButton } onMouseMove={ onMouseMoveButton } onMouseLeave={ onMouseLeaveButton }>
            <div className="circle circle-before" />
            <div className="circle circle-after" />
            <MoreIcon />
          </button>
          <p className="typography-02">Close</p>
        </div>
        <div className="container-module-large">
          <div className="children-container-popup">
            { children }
          </div>
        </div>
      </div>
    </PopupStyle>
  )
}