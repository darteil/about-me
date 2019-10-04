import React, { useEffect, useState } from 'react';

const frames: string[] = ['◢', '◣', '◤', '◥'];

const Loader = (): JSX.Element => {
  const [indicator, setIndicator] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndicator((indicator: number): number => {
        if (indicator >= 3) {
          return 0;
        }

        return indicator + 1;
      });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{frames[indicator]}</span>;
};

export default Loader;
