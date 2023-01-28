// Styles
import { GraphStyle } from "./index.style"

export default function Graph({ ...props }) {
  return (
    <GraphStyle { ...props } width="86" height="110" viewBox="0 0 86 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.520512 109.196L0.520508 8.58239H11.1118L11.1118 109.196H0.520512Z" fill="#71F2BA"/>
      <path d="M74.8877 109.196V24.1522H85.479V109.196H74.8877Z" fill="#377A5D"/>
      <path d="M19.1123 109.196L19.1123 21.9279H29.7036L29.7036 109.196H19.1123Z" fill="#6AE0AD"/>
      <path d="M37.7041 109.196L37.7041 51.0698H48.2954L48.2954 109.196H37.7041Z" fill="#5AC396"/>
      <path d="M56.2959 109.196L56.2959 0.419922L66.8872 0.419922V109.196H56.2959Z" fill="#4C9A78"/>
    </GraphStyle>
  )
}