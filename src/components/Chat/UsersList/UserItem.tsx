import React from 'react';
import styles from './styles.css';

interface IProp {
  name: string;
}

const UserItem = (props: IProp): JSX.Element => <li className={styles['users-list-item']}>{props.name}</li>;

export default UserItem;
