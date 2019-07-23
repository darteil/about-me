import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

interface IProps {
  show: boolean;
  hideHelp: () => void;
}

const Help = (props: IProps): JSX.Element => {
  const ESCAPE_KEY = 27;
  const hide = (event: KeyboardEvent): void => {
    if (event.keyCode === ESCAPE_KEY) {
      props.hideHelp();
    }
  };

  useEffect((): (() => void) => {
    document.addEventListener('keydown', hide);

    return (): void => {
      document.removeEventListener('keydown', hide);
    };
  }, []);
  return (
    <>
      {props.show
        ? ReactDOM.createPortal(
            <div className={styles['help-window']}>
              <div className={styles.help}>
                <div>
                  <p>Available commands:</p>
                  <ul>
                    <li>/set username</li>
                    <li>/hide users</li>
                    <li>/show users</li>
                    <li>/exit</li>
                  </ul>
                  <p>Press Esc key to close help</p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default Help;
