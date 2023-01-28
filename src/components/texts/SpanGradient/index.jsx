// Styles
import { SpanGradientStyle } from "./index.style"

export default function SpanGradient({ children, hover = false, ...props }) {
  return (
    <SpanGradientStyle className={ `${ hover ? 'can-hover' : '' }` }>
      { children }
      { hover && <div className="underline"></div> }
    </SpanGradientStyle>
  )
}