import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 12vw;
  padding-bottom: 15vw;
  ${down('md')} {
    padding-top: 8vw;
    padding-bottom: 20vw;
  }
  p {
    text-align: center;
    font-size: 30px !important;
    ${down('md')} {
      font-size: 22px !important;
      line-height: 120% !important;
    }
  }
  a {
    text-align: center;
    font-size: 30px !important;
    
    span {
      font-size: 36px !important;
      padding-top: 2vw;
      display: inline-block;
      line-height: 1.2;
      overflow: visible;
      
      ${down('md')} {
        font-size: 28px !important;
      }
    }
  }
`