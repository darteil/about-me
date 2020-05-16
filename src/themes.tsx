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
  feedbackBackground: string;
  feedbackBorder: string;
  feedbackColor: string;
  feedbackIconColor: string;
  feedbackIconHover: string;
  feedbackButtonBackground: string;
  feedbackButtonBorder: string;
  feedbackButtonColor: string;
  feedbackButtonBackgroundHover: string;
  feedbackButtonBorderHover: string;
  feedbackButtonColorHover: string;
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
    feedbackBackground: '#000',
    feedbackBorder: '#fff',
    feedbackColor: '#fff',
    feedbackIconColor: '#fff',
    feedbackIconHover: '#0f0',
    feedbackButtonBackground: '#000',
    feedbackButtonBorder: '#fff',
    feedbackButtonColor: '#fff',
    feedbackButtonBackgroundHover: '#fff',
    feedbackButtonBorderHover: '#fff',
    feedbackButtonColorHover: '#000',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate',
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
    feedbackBackground: '#fff',
    feedbackBorder: '#000',
    feedbackColor: '#000',
    feedbackIconColor: '#000',
    feedbackIconHover: '#0f0',
    feedbackButtonBackground: '#fff',
    feedbackButtonBorder: '#000',
    feedbackButtonColor: '#000',
    feedbackButtonBackgroundHover: '#000',
    feedbackButtonBorderHover: '#000',
    feedbackButtonColorHover: '#fff',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate',
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
    feedbackBackground: '#002a35',
    feedbackBorder: '#839496',
    feedbackColor: '#839496',
    feedbackIconColor: '#839496',
    feedbackIconHover: '#859900',
    feedbackButtonBackground: '#002a35',
    feedbackButtonBorder: '#839496',
    feedbackButtonColor: '#839496',
    feedbackButtonBackgroundHover: '#839496',
    feedbackButtonBorderHover: '#839496',
    feedbackButtonColorHover: '#000',
    profSkillsComplete: 'green',
    profSkillsWait: 'chocolate',
  },
};
