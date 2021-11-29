import React from 'react';
import Greeting from './ResultCommands/Greeting';
import Help from './ResultCommands/Help';
import Projects from './ResultCommands/Projects';
import Contacts from './ResultCommands/Contacts';
import Ls from './ResultCommands/Ls';
import Skills from './ResultCommands/Skills';
import Experience from './ResultCommands/Experience';
import SudoSu from './ResultCommands/SudoSu';

const Empty = (): JSX.Element => <></>;

const Commands = {
  about: 'cat about.txt',
  help: 'help',
  ls: 'ls',
  catProjects: 'cat projects.txt',
  catContacts: 'cat contacts.txt',
  catSkills: 'cat skills.txt',
  catWorkExperience: 'cat work-experience.txt',
  clear: 'clear',
  sudoSu: 'sudo su',
  empty: '',

  /* themes */
  switchThemeLight: 'switch theme light',
  switchThemeDefault: 'switch theme default',
  switchThemeSolarized: 'switch theme solarized',
};

const Results = new Map<string, () => JSX.Element>();

Results.set(Commands.about, Greeting);
Results.set(Commands.catProjects, Projects);
Results.set(Commands.catContacts, Contacts);
Results.set(Commands.catSkills, Skills);
Results.set(Commands.catWorkExperience, Experience);
Results.set(Commands.ls, Ls);
Results.set(Commands.help, Help);
Results.set(Commands.sudoSu, SudoSu);
Results.set(Commands.clear, Empty);
Results.set(Commands.switchThemeDefault, Empty);
Results.set(Commands.switchThemeLight, Empty);
Results.set(Commands.switchThemeSolarized, Empty);
Results.set(Commands.empty, Empty);

export { Commands, Results, Empty };
