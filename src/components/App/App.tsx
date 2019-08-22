import React, { useState } from 'react';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import styles from './styles.css';

const App = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <FakeTerminal onDone={setShowContent} />
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
