import React, { useState } from 'react';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import Commands from './CommandProcessing/commands';
import generateUniqueId from './generateUniqueId';

const Terminal = (): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const commands = new Commands();

  const pushCommand = (command: string, output: () => JSX.Element): void => {
    if (command === commands.clear) {
      setHistory([]);
    } else {
      setHistory([...history, { id: generateUniqueId(), command, output }]);
    }
  };

  return (
    <>
      <History history={history} />
      <CommandBlock push={pushCommand} key={generateUniqueId()} />
    </>
  );
};

export default Terminal;
