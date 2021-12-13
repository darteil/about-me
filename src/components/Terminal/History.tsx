import React, { Fragment } from 'react';
import styled from 'styled-components';
import Prompt from '../FakeTerminal/Prompt';

export interface IHistory {
  id: string;
  command: string;
  output: () => JSX.Element;
}

const StyledWrap = styled.div`
  display: flex;
  height: 16px;
`;

interface IProp {
  history: IHistory[];
}

export const History = (props: IProp): JSX.Element => {
  return (
    <>
      {props.history.map(
        (item: IHistory): JSX.Element => (
          <Fragment key={item.id}>
            <StyledWrap>
              <Prompt path="darteil.github.io/about-me"></Prompt>
              <div>{item.command}</div>
            </StyledWrap>
            {item.output()}
          </Fragment>
        )
      )}
    </>
  );
};
