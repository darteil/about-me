import React, { useEffect, useState, useRef, useContext } from 'react';
import MessageItem from './MessageItem';
import APIService from '../../../shared/APIService';
import { SocketContext } from '../../../shared/SocketService/SocketContext';
import styles from './styles.css';

interface IMessage {
  id: number;
  userName: string;
  createdAt: string;
  text: string;
}

const MessagesList = (): JSX.Element => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messList = useRef<HTMLUListElement>(null);
  const { chat } = useContext(SocketContext);

  const addNewMessage = (mess: IMessage) => {
    setMessages((messages: IMessage[]) => {
      return [
        ...messages,
        {
          id: mess.id,
          userName: mess.userName,
          createdAt: mess.createdAt,
          text: mess.text,
        },
      ];
    });
  };

  useEffect((): void => {
    if (messList.current !== null) {
      messList.current.scrollTop = messList.current.scrollHeight;
    }
  }, [messages]);

  useEffect((): void => {
    APIService.getLastMessages()
      .then((responce): void => {
        const lastMessages: IMessage[] = [];
        responce.data.forEach((message: IMessage): void => {
          lastMessages.push({
            id: message.id,
            userName: message.userName,
            createdAt: message.createdAt,
            text: message.text,
          });
        });
        setMessages(lastMessages);
      })
      .catch((error): void => {
        console.warn(error);
      });
  }, []);

  useEffect((): (() => void) => {
    chat.on('message', (mess: IMessage): void => {
      addNewMessage(mess);
    });

    return (): void => {
      chat.off('message');
    };
  }, []);

  return (
    <ul ref={messList} className={styles['messages-list']}>
      {messages.map(
        (item: IMessage): JSX.Element => (
          <MessageItem key={item.id} userName={item.userName} time={item.createdAt} text={item.text} />
        ),
      )}
    </ul>
  );
};

export default MessagesList;
