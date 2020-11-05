import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${props => props.theme.linksColor};
  }
  a:hover {
    opacity: 0.8;
  }
`;

const Contacts = (): JSX.Element => (
  <StyledWrap>
    <p>
      Skype: <a href="skype:darteil.work?chat">live:darteil.work</a>
    </p>
    <p>
      Email: <a href="mailto:darteil.work@gmail.com">darteil.work@gmail.com</a>
    </p>
    <p>Вы так же можете ввести в терминал команду &quot;feedback&quot; и оставить сообщение там</p>
  </StyledWrap>
);

export default Contacts;
