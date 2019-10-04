import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../../shared/SocketService/SocketContext';
import UserItem from './UserItem';
import styles from './styles.css';

interface IUser {
  id: string;
  name: string;
}

const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { chat } = useContext(SocketContext);

  useEffect(() => {
    chat.on('online', (onlineUsers: IUser[]) => {
      setUsers([...onlineUsers]);
    });
  }, []);

  return (
    <ul className={styles['users-list']}>
      {users.map(
        (item: IUser): JSX.Element => (
          <UserItem key={item.id} name={item.name} />
        ),
      )}
    </ul>
  );
};

export default UsersList;
