import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  ul {
    list-style: none;
  }
`;

const StyledThemesList = styled.ul`
  padding-left: 25px;
`;

const StyledTitle = styled.li`
  font-weight: bold;
`;

const Help = (): JSX.Element => (
  <StyledWrap>
    <p>ls - список доступных файлов</p>
    <p>cat [filename] - просмотр файла</p>
    <p>clear - очистка экрана</p>
    <p>switch theme [theme name] - сменить тему оформления</p>
    <StyledThemesList>
      <StyledTitle>
        Доступные темы:
        <ul>
          <li>default</li>
          <li>light</li>
          <li>solarized</li>
        </ul>
      </StyledTitle>
    </StyledThemesList>
    <p>feedback - оставить сообщение</p>
  </StyledWrap>
);

export default Help;
