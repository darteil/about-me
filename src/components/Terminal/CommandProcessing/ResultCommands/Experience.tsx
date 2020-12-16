import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  margin: 10px 0;
`;

const StyledTitle = styled.div`
  margin-bottom: 5px;
  a {
    color: ${props => props.theme.linksColor};
  }
`;

const Experience = (): JSX.Element => {
  return (
    <StyledWrap>
      <StyledTitle>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://2gis.ru/tomsk/search/%D0%B3%D0%B5%D0%BE%D1%81?m=84.982228%2C56.464483%2F16.34"
        >
          GEOS
        </a>
      </StyledTitle>
      <div>frontend-разработчик</div>
      <div>Июль 2015 — Октябрь 2018 (3 года и 4 месяца)</div>
    </StyledWrap>
  );
};

export default Experience;
