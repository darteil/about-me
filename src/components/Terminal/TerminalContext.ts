import React from 'react';

type TerminalContext = {
  commandHistory: string[];
};

const TerminalContext = React.createContext<TerminalContext>({
  commandHistory: [],
});

export default TerminalContext;
