import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Typewriter, { TypewriterClass, TypewriterState } from 'typewriter-effect';
import Prompt from './Prompt';

interface IProps {
  onDone: Dispatch<SetStateAction<boolean>>;
}

const StyledCommandLine = styled.div`
  display: flex;
`;

const FakePromt = (text: string, callback: (state: TypewriterState) => void) => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter.pauseFor(400).changeDelay(50).typeString(text).callFunction(callback).start();
    }}
  />
);

const FakeTerminal = (props: IProps): JSX.Element => {
  const [firstLineDone, setFirstLineDone] = useState(false);

  return (
    <>
      <StyledCommandLine>
        <Prompt />
        {FakePromt('cd darteil.github.io/about-me/', (state) => {
          state.elements.cursor.style.display = 'none';
          setFirstLineDone(true);
        })}
      </StyledCommandLine>
      {firstLineDone && (
        <StyledCommandLine>
          <Prompt path="darteil.github.io/about-me" />
          {FakePromt('cat about.txt', (state) => {
            state.elements.cursor.style.display = 'none';
            props.onDone(true);
          })}
        </StyledCommandLine>
      )}
    </>
  );
};

export default FakeTerminal;
