import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import Chat from '../Chat';
import Commands from './CommandProcessing/commands';
import generateUniqueId from './generateUniqueId';

const Terminal = (): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showChat, setShowChat] = useState<boolean>(false);
  const commands = new Commands();

  const chatClose = (): void => {
    setShowChat(false);
  };

  const pushCommand = (command: string, output: () => JSX.Element): void => {
    const saveCommand = (): void => {
      setHistory([...history, { id: generateUniqueId(), command, output }]);
    };

    if (command === commands.clear) {
      setHistory([]);
    } else if (command === commands.chat) {
      setShowChat(true);
      saveCommand();
    } else {
      saveCommand();
    }
  };

  return (
    <>
      <History history={history} />
      {showChat ? (
        ReactDOM.createPortal(<Chat onClose={chatClose} />, document.body)
      ) : (
        <CommandBlock push={pushCommand} key={generateUniqueId()} />
      )}
    </>
  );
};

export default Terminal;
