import React from 'react';
import styles from '../../styles.css';

const Experience = (): JSX.Element => {
  return (
    <div className={styles.experience}>
      <div className={styles['company-title']}>
        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/Dqq1Z66bTqwgxQpT6">
          GEOS
        </a>
      </div>
      <div>frontend-разработчик</div>
      <div>Июль 2015 — Октябрь 2018 (3 года и 4 месяца)</div>
    </div>
  );
};

export default Experience;
