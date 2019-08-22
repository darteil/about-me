import React from 'react';
import styles from '../../styles.css';

const Projects = (): JSX.Element => (
  <div className={styles.projects}>
    <p>Примеры веб-приложений:</p>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/darteil/darteil-projects.ru">
      darteil-projects.ru
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/stack/">
      StackGame
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/robots-civ-clicker">
      RobotsCivClicker
    </a>
    <a target="_blank" rel="noopener noreferrer" href="http://darteil-projects.ru/poe-ladder">
      POELadder
    </a>
  </div>
);

export default Projects;
