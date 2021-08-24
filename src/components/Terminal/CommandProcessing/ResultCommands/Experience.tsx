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
      <div>Последние места работы</div>
      <div>----------------------</div>
      <StyledTitle>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.ru/maps/place/%D0%93%D0%95%D0%9E%D0%A1/@56.464108,84.9786692,18z/data=!3m1!4b1!4m5!3m4!1s0x432693628b267e45:0x658a77c0de5b557d!8m2!3d56.464108!4d84.979443"
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
