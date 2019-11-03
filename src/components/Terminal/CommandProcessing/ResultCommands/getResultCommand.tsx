import React from 'react';
import Greeting from './Greeting';
import Help from './Help';
import Projects from './Projects';
import Contacts from './Contacts';
import Ls from './Ls';
import Skills from './Skills';
import Commands from '../commands';

const getResultCommand = (command: string): (() => JSX.Element) => {
  const commands = new Commands();
  const trimCommand = command.trim();
  const empty = (): JSX.Element => <></>;
  const notFound = (): JSX.Element => <div>{`${command}: command not found`}</div>;

  if (trimCommand === 'exit') {
    window.close();
  }

  if (!trimCommand.length) {
    return empty;
  }

  switch (trimCommand) {
    case commands.about: {
      return Greeting;
    }
    case commands.catProjects: {
      return Projects;
    }
    case commands.catContacts: {
      return Contacts;
    }
    case commands.catSkills: {
      return Skills;
    }
    case commands.ls: {
      return Ls;
    }
    case commands.help: {
      return Help;
    }
    case commands.clear: {
      return empty;
    }
    case commands.feedback: {
      return empty;
    }
    case commands.switchThemeDefault: {
      return empty;
    }
    case commands.switchThemeLight: {
      return empty;
    }
    case '': {
      return empty;
    }
    default: {
      return notFound;
    }
  }
};

export default getResultCommand;
