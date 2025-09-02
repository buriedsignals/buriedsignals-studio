import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HomeStyle = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  z-index: 1;
  ${down('xs')} {
    height: calc(80vh - 100px) !important;
  }
  .logo-container {
    position: absolute;
    top: 30px;
    left: 0px;
    z-index: 10;
    .bs-logo {
      height: 40px;
      width: auto;
      ${down('md')} {
        height: 35px;
      }
    }
  }
  
  .header-about-link-container {
    position: absolute;
    top: 30px;
    right: 0px;
    z-index: 10;
    pointer-events: auto;
    
    .header-about-link {
      position: relative;
      display: flex;
      align-items: center;
      height: fit-content;
      text-decoration: none;
      color: #666666 !important;
      border-radius: 4px;
      text-transform: capitalize;
      white-space: nowrap;
      transition: color 0.25s linear;
      cursor: pointer !important;
      padding: 8px;
      
      .typography-08 {
        font-family: 'Inter', sans-serif !important;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        margin: 0;
        color: #666666 !important;
        transition: 0.25s linear;
      }
      
      p {
        color: #666666 !important;
        transition: 0.25s linear;
      }
      
      &:before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -3px;
        width: 100%;
        height: 2.5px;
        background-color: #666666;
        transform-origin: 100% 50%;
        transform: scaleX(1);
        transition: 0.25s linear 0.125s;
      }
      
      &:after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -3px;
        width: 100%;
        height: 2.5px;
        background-color: #000000;
        transform-origin: 0px 50%;
        transform: scaleX(0);
        transition: 0.25s linear;
      }
      
      &:hover {        
        .typography-08 {
          color: #000000 !important;
        }
        
        p {
          color: #000000 !important;
        }
        
        &:before {
          transform: scaleX(0);
        }
        
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
  
  .titles {
    position: relative;
    width: 100%;
    padding-top: 150px;
    max-width: 100%;
  }
  h1 {
    padding-bottom: 30px;
    max-width: 100%;
    .media-hover-container {
      display: inline-block;
    }
  }
  h2 {
    width: 100%;
  }
  .visualization-popup {
    .button-container-popup {
      position: absolute;
      bottom: 10%; right: 7.5%;
      ${down('md')} {
        top: initial !important;
        right: 30px !important;
        bottom: 30px !important; 
        left: initial !important;
      }
    }
    .pricing {
      padding-bottom: 35px;
      ${down('md')} {
        padding-bottom: 17.5px;
      }
    }
    .panel-container-popup .children-container-popup {
      max-width: 425px;
    }
    .description-visualization-popup {
      display: flex;
      justify-content: space-between;
      gap: 62px;
    }
    .button-container-popup.open-button-container-popup {
      p {
        opacity: 0;          
        transform: translate3D(-20px, 0, 0);
      }
      .open-button-popup {
        .circle-before {
          transform: translate3D(-50%, -50%, 0) scale3D(0,0,0);
        }
        .circle-after {
          transform: translate3D(-50%, -50%, 0) scale3D(0,0,0);
        }
        svg {
          opacity: 0;
          transform: translate3D(-50%, -50%, 0) rotate3D(0,0,1, -189deg);
        }
      }
    }
  }
`