import React from 'react';

type TerminalContext = {
  commandsHistory: string[];
};

const TerminalContext = React.createContext<TerminalContext>({
  commandsHistory: [],
});

TerminalContext.displayName = 'TerminalContext';

export default TerminalContext;
