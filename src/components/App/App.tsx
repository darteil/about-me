import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import FakeTerminal from '../FakeTerminal';
import Terminal from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import FakeLoading from '../FakeLoading';
import { Theme, themes } from '../../themes';
import { GlobalStyle } from '../../globalStyle';

const StyledWrap = styled.div`
  max-height: 85vh;
  width: 800px;
  overflow: scroll;
  margin: 80px auto 0 auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
      <StyledWrap>
        {!showLoading && !isClear && <FakeTerminal onDone={setShowContent} />}
        {showContent && (
          <>
            {!isClear && <Greeting />}
            <Terminal clearStatus={isClear} onClear={setIsClear} />
          </>
        )}
      </StyledWrap>
    </ThemeProvider>
  );
};

export default App;
