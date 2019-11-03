import Commands from './CommandProcessing/commands';

const commands = new Commands();

export default function switchTheme(command: string) {
  switch (command) {
    case commands.switchThemeDefault: {
      document.documentElement.setAttribute('data-theme', 'default');
      localStorage.setItem('darteil_projects_theme', 'default');
      break;
    }
    case commands.switchThemeLight: {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('darteil_projects_theme', 'light');
      break;
    }
  }
}
