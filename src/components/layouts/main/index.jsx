// Styles
import { MainStyle } from "./index.style"

export default function Main({ children, ...props }) {
  return (
    <MainStyle className="main" { ...props }>
      { children }
    </MainStyle>
  )
}