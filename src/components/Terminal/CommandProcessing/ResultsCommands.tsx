import React from 'react';
import styles from '../styles.css';

export const Greeting = (): JSX.Element => (
  <div>
    <p>Приветствую!</p>
    <p>Меня зовут Юрий Романов.</p>
    <p>Занимаюсь web-разработкой, направление: frontend.</p>
    <p>
      На этом сайте я планирую выкладывать свои проекты, которые пишу в свободное время. В данный момент пишу код с
      использованием библиотеки React и сопутствующими ей технологиями (React-router, Redux etc...)
    </p>
    <p>Используйте терминал чтобы узнать больше =)</p>
    <p>Введите help для просмотра доступных комманд...</p>
  </div>
);

export const Help = (): JSX.Element => (
  <div>
    <p>ls - список дотупных файлов</p>
    <p>cat [filename] - просмотр файла</p>
  </div>
);

export const Projects = (): JSX.Element => (
  <div className={styles.projects}>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/stack/">
      StackGame
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/my-pomodoro">
      myPomodoro
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/robots-civ-clicker">
      RobotsCivClicker
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/darteil/POELadder">
      POELadder
    </a>
  </div>
);

export const Contacts = (): JSX.Element => (
  <div className={styles.contacts}>
    <p>
      Telegram: <a href="tg://resolve?domain=darteil">@darteil</a>
    </p>
    <p>
      Skype: <a href="skype:darteil.work?chat">live:darteil.work</a>
    </p>
    <p>
      Email: <a href="mailto:darteil.work@gmail.com">darteil.work@gmail.com</a>
    </p>
  </div>
);

export const Ls = (): JSX.Element => (
  <div className={styles.ls}>
    <div>projects.txt</div>
    <div>contacts.txt</div>
    <div>about.txt</div>
  </div>
);
