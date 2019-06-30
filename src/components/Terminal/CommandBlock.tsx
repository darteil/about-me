import React, { useState } from 'react';
import CommandLine from './CommandLine';
import getResultCommand from './CommandProcessing/getResultCommand';

interface IProp {
  push: (command: string, output: () => JSX.Element) => void;
}

const CommandBlock = (props: IProp): JSX.Element => {
  const [result, setResult] = useState<JSX.Element>(<div></div>);

  const pushCommand = (command: string): void => {
    let output: () => JSX.Element = getResultCommand(command);
    setResult(output);
    props.push(command, output);
  };

  return (
    <>
      <CommandLine onInput={pushCommand} />
      <div>{result}</div>
    </>
  );
};

export default CommandBlock;
