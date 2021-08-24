import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FakeTerminal } from '../FakeTerminal';
import { Terminal } from '../Terminal';
import Greeting from '../Terminal/CommandProcessing/ResultCommands/Greeting';
import { FakeLoading } from '../FakeLoading';
import { Theme, themes } from '../../themes';
import { GlobalStyle } from '../../shared/globalStyle';

type theme = keyof typeof themes;

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
  const [showContent, setShowContent] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isClear, setIsClear] = useState(false);
  let currentTheme = localStorage.getItem('darteil_projects_theme');
  currentTheme = currentTheme ? currentTheme : 'default';

  const [theme, setTheme] = useState<Theme>(
    themes[currentTheme && themes[currentTheme as theme] ? (currentTheme as theme) : 'default'],
  );

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
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
            <Terminal toggleTheme={toggleTheme} clearStatus={isClear} onClear={setIsClear} />
          </>
        )}
      </StyledWrap>
    </ThemeProvider>
  );
};

export default App;
