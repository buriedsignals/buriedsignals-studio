// Styles
import useTheme from "@/hooks/useTheme"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
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
    if (!sectionRef.current) return;
    
    const posYStart = sectionRef.current.offsetTop - (sectionRef.current.offsetHeight / 2)
    const posYEnd = sectionRef.current.offsetTop + (sectionRef.current.offsetHeight / 2)
    
    const handleScroll = (e) => {
      if (!sectionRef.current) return;
      
      if (window.scrollY >= (sectionRef.current.offsetTop - 66) && window.scrollY <= (sectionRef.current.offsetTop + sectionRef.current.offsetHeight - 66)) {
        if (sectionRef.current.firstChild && (sectionRef.current.firstChild.id === 'work' || sectionRef.current.firstChild.id === 'contact' || sectionRef.current.firstChild.id === 'videos')) {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }
      if (window.scrollY >= posYStart && window.scrollY <= posYEnd) {
        const pageEls = document.querySelectorAll('.header .page')
        pageEls.forEach(pageEl => {
          const link = pageEl.querySelector('a')
          if (link) {
            link.classList.remove('is-active')
            const split = link.href.split('/')
            const id = split[split.length - 1] == '' ? '#' : split[split.length - 1]
            if (sectionRef.current?.firstChild && id === '#' + sectionRef.current.firstChild.id) {
              link.classList.add('is-active')
            }
          }
        })
      } else if (window.scrollY >= (document.querySelector('.layout')?.getBoundingClientRect().height - window.innerHeight) - 20) {  
        const pageEls = document.querySelectorAll('.header .page')
        pageEls.forEach(pageEl => {
          const link = pageEl.querySelector('a')
          if (link) {
            link.classList.remove('is-active')
            const split = link.href.split('/')
            const id = split[split.length - 1] == '' ? '#home' : split[split.length - 1]
            if (id === '#contact') {
              link.classList.add('is-active')
            }
          }
        })
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
  const isDark = className?.includes('section-dark')
  const wrapperClass = isDark ? 'site-wrapper-dark' : 'site-wrapper'
  
  return (
    <SectionStyle ref={ sectionRef } className={ className } { ...props }>
      <div className={ wrapperClass }>
        { children }
      </div>
    </SectionStyle>
  )
}