import React, { Fragment } from 'react';
import Prompt from '../FakeTerminal/Prompt';
import styles from './styles.css';

export interface IHistory {
  id: string;
  command: string;
  output: () => JSX.Element;
}

interface IProp {
  history: IHistory[];
}

export const History = (props: IProp): JSX.Element => {
  return (
    <>
      {props.history.map(
        (item: IHistory): JSX.Element => (
          <Fragment key={item.id}>
            <div className={styles['command-line']}>
              <Prompt path="darteil-projects.ru"></Prompt>
              <div>{item.command}</div>
            </div>
            {item.output()}
          </Fragment>
        ),
      )}
    </>
  );
};
