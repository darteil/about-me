import React from 'react';
import Loader from './Loader';
import styles from './styles.css';

const packagesList: string[] = [
  'React (16.8.6)...',
  'ReactDOM (16.8.6)...',
  'react-typist (2.0.5)...',
  'axios (0.19.0)...',
];

const FakeLoading = (): JSX.Element => (
  <div className={styles['packages-list']}>
    <ul>
      {packagesList.map(
        (packageItem: string): JSX.Element => (
          <li key={packageItem}>
            [ <span className={styles['ok-indicator']}>ok</span> ] {packageItem}
          </li>
        ),
      )}
      <li key="starting" className={styles.starting}>
        [ <span className={styles['wait-indicator']}>wait</span> ] Starting app <Loader />
      </li>
    </ul>
  </div>
);

export default FakeLoading;
