import React from 'react';
import dayjs from 'dayjs-ext';
import timeZonePlugin from 'dayjs-ext/plugin/timeZone';
import styles from './styles.css';

dayjs.extend(timeZonePlugin);

interface IProp {
  userName: string;
  time: string;
  text: string;
}

const MessageItem = (props: IProp): JSX.Element => (
  <li className={styles['message-item']}>
    <span className={styles.time}>{dayjs(props.time).format('DD/MM/YYYY HH:mm:ss')}</span>
    <span className={styles['user-name']}>
      {'<'}
      {props.userName}
      {'>'}
    </span>
    {props.text}
  </li>
);

export default MessageItem;
