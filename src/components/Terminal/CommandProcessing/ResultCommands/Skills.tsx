import React from 'react';
import styles from '../../styles.css';

const CompleteStatus = () => <span className={styles['complete-status']}>✔️</span>;
const WaitStatus = () => <span className={styles['wait-status']}>●</span>;

const Skills = (): JSX.Element => (
  <div className={styles.skills}>
    <ul>
      <li>
        HTML <CompleteStatus />
      </li>
      <li>
        CSS <CompleteStatus />
      </li>
      <li>
        React <CompleteStatus />
      </li>
      <li>
        Redux <CompleteStatus />
      </li>
      <li>
        Webpack <CompleteStatus />
      </li>
      <li>
        Gulp <CompleteStatus />
      </li>
      <li>
        TypeScript <WaitStatus /> (знаком с ним, но нет опыта коммерческой разработки)
      </li>
    </ul>
  </div>
);

export default Skills;
