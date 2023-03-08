// Styles
import { LogoSimpleStyle } from "./index.style"

export default function LogoSimple({ colored = true, ...props }) {
  return (
    <LogoSimpleStyle className={ `${ colored ? 'is-colored' : '' }` } { ...props } width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.05084 13.6289L7.05083 6.18636L20.1868 23.9169L14.6761 23.9169L7.05084 13.6289Z" fill="#6AE0AD"/>
      <path d="M29.8201 13.023L29.8201 20.2485L16.6606 2.62084L22.0974 2.62085L29.8201 13.023Z" fill="#408466"/>
      <path d="M28.9563 23.9165L23.5199 23.9165L7.70863 2.61746L13.1192 2.61746L28.9563 23.9165Z" fill="#5AC496"/>
      <rect y="2.62061" width="4.3703" height="21.2899" fill="#71F2BA"/>
      <rect x="32.4995" y="2.62061" width="4.3703" height="21.2899" fill="#377A5D"/>
    </LogoSimpleStyle>
  )
}