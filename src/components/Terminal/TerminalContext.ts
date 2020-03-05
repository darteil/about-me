import React from 'react';

type TerminalContext = {
  commandsHistory: string[];
};

const TerminalContext = React.createContext<TerminalContext>({
  commandsHistory: [],
});

export default TerminalContext;
