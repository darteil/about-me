import React, { useState, useEffect } from 'react';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import FakeLoading from '../FakeLoading';
import styles from './styles.css';

const App = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect((): void => {
    setTimeout((): void => {
      setShowLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.app}>
      {showLoading && <FakeLoading />}
      {!showLoading && <FakeTerminal onDone={setShowContent} />}
      {showContent && (
        <>
          <Greeting />
          <Terminal />
        </>
      )}
    </div>
  );
};

export default App;
