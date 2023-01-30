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
  }, [popupOpen])
  useEffect(() => {
    callBackButtonPopup && onClickButton()
  }, [callBackButtonPopup])
  // Functions
  const onClickButton = (e) => {
    console.log('ok')
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
    e && timeline.set(e.target.querySelector('svg'), { x: 0, y: 0 })
  }
  const onMouseMoveButton = (e) => {
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
        x: -((Math.sin(angle) * hypotenuse) / 2),
        y: -((Math.cos(angle) * hypotenuse) / 2)
      })
    }
  }
  const onMouseLeaveButton = (e) => {
    const timeline = new gsap.timeline()
    timeline.to(e.target.querySelector('svg'), 0.2, { x: 0, y: 0 }, '+=0.225')
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