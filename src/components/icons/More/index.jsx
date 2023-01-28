// Styles
import { MoreStyle } from "./index.style"

export default function More({ ...props }) {
  return (
    <MoreStyle { ...props } width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6218 0.934082H17.4016V29.606H12.6218V0.934082Z" fill="#5AC396"/>
      <path d="M9.59033 12.8801V17.6599H0.675781L0.675781 12.8801H9.59033Z" fill="#71F2BA"/>
      <path d="M29.3477 12.8801V17.6599H20.6935V12.8801H29.3477Z" fill="#377A5D"/>
    </MoreStyle>
  )
}