import React from 'react';
import styles from '../../styles.css';

const Skills = (): JSX.Element => (
  <div className={styles.skills}>
    <ul>
      <li>
        HTML <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        CSS <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        React <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        Redux <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        Webpack <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        Gulp <span className={styles['complete-status']}>✔️</span>
      </li>
      <li>
        TypeScript <span className={styles['wait-status']}>●</span> (знаком с ним, но нет опыта коммерческой разработки)
      </li>
    </ul>
  </div>
);

export default Skills;
