import Commands from './CommandProcessing/commands';

const commands = new Commands();

export default function switchTheme(command: string): void {
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
    case commands.switchThemeSolarized: {
      document.documentElement.setAttribute('data-theme', 'solarized');
      localStorage.setItem('darteil_projects_theme', 'solarized');
      break;
    }
  }
}
