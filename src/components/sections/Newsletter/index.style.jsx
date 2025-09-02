import styled from "styled-components";
import { down } from "styled-breakpoints";

export const NewsletterStyle = styled.div`
  position: relative;
  padding: 80px 0;
  
  .newsletter-content {
    position: relative;
    background: #a0ffcc;
    padding: 10vh 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    &::after {
      position: absolute;
      bottom: -1px;
      right: -1px;
      content: "";
      display: inline-block;
      height: 0px;
      width: 0px;
      border-bottom: 35px solid #000000;
      border-left: 35px solid transparent;
    }
    
    ${down('md')} {
      padding: 10vh 30px;
      gap: 4vh;
      
      &::after {
        border-bottom: 30px solid #000000;
        border-left: 30px solid transparent;
      }
    }
    
    ${down('xs')} {
      padding: 10vh 30px;
      gap: 4vh;

      &::after {
        border-bottom: 25px solid #000000;
        border-left: 25px solid transparent;
      }
    }
    
    .logo-container {
      .newsletter-logo {
        height: 60px;
        width: auto;
        filter: brightness(0);
        
        ${down('md')} {
          height: 50px;
        }
      }
    }
    
    .details {
      max-width: 700px;
      margin-bottom: 37.5px;
      color: #1c1e1f !important;
      text-align: center;
      
      .typography-09 {
        font-family: 'Space Grotesk', sans-serif !important;
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 42px;
        margin: 0;
        color: #1c1e1f !important;
        
        ${down('md')} {
          font-size: 22px;
          line-height: 120%;
        }
      }
      
      p {
        color: #1c1e1f !important;
      }
    }
    
    .subscribe-link {
      position: relative;
      display: flex;
      align-items: center;
      height: fit-content;
      margin: 0px auto;
      text-decoration: none;
      color: #1c1e1f !important;
      border-radius: 4px;
      text-transform: capitalize;
      white-space: nowrap;
      transition: color 0.25s linear;
      
      .typography-08 {
        font-family: 'Space Grotesk', sans-serif !important;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        margin: 0;
        color: #1c1e1f !important;
        transition: 0.25s linear;
        
        ${down('md')} {
          font-size: 20px;
        }
      }
      
      p {
        color: #1c1e1f !important;
        transition: 0.25s linear;
      }
      
      &:before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -7.5px;
        width: 100%;
        height: 2.5px;
        background-color: #1c1e1f;
        transform-origin: 100% 50%;
        transform: scaleX(1);
        transition: 0.25s linear 0.125s;
      }
      
      &:after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -7.5px;
        width: 100%;
        height: 2.5px;
        background-color: #1c1e1f;
        transform-origin: 0px 50%;
        transform: scaleX(0);
        transition: 0.25s linear;
      }
      
      &:hover {        
        .typography-08 {
          color: #fff !important;
        }
        
        p {
          color: #fff !important;
        }
        
        &:before {
          transform: scaleX(0);
          background-color: #fff;
        }
        
        &:after {
          transform: scaleX(1);
          background-color: #fff;
        }
      }
    }
  }
`