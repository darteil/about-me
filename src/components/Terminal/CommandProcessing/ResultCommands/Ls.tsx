import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  p > span {
    margin-right: 20px;
  }
`;

const Ls = (): JSX.Element => (
  <StyledWrap>
    <p>
      <span>skills.txt</span>
      <span>projects.txt</span>
      <span>contacts.txt</span>
      <span>about.txt</span>
      <span>work-experience.txt</span>
    </p>
  </StyledWrap>
);

export default Ls;
