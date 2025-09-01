import styled from "styled-components";
import { down } from "styled-breakpoints";

export const FooterStyle = styled.div`
  &.footer {
    position: relative;
    .footer-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 96px;
      padding-top: 20px;
      padding-bottom: 48px;
      
      .socials-wrapper {
        display: flex;
        justify-content: center;
        
        .socials {
          display: flex;
          gap: 20px;
          
          .network {
            display: inline-block;
            width: fit-content;
            height: 23px;
            
            svg, img {
              width: auto;
              height: 23px;
              transition: all .25s cubic-bezier(0.61, 1, 0.88, 1);
            }
            
            svg path {
              fill: white;
            }
            
            &:hover {
              svg path {
                fill: var(--color-green05);
              }
              
              img {
                filter: brightness(0) saturate(100%) invert(45%) sepia(72%) saturate(476%) hue-rotate(115deg) brightness(96%) contrast(87%);
              }
            }
          }
        }
      }
      
      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${down('sm')} {
          flex-direction: column;
          align-items: flex-start;
          gap: 96px;
        }
        .buried {
          display: flex;
          gap: 50px;
          ${down('sm')} {
            flex-direction: column;
            align-items: flex-start;
            gap: 26px;
          }
          a {
            transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
            &:hover {
              color: var(--color-green04) !important;
              transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
            }
          }
        }
      }
      .infos {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        ${down('sm')} {
          flex-direction: column;
          align-items: flex-start;
          gap: 96px;
        }
        .legal {
          display: flex;
          flex-direction: column;
          gap: 16px;
          a {
            transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
            &:hover {
              color: var(--color-green04) !important;
              transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
            }
          }
          .copyright {
            color: #626262 !important;
            a {
              color: #626262 !important;
              text-decoration: underline;
              transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
              &:hover {
                color: var(--color-green04) !important;
                transition: color .25s cubic-bezier(0.61, 1, 0.88, 1);
              }
            }
          }
        }
        .logo {
          width: 90px;
          svg {
            path {
              transition: fill .25s cubic-bezier(0.61, 1, 0.88, 1);
            }
          }
          &:hover {
            svg {
              path {
                fill: var(--color-green04);
                transition: fill .25s cubic-bezier(0.61, 1, 0.88, 1);
              }
            }
          }
        }
      }
    }
  }
`