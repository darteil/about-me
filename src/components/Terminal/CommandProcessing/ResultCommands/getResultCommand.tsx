import React from 'react';
import Greeting from './Greeting';
import Help from './Help';
import Projects from './Projects';
import Contacts from './Contacts';
import Ls from './Ls';
import Skills from './Skills';
import Experience from './Experience';
import SudoSu from './SudoSu';
import Commands from '../commands';

const getResultCommand = (command: string): (() => JSX.Element) => {
  const trimCommand = command.trim();
  const empty = (): JSX.Element => <></>;
  const notFound = (): JSX.Element => <div>{`${command}: command not found`}</div>;

  if (!trimCommand.length) {
    return empty;
  }

  switch (trimCommand) {
    case Commands.about: {
      return Greeting;
    }
    case Commands.catProjects: {
      return Projects;
    }
    case Commands.catContacts: {
      return Contacts;
    }
    case Commands.catSkills: {
      return Skills;
    }
    case Commands.catWorkExperience: {
      return Experience;
    }
    case Commands.ls: {
      return Ls;
    }
    case Commands.help: {
      return Help;
    }
    case Commands.sudoSu: {
      return SudoSu;
    }
    case Commands.clear: {
      return empty;
    }
    case Commands.feedback: {
      return empty;
    }
    case Commands.switchThemeDefault: {
      return empty;
    }
    case Commands.switchThemeLight: {
      return empty;
    }
    case Commands.switchThemeSolarized: {
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
