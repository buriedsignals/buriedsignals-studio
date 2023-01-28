import styled from "styled-components";
import { down } from "styled-breakpoints";

export const WorkStyle = styled.div`
  h2 {
    padding: 120px 103px 65px;
    ${down('md')} {
      padding: 12.579vw 10.797vw 6.814vw;
    }
  }
  .projects {
    padding: 0 172px 146px;
    ${down('md')} {
      padding: 0 10.797vw 5.304vw;
    }
    .project {
      position: relative;
      &::before, &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-black);
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
        display: none;
      }
      &:last-child {
        &::after {
          display: block;
        }
      }
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 47px 25px 20px;
        ${down('md')} {
          padding: 2.621vw 4.927vw 2.621vw 2.097vw;
        }
        color: var(--color-black);
        svg {
          transform: translate3D(0, 0, 0);
          transition: transform 0.2s ease;
        }
        &:hover {
          svg {
            transform: translate3D(10px, 0, 0);
            transition: transform 0.2s ease;
          }
        }
      }
    }
  }
`