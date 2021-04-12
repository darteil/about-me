import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const SendPending = (): JSX.Element => (
  <StyledWrap>
    <p>Отправка сообщения...</p>
  </StyledWrap>
);

export default SendPending;
