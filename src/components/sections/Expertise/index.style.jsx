import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ExpertiseStyle = styled.div`
  .expertise-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;
    ${down('md')} {
      align-items: flex-end;
      width: fit-content;
    }
    .studio-container {
      max-width: 498px;
      ${down('md')} {
        max-width: 100%;
      }
      p {
        padding: 35px 0 0 68px;
        ${down('md')} {
          padding: 35px 0 80px;
        }
      }
    }
    .studio-popup {
      .button-container-popup {
        position: absolute;
        bottom: 10%; right: 7.5%;
        ${down('md')} {
          top: initial !important;            
          right: 30px !important;
          left: initial !important;
        }
        &.open-button-container-popup {
          ${down('md')} {
            bottom: -30px !important; 
          }
        }
        &.close-button-container-popup {
          ${down('md')} {
            bottom: 30px !important; 
          }
        }
        p {
          ${down('md')} {
            max-width: 144px;
          }
        }
      }
      .title-first-icon {
        color: var(--color-white);
      }
      .accordion {
        &:last-child {
          .button-container {
            &::before {
              opacity: 1;
              transition: opacity 0.2s ease 0.75s;
            }
            &.is-active {
              &::before {
                opacity: 0;
                transition: opacity 0.2s ease 0.75s;
              }
            }
          }
        }
      }
    }
  }
  .client-container {
    padding-top: 100px;
    padding-bottom: 30px;
    h3 {
      padding: 100px 0 64px;
      text-align: center;
    }
    .clients {
      display: flex;
      justify-content: center;
      align-items: baseline;
      column-gap: 107px;
      ${down('md')} {
        flex-wrap: wrap;
        gap: 75px;
      }
      .client {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 243px;
        p {
          padding-top: 27px;
          text-align: center;
        }
      }
    }
  }
`