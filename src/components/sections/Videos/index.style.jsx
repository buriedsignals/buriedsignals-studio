import styled from "styled-components";
import { down } from "styled-breakpoints";

export const VideosStyle = styled.div`
  position: relative;
  padding-bottom: 100px;
  
  h2 {
    position: relative;
    padding: 120px 0 65px;
    ${down('md')} {
      padding: 60px 0 35px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-green02);
    }
  }
  
  .videos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 40px;
    max-width: 100%;
    
    ${down('md')} {
      grid-template-columns: 1fr;
      margin-top: 10px;
      gap: 50px;
    }
    
    .video-item {
      .video-embed {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        border-radius: 8px;
        
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`