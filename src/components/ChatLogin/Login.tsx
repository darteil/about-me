import React, { useState, MouseEvent, useContext } from 'react';
import { ChatContext } from '../Chat/Chat';
import styles from './styles.css';

const Login = (): JSX.Element => {
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { changeUserName } = useContext(ChatContext);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userName === '') {
      setError('Name must not be empty');
    } else if (userName.length < 4) {
      setError('Name must be at least 4 characters');
    } else {
      localStorage.setItem('darTeilProjectsUserName', userName);
      changeUserName(userName);
    }
  };

  return (
    <div className={styles.login}>
      <form data-testid="login-form">
        <input
          value={userName}
          onChange={event => {
            setUserName(event.target.value);
          }}
          type="text"
        />
        <button type="submit" onClick={handleSubmit}>
          GO
        </button>
      </form>
      <div className={styles['error-wrap']}>{error !== '' && <p className={styles.error}>{error}</p>}</div>
    </div>
  );
};

export default Login;
