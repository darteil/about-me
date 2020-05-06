import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import FakeLoading from '../FakeLoading';
import { Theme, themes } from '../../themes';
import { GlobalStyle } from '../../globalStyle';
import styles from './styles.css';

const App = (): JSX.Element => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isClear, setIsClear] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(themes.default);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const currentTheme = localStorage.getItem('darteil_projects_theme');
    document.documentElement.setAttribute('data-theme', currentTheme || 'default');
  }, []);

  const toggleTheme = (themeName: keyof typeof themes) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeProvider theme={theme}>
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
      <button
        onClick={() => {
          toggleTheme('light');
        }}
      >
        Toggle
      </button>
    </ThemeProvider>
  );
};

export default App;
