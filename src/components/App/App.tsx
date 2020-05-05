import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import FakeLoading from '../FakeLoading';
import styles from './styles.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: monospace;
    font-size: 14px;
    background-color: var(--primaryBg);
    color: var(--primaryColor);
    padding: 5px;
  }
`;

const App = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isClear, setIsClear] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const currentTheme = localStorage.getItem('darteil_projects_theme');
    document.documentElement.setAttribute('data-theme', currentTheme || 'default');
  }, []);

  return (
    <>
      <GlobalStyle />
      {showLoading && <FakeLoading />}
      <div className={styles.app}>
        {!showLoading && !isClear && <FakeTerminal onDone={setShowContent} />}
        {showContent && (
          <>
            {!isClear && <Greeting />}
            <Terminal clearStatus={isClear} onClear={setIsClear} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
