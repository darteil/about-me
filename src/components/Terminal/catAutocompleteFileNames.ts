const command = 'cat ';
const files = ['projects.txt', 'contacts.txt', 'about.txt'];

const catAutocompleteFileNames = (text: string): string => {
  if (text.indexOf(command) !== 0) return '';

  const str = text.replace(command, '');
  const matches: string[] = [];
  let result = '';

  files.forEach((file: string) => {
    if (file.indexOf(str) === 0) {
      matches.push(file);
    }
  });

  if (matches.length > 0 && matches.length < 2) {
    result = matches[0];
  } else {
    return '';
  }

  return `${command}${result}`;
};

export default catAutocompleteFileNames;
