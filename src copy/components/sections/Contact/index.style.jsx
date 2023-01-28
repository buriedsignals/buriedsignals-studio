import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 573px;
  margin: 0 auto;
  padding: 120px 0 108px;
  ${down('md')} {
    padding: 12.579vw 0 11.321vw;
  }
  p {
    text-align: center;
  }
  a {
    text-align: center;
  }
`