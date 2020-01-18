import React, { useState, Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import TerminalContext from './TerminalContext';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import Feedback from '../Feedback';
import Commands from './CommandProcessing/commands';
import generateUniqueId from './generateUniqueId';
import switchTheme from './switchTheme';

interface IProps {
  onClear: Dispatch<SetStateAction<boolean>>;
}

const Terminal = (props: IProps): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const feedbackClose = () => {
    setShowFeedback(false);
  };

  const addNewCommandToHistory = (command: string) => {
    if (!commandHistory.includes(command)) {
      setCommandHistory((prevState: string[]) => {
        return [command, ...prevState];
      });
    }
  };

  const pushCommand = (command: string, output: () => JSX.Element) => {
    const saveCommand = () => {
      setHistory([...history, { id: generateUniqueId(), command, output }]);
      addNewCommandToHistory(command);
    };

    if (command === Commands.clear) {
      setHistory([]);
      addNewCommandToHistory(Commands.clear);
      props.onClear(true);
    } else if (command === Commands.feedback) {
      setShowFeedback(true);
      saveCommand();
    } else if (/^switch theme /i.test(command)) {
      switchTheme(command);
      saveCommand();
    } else {
      saveCommand();
    }
  };

  return (
    <TerminalContext.Provider value={{ commandHistory }}>
      <History history={history} />
      {showFeedback ? (
        ReactDOM.createPortal(<Feedback onClose={feedbackClose} />, document.body)
      ) : (
        <CommandBlock push={pushCommand} key={generateUniqueId()} />
      )}
    </TerminalContext.Provider>
  );
};

export default Terminal;
