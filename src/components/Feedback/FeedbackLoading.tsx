import React from 'react';
import Loader from '../FakeLoading/Loader';
import styles from './styles.css';

const FeedbackLoading = () => (
  <div className={styles['feedback-loader']}>
    Form loading <Loader />
  </div>
);

export default FeedbackLoading;
