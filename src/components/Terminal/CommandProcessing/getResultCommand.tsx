import React from 'react';
import * as results from './ResultsCommands';
import Commands from './commands';

const getResultCommand = (command: string): (() => JSX.Element) => {
  const commands = new Commands();
  const trimCommand = command.trim();
  const div = (): JSX.Element => <div />;
  const notFound = (): JSX.Element => <div>{`${command}: command not found`}</div>;

  if (trimCommand === 'exit') {
    window.close();
  }

  if (!trimCommand.length) {
    return div;
  }

  switch (trimCommand) {
    case commands.about: {
      return results.Greeting;
    }
    case commands.catProjects: {
      return results.Projects;
    }
    case commands.catContacts: {
      return results.Contacts;
    }
    case commands.ls: {
      return results.Ls;
    }
    case commands.help: {
      return results.Help;
    }
    case '': {
      return div;
    }
    default: {
      return notFound;
    }
  }
};

export default getResultCommand;
