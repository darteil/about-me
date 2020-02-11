const command = 'cat ';
const files = ['projects.txt', 'contacts.txt', 'about.txt', 'professional-skills.txt', 'work-experience.txt'];

interface IAutocompleteResult {
  result: string;
  isSomeMatches: boolean;
}

const autocompleteFileNames = (text: string): IAutocompleteResult => {
  let result: IAutocompleteResult = {
    result: '',
    isSomeMatches: false,
  };

  if (text.indexOf(command) !== 0) return result;

  const str = text.replace(command, '');
  const matches: string[] = [];

  files.forEach((file: string) => {
    if (file.indexOf(str) === 0) {
      matches.push(file);
    }
  });

  if (matches.length > 0 && matches.length < 2) {
    result = {
      result: `${command}${matches[0]}`,
      isSomeMatches: false,
    };
  } else {
    let str = '';
    matches.forEach((command: string) => {
      str = `${str} ${command}`;
    });
    result = {
      result: str,
      isSomeMatches: true,
    };
  }

  return result;
};

export { autocompleteFileNames, IAutocompleteResult };
