import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  ul {
    list-style: none;
  }
`;

const StyledThemesList = styled.ul`
  padding-left: 25px;
  font-weight: bold;
`;

const Help = (): JSX.Element => (
  <StyledWrap>
    <p>ls - список доступных файлов</p>
    <p>cat [filename] - просмотр файла, используйте TAB для автодополнения имен файлов</p>
    <p>clear - очистка экрана</p>
    <p>switch theme [theme name] - сменить тему оформления</p>
    <StyledThemesList>
      <li>
        Доступные темы:
        <ul>
          <li>default</li>
          <li>light</li>
          <li>solarized</li>
        </ul>
      </li>
    </StyledThemesList>
    <p>feedback - оставить сообщение</p>
  </StyledWrap>
);

export default Help;
