import React from 'react';
import styled from 'styled-components';

interface IProp {
  hasError?: boolean;
  handlerClickSuccess: () => void;
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  button:hover {
    background-color: ${props => props.theme.feedbackButtonBackgroundHover};
    color: ${props => props.theme.feedbackButtonColorHover};
  }
`;

const SuccessMessage = (props: IProp): JSX.Element => (
  <StyledWrap>
    {!props.hasError && <p>Ваше сообщение отправлено</p>}
    {props.hasError && (
      <>
        <p>При отправке сообщения возникла ошибка</p>
        <p>Попробуйте еще раз</p>
      </>
    )}
    <button onClick={props.handlerClickSuccess}>Хорошо</button>
  </StyledWrap>
);

export default SuccessMessage;
