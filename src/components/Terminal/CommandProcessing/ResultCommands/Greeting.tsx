import React from 'react';

// prettier-ignore
/* eslint-disable */
const ascii = `
                \\||/
                |  @___oo
      /\\  /\\   / (__,,,,|
     ) /^\\) ^\\/ _)
     )   /^\\/   _)
     )   _ /  / _)
 /\\  )/\\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \\)___)\\
 | \\____(      )___) )___
  \\______(_______;;; __;;;
`;
/* eslint-enable */

const Greeting = (): JSX.Element => (
  <>
    <pre>
      <code>{ascii}</code>
    </pre>
    <div>
      <p>Приветствую!</p>
      <p>Меня зовут Юрий. Занимаюсь web-разработкой, направление: frontend.</p>
      <p>Используйте терминал чтобы узнать больше 😀</p>
      <p>Введите help для просмотра доступных команд...</p>
    </div>
  </>
);

export default Greeting;
