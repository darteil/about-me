import React, { useState, Dispatch, SetStateAction } from 'react';
import Typist from 'react-typist';
import Prompt from './Prompt';
import styles from './styles.css';

interface IProps {
  onDone: Dispatch<SetStateAction<boolean>>;
}

const FakeTerminal = (props: IProps): JSX.Element => {
  const [firstLineDone, setFirstLineDone] = useState<boolean>(false);
  const cursorSettings = { hideWhenDone: true, hideWhenDoneDelay: 10 };

  return (
    <>
      <div className={styles['command-line']}>
        <Prompt />
        <div>
          <Typist
            startDelay={500}
            onTypingDone={(): void => {
              setFirstLineDone(true);
            }}
            cursor={cursorSettings}
          >
            <span>cd darteil-projects.ru</span>
          </Typist>
        </div>
      </div>
      {firstLineDone && (
        <div className={styles['command-line']}>
          <Prompt path="darteil-projects.ru" />
          <div>
            <Typist
              cursor={cursorSettings}
              startDelay={400}
              onTypingDone={(): void => {
                props.onDone(true);
              }}
            >
              <span>cat about.txt</span>
            </Typist>
          </div>
        </div>
      )}
    </>
  );
};

export default FakeTerminal;
