import React, { useEffect, useState, KeyboardEvent, useRef } from 'react';
import Prompt from '../FakeTerminal/Prompt';
import styles from './styles.css';

interface IProp {
  onInput: (text: string) => void;
}

const CommandLine = (props: IProp): JSX.Element => {
  const [commandSend, setCommandSend] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 13) {
      const text = event.currentTarget.value;

      props.onInput(text);
      setCommandSend(true);
      setCommand(text);
      event.preventDefault();
    }
  };

  const onBlur = (): void => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  useEffect((): void => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <>
      <div className={styles['command-line']}>
        <Prompt path="darteil-projects.ru" />
        {commandSend && <div>{command}</div>}
        {!commandSend && <input maxLength={25} onBlur={onBlur} ref={inputElement} onKeyDown={onKeyDown} type="text" />}
      </div>
    </>
  );
};

export default CommandLine;
