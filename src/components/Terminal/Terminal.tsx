import React, { useState } from 'react';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import generateUniqueId from './generateUniqueId';

const Terminal = (): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);

  const pushCommand = (command: string, output: () => JSX.Element): void => {
    setHistory([...history, { id: generateUniqueId(), command, output }]);
  };

  return (
    <>
      <History history={history} />
      <CommandBlock push={pushCommand} key={generateUniqueId()} />
    </>
  );
};

export default Terminal;
