import React, { useState, KeyboardEvent, useRef, useContext, useEffect } from 'react';
import TerminalContext from './TerminalContext';
import Prompt from '../FakeTerminal/Prompt';
import catAutocompleteFileNames from './catAutocompleteFileNames';
import styles from './styles.css';

interface IProp {
  onInput: (text: string) => void;
}

const CommandLine = (props: IProp): JSX.Element => {
  const [commandSend, setCommandSend] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);
  const { commandHistory } = useContext(TerminalContext);
  const [previousCommandIndex, setPreviousCommandIndex] = useState<number | null>(null);

  const ENTER_KEY = 13;
  const ARROW_UP_KEY = 38;
  const ARROW_UP_DOWN = 40;
  const TAB_KEY = 9;

  const setInputCommand = (value: string): void => {
    if (inputElement.current) {
      inputElement.current.value = value;
    }
  };

  useEffect((): void => {
    if (previousCommandIndex !== null) {
      setInputCommand(commandHistory[previousCommandIndex]);
    } else {
      setInputCommand('');
    }
  }, [previousCommandIndex]);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
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
        if (previousCommandIndex === null) {
          setPreviousCommandIndex(0);
          break;
        }

        if (previousCommandIndex !== null) {
          if (previousCommandIndex > commandHistory.length - 1) {
            break;
          }
          if (previousCommandIndex === commandHistory.length - 1) {
            setPreviousCommandIndex(commandHistory.length - 1);
            break;
          }
          setPreviousCommandIndex(previousCommandIndex + 1);
        }
        break;
      }
      case ARROW_UP_DOWN: {
        if (previousCommandIndex === null) {
          break;
        }

        if (previousCommandIndex !== null) {
          if (previousCommandIndex === 0) {
            setPreviousCommandIndex(null);
            break;
          }
          if (previousCommandIndex <= commandHistory.length - 1) {
            setPreviousCommandIndex(previousCommandIndex - 1);
          }
        }
        break;
      }
      case TAB_KEY: {
        event.preventDefault();
        const result: string = catAutocompleteFileNames(text);

        if (result !== '') {
          setInputCommand(result);
        }

        break;
      }
    }
  };

  const onBlur = (): void => {
    /*
    / Почему здесь setTimeout? - спросите вы.
    / Потому что без него focus() не работает в firefox... - отвечу вам я.
    */
    setTimeout((): void => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    }, 1);
  };

  return (
    <>
      <div className={styles['command-line']}>
        <Prompt path="darteil-projects.ru" />
        {commandSend && <div>{command}</div>}
        {!commandSend && (
          <input autoFocus maxLength={25} onBlur={onBlur} ref={inputElement} onKeyDown={onKeyDown} type="text" />
        )}
      </div>
    </>
  );
};

export default CommandLine;
