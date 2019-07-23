import React, { KeyboardEvent, useContext } from 'react';
import { SocketContext } from '../../../shared/SocketService/SocketContext';
import { ChatContext } from '../Chat';
import Commands from './commands';
import styles from './styles.css';

interface IProp {
  setShowUsers: (show: boolean) => void;
  showHelp: () => void;
  onCloseCommand?: () => void;
}

const Input = (props: IProp): JSX.Element => {
  const { chat } = useContext(SocketContext);
  const { changeUserName } = useContext(ChatContext);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.keyCode === 13) {
      if (!event.shiftKey) {
        const text = event.currentTarget.value;

        switch (text) {
          case Commands.setUserName: {
            event.currentTarget.value = '';
            localStorage.removeItem('userName');
            changeUserName(null);
            break;
          }
          case Commands.hideUsers: {
            event.currentTarget.value = '';
            props.setShowUsers(false);
            break;
          }
          case Commands.showUsers: {
            event.currentTarget.value = '';
            props.setShowUsers(true);
            break;
          }
          case Commands.help: {
            event.currentTarget.value = '';
            props.showHelp();
            break;
          }
          case Commands.exit: {
            event.currentTarget.value = '';
            if (props.onCloseCommand) {
              props.onCloseCommand();
            }
            break;
          }
          case '': {
            break;
          }
          default: {
            chat.emit('message', {
              userName: localStorage.getItem('userName'),
              text: event.currentTarget.value,
            });
            event.currentTarget.value = '';
          }
        }

        event.preventDefault();
      }
    }
  };

  return (
    <textarea
      onKeyDown={onKeyDown}
      className={styles.textarea}
      placeholder="Enter the message and press Enter&#10; /help - show commands"
    />
  );
};

export default Input;
