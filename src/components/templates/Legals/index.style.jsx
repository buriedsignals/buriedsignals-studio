import styled from "styled-components";
import { down } from "styled-breakpoints";

export const LegalsTemplateStyle = styled.div`
  min-height: calc(100vh - 66px - 70px);
  margin-top: 66px;
  padding-top: 100px;
  padding-bottom: 100px;
  h1 {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 110%;
    margin-bottom: 20px;
  }

  h2 {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 105%;
    margin-bottom: 15px;
  }

  p, a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline;
  }
`