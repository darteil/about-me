import React, { useState, KeyboardEvent, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import TerminalContext from './TerminalContext';
import Prompt from '../FakeTerminal/Prompt';
import { autocompleteFileNames, IAutocompleteResult } from './autocompleteFileNames';

interface IProp {
  onInput: (text: string) => void;
  setCustomResult: (command: string, output: () => JSX.Element) => void;
}

const StyledWrap = styled.div`
  display: flex;
  height: 16px;
  input {
    width: 410px;
    background-color: ${props => props.theme.primaryBg};
    outline: none;
    border: none;
    color: ${props => props.theme.primaryColor};
  }
`;

const CommandLine = (props: IProp): JSX.Element => {
  const [commandSend, setCommandSend] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);
  const { commandsHistory } = useContext(TerminalContext);
  const [previousCommandIndex, setPreviousCommandIndex] = useState<number | null>(null);
  const [tabKeyPressTime, setTabKeyPressTime] = useState<number>(0);

  const ENTER_KEY = 13;
  const ARROW_UP_KEY = 38;
  const ARROW_DOWN_KEY = 40;
  const TAB_KEY = 9;

  const setInputCommand = (value: string) => {
    if (inputElement.current) {
      inputElement.current.value = value;
    }
  };

  useEffect(() => {
    if (previousCommandIndex !== null) {
      setInputCommand(commandsHistory[previousCommandIndex]);
    } else {
      setInputCommand('');
    }
  }, [previousCommandIndex]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;

    switch (event.keyCode) {
      case ENTER_KEY: {
        props.onInput(text);
        setCommandSend(true);
        setCommand(text);
        event.preventDefault();
        break;
      }
      case ARROW_UP_KEY: {
        if (previousCommandIndex === null && commandsHistory.length !== 0) {
          setPreviousCommandIndex(0);
          break;
        }

        if (previousCommandIndex !== null) {
          if (previousCommandIndex > commandsHistory.length - 1) {
            break;
          }
          if (previousCommandIndex === commandsHistory.length - 1) {
            setPreviousCommandIndex(commandsHistory.length - 1);
            break;
          }
          setPreviousCommandIndex(previousCommandIndex + 1);
        }
        break;
      }
      case ARROW_DOWN_KEY: {
        if (previousCommandIndex === null) {
          break;
        }

        if (previousCommandIndex !== null) {
          if (previousCommandIndex === 0) {
            setPreviousCommandIndex(null);
            break;
          }
          if (previousCommandIndex <= commandsHistory.length - 1) {
            setPreviousCommandIndex(previousCommandIndex - 1);
          }
        }
        break;
      }
      case TAB_KEY: {
        event.preventDefault();

        const output: IAutocompleteResult = autocompleteFileNames(text);
        const delta = 500;
        const pressTime = new Date().getTime();

        if (output.result !== '' && !output.isSomeMatches) {
          setInputCommand(output.result);
        } else if (output.result !== '' && output.isSomeMatches) {
          if (tabKeyPressTime !== 0 && pressTime - tabKeyPressTime <= delta) {
            const customResult = (
              <div>
                <p>{output.result}</p>
              </div>
            );

            props.setCustomResult(text, () => customResult);
          }
        }
        setTabKeyPressTime(pressTime);
        break;
      }
    }
  };

  const onBlur = () => {
    /*
    / Почему здесь setTimeout? - спросите вы.
    / Потому что без него focus() не работает в firefox... - отвечу вам я.
    */
    setTimeout(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    }, 1);
  };

  return (
    <>
      <StyledWrap>
        <Prompt path="darteil-projects.ru" />
        {commandSend && <div>{command}</div>}
        {!commandSend && (
          <input autoFocus maxLength={25} onBlur={onBlur} ref={inputElement} onKeyDown={onKeyDown} type="text" />
        )}
      </StyledWrap>
    </>
  );
};

export default CommandLine;
