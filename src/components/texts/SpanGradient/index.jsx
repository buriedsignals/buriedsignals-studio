// Styles
import { SpanGradientStyle } from "./index.style"

export default function SpanGradient({ children, hover = false, revert = false, ...props }) {
  return (
    <SpanGradientStyle className={ `${ hover ? 'can-hover' : '' } ${ revert ? 'is-revert' : '' }` }>
      { children }
      { hover && <div className="underline"></div> }
    </SpanGradientStyle>
  )
}