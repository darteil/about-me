import React, { useState, Dispatch, SetStateAction, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { v1 as uuid } from 'uuid';
import TerminalContext from './TerminalContext';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import Commands from './CommandProcessing/commands';
import switchTheme from './switchTheme';

const Feedback = React.lazy(() => import('../Feedback'));

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
      setHistory([...history, { id: uuid(), command, output }]);
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
        ReactDOM.createPortal(
          <Suspense fallback={<div>Загрузка...</div>}>
            <Feedback onClose={feedbackClose} />
          </Suspense>,
          document.body,
        )
      ) : (
        <CommandBlock push={pushCommand} key={uuid()} />
      )}
    </TerminalContext.Provider>
  );
};

export default Terminal;
