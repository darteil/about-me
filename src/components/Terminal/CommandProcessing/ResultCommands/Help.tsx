import React from 'react';
import styles from '../../styles.css';

const Help = (): JSX.Element => (
  <div className={styles.help}>
    <p>ls - список доступных файлов</p>
    <p>cat [filename] - просмотр файла</p>
    <p>clear - очистка экрана</p>
    <p>
      switch theme [theme name] - сменить тему оформления
      <ul className={styles['themes-list']}>
        <li className={styles.title}>
          Доступные темы:
          <ul>
            <li>-default</li>
            <li>-light</li>
          </ul>
        </li>
      </ul>
    </p>
    <p>feedback - оставить сообщение</p>
  </div>
);

export default Help;
