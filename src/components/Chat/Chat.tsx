import React, { useEffect, useContext, useState } from 'react';
import { SocketContext } from '../../shared/SocketService/SocketContext';
import ChatLogin from '../ChatLogin';
import UsersList from './UsersList';
import Messages from './Messages';
import Input from './Input';
import Help from './Help';
import styles from './styles.css';

interface IProp {
  onClose: () => void;
}

export const ChatContext = React.createContext({
  changeUserName: (name: string | null): void => {},
});

export const Chat = (props: IProp): JSX.Element => {
  const [showUsers, setShowUsers] = useState<boolean>(true);
  const [showHelpStatus, setShowHelpStatus] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(localStorage.getItem('darTeilProjectsUserName'));
  const { chat } = useContext(SocketContext);

  useEffect((): (() => void) => {
    if (userName) {
      chat.emit('join', localStorage.getItem('darTeilProjectsUserName'));
    }

    return (): void => {
      chat.emit('leave');
    };
  }, [userName]);

  const changeUserName = (name: string | null): void => {
    setUserName(name);
  };

  const showHelp = (): void => {
    setShowHelpStatus(true);
  };

  const hideHelp = (): void => {
    setShowHelpStatus(false);
  };

  const exit = (): void => {
    props.onClose();
  };

  return (
    <ChatContext.Provider value={{ changeUserName }}>
      {!userName && <ChatLogin />}
      {userName && (
        <div className={styles.chat}>
          <Help show={showHelpStatus} hideHelp={hideHelp} />
          <div className={`${styles.grid} ${!showUsers ? styles['grid-without-users'] : ''}`}>
            {showUsers && (
              <div className={styles['users-list']}>
                <div className={styles.head}>Users</div>
                <UsersList />
              </div>
            )}
            <div className={styles.messages}>
              <div className={styles.head}>Messages</div>
              <Messages />
            </div>
            <div className={styles.input}>
              <div className={styles.head}>Input message</div>
              <Input onCloseCommand={exit} showHelp={showHelp} setShowUsers={setShowUsers} />
            </div>
          </div>
        </div>
      )}
    </ChatContext.Provider>
  );
};
