import React from 'react';
import styles from '../../styles.css';

const Experience = (): JSX.Element => {
  return (
    <div className={styles.experience}>
      <div className={styles['company-title']}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://2gis.ru/tomsk/search/%D0%B3%D0%B5%D0%BE%D1%81?m=84.982228%2C56.464483%2F16.34"
        >
          GEOS
        </a>
      </div>
      <div>frontend-разработчик</div>
      <div>Июль 2015 — Октябрь 2018 (3 года и 4 месяца)</div>
    </div>
  );
};

export default Experience;
