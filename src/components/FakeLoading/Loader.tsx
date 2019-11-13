import React, { useEffect, useState } from 'react';
import styles from './styles.css';

const frames: string[] = ['.  ', '.. ', '...', '   '];

const Loader = (): JSX.Element => {
  const [indicator, setIndicator] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndicator((indicator: number): number => {
        if (indicator >= 3) {
          return 0;
        }

        return indicator + 1;
      });
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span className={styles.spinner}>{frames[indicator]}</span>;
};

export default Loader;
