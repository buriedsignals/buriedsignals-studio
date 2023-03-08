// Styles
import { SpanGradientStyle } from "./index.style"

export default function SpanGradient({ children, hover = false, revert = false, theme = "light", ...props }) {
  return (
    <SpanGradientStyle className={ `${ hover ? 'can-hover' : '' } ${ revert ? 'is-revert' : '' }  ${ theme == 'light' ? 'light' : 'dark' }` }>
      { children }
      { hover && <div className="underline"></div> }
    </SpanGradientStyle>
  )
}