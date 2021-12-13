import React, { useState, Dispatch, SetStateAction } from 'react';
import { v1 as uuid } from 'uuid';
import TerminalContext from './TerminalContext';
import CommandBlock from './CommandBlock';
import { History, IHistory } from './History';
import { Commands } from './CommandProcessing/outputs';
import { themes } from '../../themes';

interface IProps {
  onClear: Dispatch<SetStateAction<boolean>>;
  toggleTheme: (theme: keyof typeof themes) => void;
  clearStatus: boolean;
}

const Terminal = (props: IProps): JSX.Element => {
  const [history, setHistory] = useState<IHistory[]>([]);
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);

  const addNewCommandToHistory = (command: string) => {
    if (!commandsHistory.includes(command)) {
      setCommandsHistory((prevState: string[]) => {
        return [command, ...prevState];
      });
    }
  };

  const switchTheme = (command: string) => {
    switch (command) {
      case Commands.switchThemeDefault: {
        localStorage.setItem('theme', 'default');
        props.toggleTheme('default');
        break;
      }
      case Commands.switchThemeLight: {
        localStorage.setItem('theme', 'light');
        props.toggleTheme('light');
        break;
      }
      case Commands.switchThemeSolarized: {
        localStorage.setItem('theme', 'solarized');
        props.toggleTheme('solarized');
        break;
      }
      default: {
        localStorage.setItem('theme', 'default');
        props.toggleTheme('default');
      }
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
      <CommandBlock push={pushCommand} key={uuid()} />
    </TerminalContext.Provider>
  );
};

export default Terminal;
