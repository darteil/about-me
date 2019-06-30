import React from 'react';
import styles from './styles.css';

interface IProps {
  path?: string;
}

const Prompt = (props: IProps): JSX.Element => (
  <div className={styles.prompt}>
    <span className={styles.user}>user@darteil-projects</span>
    <span>:</span>
    <span className={styles.path}>{props.path}</span>
    <span>$</span>
  </div>
);

Prompt.defaultProps = {
  path: '~',
};

export default Prompt;
