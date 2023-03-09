import styled from "styled-components";
import { down } from "styled-breakpoints";

export const WorkStyle = styled.div`
  padding-top: 0px;
  ${down('md')} {
    padding-top: 0;
  }
  h2 {
    padding: 120px 0 65px;
    ${down('md')} {
      padding: 120px 0 35px;
    }
  }
  .trust h3 {
    padding-top: 120px;
    text-align: center;
  }
  .clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
    column-gap: 60px;
    padding: 60px 0 30px;
    ${down('md')} {
      // flex-direction: column;
    }
    .client {
      width: auto;
      ${down('md')} {
        width: 35%;
      }
      img {
        width: 100%;
      }
    } 
  }
  .projects {
    padding: 0 0 30px;
    ${down('md')} {
      padding: 0 0 30px;
    }
    .project {
      position: relative;
      &::before, &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-green02);
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
      .datas-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 25px 47px 25px 20px;
        color: var(--color-black);
        transition: all .35s cubic-bezier(0.12, 0, 0.39, 0);
        ${down('md')} {
          padding: 15px 25px 15px 10px;
        }
        ${down('xs')} {
          padding: 15px 0;
        }
        .datas {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          column-gap: 20px;
          row-gap: 10px;
          width: 100%;
          pointer-events: none;
          .name {
            width: 47%;
            min-width: 375px;
          }
          .infos {
            width: 47%;
            min-width: 375px;
          }
          ${down('md')} {
            flex-direction: column;
            align-items: flex-start;
            .name {
              width: initial;
              min-width: initial;
            }
            .infos {
              width: initial;
              min-width: initial;
            }
          }
        }
        &.no-link {
          svg {
            opacity: 0;
          }
        }
        svg {
          width: 14px;
          transform: translate3D(0, 0, 0);
          transition: transform 0.2s ease;
          pointer-events: none;
        }
        &.is-hover {
          transition: all .35s cubic-bezier(0.12, 0, 0.39, 0);
          p {
            color: var(--color-white);
            transition: color 0.35s cubic-bezier(0.12, 0, 0.39, 0);
          }
          svg {
            transform: translate3D(10px, 0, 0);
            transition: transform 0.35s cubic-bezier(0.12, 0, 0.39, 0);
            path {
              stroke: var(--color-white);
              transition: color 0.35s cubic-bezier(0.12, 0, 0.39, 0);
            }
          }
        }
      }
    }
  }
`