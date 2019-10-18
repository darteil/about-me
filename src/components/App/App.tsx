import React, { useState, useEffect } from 'react';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import FakeLoading from '../FakeLoading';
import styles from './styles.css';

const App = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isClear, setIsClear] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {showLoading && <FakeLoading />}
      <div className={styles.app}>
        {!showLoading && !isClear && <FakeTerminal onDone={setShowContent} />}
        {showContent && (
          <>
            {!isClear && <Greeting />}
            <Terminal onClear={setIsClear} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
