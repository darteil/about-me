import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
    color: ${props => props.theme.linksColor};
  }
  a:hover {
    opacity: 0.8;
  }
`;

const Projects = (): JSX.Element => (
  <StyledWrap>
    <p>Примеры веб-приложений:</p>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/maze-game/">
      MazeGame
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/stack/">
      StackGame
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/poe-ladder">
      POELadder
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/darteil/darteil-projects.ru">
      darteil-projects.ru (source code)
    </a>
  </StyledWrap>
);

export default Projects;
