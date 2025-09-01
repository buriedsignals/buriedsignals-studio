import styled from "styled-components"
import { down } from "styled-breakpoints"

export const AboutStyle = styled.div`
  position: relative;

  .logo-container {
    position: absolute;
    top: 30px;
    left: 0px;
    z-index: 10;
    
    .bs-logo {
      height: 40px;
      width: auto;
      cursor: pointer;
      
      ${down('md')} {
        height: 35px;
      }
    }
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8vh;
    padding: 12vh 0;
  }

  .profile-image-container {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    
    .profile-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .about-text {
    max-width: 700px;
    
    p {
      margin-bottom: 3vh;
      line-height: 1.6;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ${down("md")} {
    .about-content {
      gap: 6vh;
      padding: 8vh 0;
    }

    .profile-image-container {
      width: 250px;
      height: 250px;
    }

    .about-text {
      max-width: 100%;
      
      p {
        margin-bottom: 2.5vh;
      }
    }
  }

  ${down("sm")} {
    .about-content {
      gap: 4vh;
      padding: 6vh 0;
    }

    .profile-image-container {
      width: 200px;
      height: 200px;
    }

    .about-text {
      p {
        margin-bottom: 2vh;
      }
    }
  }
`