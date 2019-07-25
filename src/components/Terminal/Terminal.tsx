import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TerminalContext from './TerminalContext';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import Chat from '../Chat';
import Commands from './CommandProcessing/commands';
import generateUniqueId from './generateUniqueId';

const Terminal = (): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const commands = new Commands();

  const chatClose = (): void => {
    setShowChat(false);
  };

  const addNewCommandToHistory = (command: string): void => {
    if (!commandHistory.includes(command)) {
      setCommandHistory((prevState: string[]) => {
        return [command, ...prevState];
      });
    }
  };

  const pushCommand = (command: string, output: () => JSX.Element): void => {
    const saveCommand = (): void => {
      setHistory([...history, { id: generateUniqueId(), command, output }]);
      addNewCommandToHistory(command);
    };

    if (command === commands.clear) {
      setHistory([]);
      addNewCommandToHistory(commands.clear);
    } else if (command === commands.chat) {
      setShowChat(true);
      saveCommand();
    } else {
      saveCommand();
    }
  };

  return (
    <TerminalContext.Provider value={{ commandHistory }}>
      <History history={history} />
      {showChat ? (
        ReactDOM.createPortal(<Chat onClose={chatClose} />, document.body)
      ) : (
        <CommandBlock push={pushCommand} key={generateUniqueId()} />
      )}
    </TerminalContext.Provider>
  );
};

export default Terminal;
