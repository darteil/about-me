import React from 'react';
import Login from './Login';
import styles from './styles.css';

const Window = (): JSX.Element => (
  <div className={styles['chat-login']}>
    <div className={styles.greeting}>
      <p>Вы можете использовать этот чат для связи со мной.</p>
    </div>
    <div className={styles.window}>
      <div className={styles.title}>
        <p>Enter nickname</p>
      </div>
      <Login />
    </div>
  </div>
);

export default Window;
