import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
    color: ${(props) => props.theme.linksColor};
  }
  a:hover {
    opacity: 0.8;
  }
`;

const Projects = (): JSX.Element => (
  <StyledWrap>
    <p>Примеры веб-приложений (ссылки кликабельны):</p>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/darteil/about-me">
      this site (source code)
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://darteil.github.io/maze-game">
      MazeGame
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/darteil/twitch-chat-viewer">
      CLI Twitch chat viewer
    </a>
  </StyledWrap>
);

export default Projects;
