import React, { useState, Dispatch, SetStateAction, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { v1 as uuid } from 'uuid';
import TerminalContext from './TerminalContext';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import { Commands } from './CommandProcessing/outputs';
import switchTheme from './switchTheme';
import FeedbackLoading from '../Feedback/FeedbackLoading';

const Feedback = React.lazy(() => import('../Feedback'));

interface IProps {
  onClear: Dispatch<SetStateAction<boolean>>;
  clearStatus: boolean;
}

const Terminal = (props: IProps): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);

  const feedbackClose = () => {
    setShowFeedback(false);
  };

  const addNewCommandToHistory = (command: string) => {
    if (!commandsHistory.includes(command)) {
      setCommandsHistory((prevState: string[]) => {
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
      if (!props.clearStatus) props.onClear(true);
    } else if (command === Commands.feedback) {
      setShowFeedback(true);
      saveCommand();
    } else if (/^switch theme /i.test(command)) {
      switchTheme(command);
      saveCommand();
    } else if (command === Commands.sudoSu) {
      if (!props.clearStatus) props.onClear(true);
      setHistory([{ id: uuid(), command, output }]);
    } else if (/^ *$/.test(command)) {
      setHistory([...history]);
    } else {
      saveCommand();
    }
  };

  return (
    <TerminalContext.Provider value={{ commandsHistory }}>
      <History history={history} />
      {showFeedback ? (
        ReactDOM.createPortal(
          <Suspense fallback={FeedbackLoading()}>
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
