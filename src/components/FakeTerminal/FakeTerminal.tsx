import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import Prompt from './Prompt';

interface IProps {
  onDone: Dispatch<SetStateAction<boolean>>;
}

const StyledCommandLine = styled.div`
  display: flex;
`;

const FakeTerminal = (props: IProps): JSX.Element => {
  const [firstLineDone, setFirstLineDone] = useState(false);
  const cursorSettings = { hideWhenDone: true, hideWhenDoneDelay: 10 };

  return (
    <>
      <StyledCommandLine>
        <Prompt />
        <Typist
          startDelay={500}
          onTypingDone={() => {
            setFirstLineDone(true);
          }}
          cursor={cursorSettings}
        >
          <span>cd darteil-projects.ru</span>
        </Typist>
      </StyledCommandLine>
      {firstLineDone && (
        <StyledCommandLine>
          <Prompt path="darteil-projects.ru" />
          <Typist
            cursor={cursorSettings}
            startDelay={400}
            onTypingDone={() => {
              props.onDone(true);
            }}
          >
            <span>cat about.txt</span>
          </Typist>
        </StyledCommandLine>
      )}
    </>
  );
};

export default FakeTerminal;
