// Styles
import useTheme from "@/hooks/useTheme"
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef } from "react"
import { SectionStyle } from "./index.style"

export default function Section({ className, children, ...props }) {
  // Router
  const router = useRouter()
  // References
  const sectionRef = useRef()
  // Hooks
  const [getTheme, setTheme] = useTheme()
  // Effects
  useEffect(() => {
    const posYStart = sectionRef.current.offsetTop - (sectionRef.current.offsetHeight / 2)
    const posYEnd = sectionRef.current.offsetTop + (sectionRef.current.offsetHeight / 2)
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= (sectionRef.current.offsetTop - 66) && window.scrollY <= (sectionRef.current.offsetTop + sectionRef.current.offsetHeight - 66)) {
        if (sectionRef.current.firstChild.id === 'work' || sectionRef.current.firstChild.id === 'contact') {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }
      if (window.scrollY >= posYStart && window.scrollY <= posYEnd) {
        const pageEls = document.querySelectorAll('.header .page')
        pageEls.forEach(pageEl => {
          const link = pageEl.querySelector('a')
          link.classList.remove('is-active')
          const split = link.href.split('/')
          const id = split[split.length - 1] == '' ? '#' : split[split.length - 1]
          if (id === '#' + sectionRef.current.firstChild.id) {
            link.classList.add('is-active')
          }
        })
      } else if (window.scrollY >= (document.querySelector('.layout').getBoundingClientRect().height - window.innerHeight) - 20) {  
        const pageEls = document.querySelectorAll('.header .page')
        pageEls.forEach(pageEl => {
          const link = pageEl.querySelector('a')
          link.classList.remove('is-active')
          const split = link.href.split('/')
          const id = split[split.length - 1] == '' ? '#home' : split[split.length - 1]
          if (id === '#contact') {
            link.classList.add('is-active')
          }
        })
      }
    });
  })
  return (
    <SectionStyle ref={ sectionRef } className={ className } { ...props }>
      { children }
    </SectionStyle>
  )
}