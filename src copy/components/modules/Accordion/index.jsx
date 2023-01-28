// Styles
import { AccordionStyle } from "./index.style"
// React
import { useEffect, useState } from "react"
// Hooks
import useStore from "@/hooks/useStore"
// Texts
import TitleFirstIconText from "@/components/texts/TitleFirstIcon"
// Icons
import ArrowIcon from "@/components/icons/Arrow"

export default function Accordion({ children, titleButton, opened = false, ...props }) {
  // States
  const [idAccordion, setIdAccordion] = useState(Math.floor(Math.random() * 100))
  // Store
  const [accordionsOpen] = useStore((state) => [state.accordionsOpen])
  // Effects
  useEffect(() => {
    let id = idAccordion
    while (accordionsOpen.hasOwnProperty(id)) {
      id = Math.floor(Math.random() * 100)
    }
    setIdAccordion(id)
    const newAccordionsOpen = accordionsOpen
    newAccordionsOpen[id] = opened
    useStore.setState({ accordionsOpen: newAccordionsOpen })
  }, [])
  // Functions
  const onClickButton = () => {
    const newAccordionsOpen = accordionsOpen
    for (const property in newAccordionsOpen) {
      newAccordionsOpen[property] = false
    }
    newAccordionsOpen[idAccordion] = !newAccordionsOpen[idAccordion]
    useStore.setState({ accordionsOpen: newAccordionsOpen })
  }
  return (
    <AccordionStyle { ...props } className="accordion">
      <button className={ `button-container${ accordionsOpen[idAccordion] ? ' is-active' : ''}` } onClick={ onClickButton } >
        <TitleFirstIconText letterColored={ false }>{ titleButton }</TitleFirstIconText>
        <ArrowIcon />
      </button>
      <div className={ `panel-container${ accordionsOpen[idAccordion] ? ' is-active' : '' }` }>
        { children }
      </div>
    </AccordionStyle>
  )
}