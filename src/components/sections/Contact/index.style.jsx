import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 180px;
  padding-bottom: 200px;
  ${down('md')} {
    padding-top: 90px;
    padding-bottom: 100px;
  }
  p {
    text-align: center;
  }
  a {
    text-align: center;
  }
`