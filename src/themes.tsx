export type Theme = {
  primaryBg: string;
  primaryColor: string;
  linksColor: string;
  spinnerColor: string;
  okIndicator: string;
  waitIndicator: string;
  userInfo: string;
  pathInfo: string;
  inputBackground: string;
  profSkillsComplete: string;
  profSkillsWait: string;
};

export const themes = {
  default: {
    primaryBg: '#000',
    primaryColor: '#fff',
    linksColor: 'rgb(189, 95, 27)',
    spinnerColor: 'dodgerblue',
    okIndicator: '#0f0',
    waitIndicator: 'coral',
    userInfo: '#0f0',
    pathInfo: 'royalblue',
    inputBackground: '#000',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate'
  },
  light: {
    primaryBg: '#fff',
    primaryColor: '#000',
    linksColor: 'rgb(189, 95, 27)',
    spinnerColor: 'dodgerblue',
    okIndicator: '#0f0',
    waitIndicator: 'coral',
    userInfo: '#0f0',
    pathInfo: 'royalblue',
    inputBackground: '#000',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate'
  },
  solarized: {
    primaryBg: '#002a35',
    primaryColor: '#839496',
    linksColor: '#cb4b16',
    spinnerColor: '#268bd2',
    okIndicator: '#859900',
    waitIndicator: '#cb4b16',
    userInfo: '#859900',
    pathInfo: '#268bd2',
    inputBackground: '#002a35',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate'
  }
};
