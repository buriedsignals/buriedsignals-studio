// Styles
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef } from "react"
import { SectionStyle } from "./index.style"

export default function Section({ ...props }) {
  // Router
  const router = useRouter()
  // References
  const sectionRef = useRef()
  // Effects
  useEffect(() => {
    const posYStart = sectionRef.current.offsetTop
    const posYEnd = sectionRef.current.offsetTop + sectionRef.current.offsetHeight
    window.addEventListener("scroll", (e) => {
      if (router.asPath !== "/#expertise") {
        // router.push('/#expertise')
      //   router.push(
      //       {
      //           pathname: '/',
      //           hash: "expertise",
      //       },
      //       undefined,
      //       { scroll: false, shallow: true }
      //  );
      }
      // router.push('#expertise', undefined, { shallow: true })

      if (window.scrollY >= posYStart && window.scrollY <= posYEnd) {
        if (sectionRef.current.id === "home") {
          if (router.asPath !== '') {
            window.location.replace("");
            // router.push('/', undefined, { shallow: true })
          }
        } else {
          if (window.location.pathname !== sectionRef.current.id) {
            window.location.replace(`#${sectionRef.current.id}`);
            // window.location.pathname = `#${sectionRef.current.id}`
          }
        }
      }
    });
  })
  return (
    <SectionStyle ref={ sectionRef } { ...props }>
    </SectionStyle>
  )
}