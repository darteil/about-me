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

  useEffect(() => {
    if (messList.current !== null) {
      messList.current.scrollTop = messList.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    APIService.getLastMessages()
      .then(response => {
        const lastMessages: IMessage[] = [];
        response.data.forEach((message: IMessage) => {
          lastMessages.push({
            id: message.id,
            userName: message.userName,
            createdAt: message.createdAt,
            text: message.text,
          });
        });
        setMessages(lastMessages);
      })
      .catch(error => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    chat.on('message', (mess: IMessage) => {
      addNewMessage(mess);
    });

    return () => {
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
