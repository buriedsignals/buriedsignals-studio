import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ExpertiseStyle = styled.div`
  position: relative;
  padding-bottom: 100px;
  .expertise-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;
    ${down('md')} {
      align-items: flex-start;
      width: 100%;
    }
    .studio-container {
      max-width: 498px;
      ${down('md')} {
        max-width: 100%;
      }
      p {
        position: relative;
        padding: 35px 0 0 0;
        ${down('md')} {
          max-width: 498px;
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
            bottom: -80px !important; 
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
    padding-bottom: 30px;
    .title-container {
      text-align: center;
      h3 {
        position: relative;
        display: inline-block;
        padding-top: 40px;
        padding-bottom: 20px;
        text-align: center;
      }
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
        svg {
          position: relative
        }
        p {
          position: relative;
          padding-top: 27px;
          text-align: center;
        }
      }
    }
  }
`