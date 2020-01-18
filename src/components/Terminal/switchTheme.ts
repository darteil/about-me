import Commands from './CommandProcessing/commands';

export default function switchTheme(command: string): void {
  switch (command) {
    case Commands.switchThemeDefault: {
      document.documentElement.setAttribute('data-theme', 'default');
      localStorage.setItem('darteil_projects_theme', 'default');
      break;
    }
    case Commands.switchThemeLight: {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('darteil_projects_theme', 'light');
      break;
    }
    case Commands.switchThemeSolarized: {
      document.documentElement.setAttribute('data-theme', 'solarized');
      localStorage.setItem('darteil_projects_theme', 'solarized');
      break;
    }
  }
}
