import React, { useState, KeyboardEvent, useRef } from 'react';
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
