import React from 'react';

type TerminalContextType = {
  commandsHistory: string[];
};

const TerminalContext = React.createContext<TerminalContextType>({
  commandsHistory: []
});

TerminalContext.displayName = 'TerminalContext';

export default TerminalContext;
