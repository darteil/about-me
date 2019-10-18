import React, { useState } from 'react';
import CommandLine from './CommandLine';
import getResultCommand from './CommandProcessing/ResultCommands/getResultCommand';

interface IProp {
  push: (command: string, output: () => JSX.Element) => void;
}

const CommandBlock = (props: IProp): JSX.Element => {
  const [result, setResult] = useState<JSX.Element>(<div></div>);

  const pushCommand = (command: string) => {
    let output: () => JSX.Element = getResultCommand(command);
    setResult(output);
    props.push(command, output);
  };

  return (
    <>
      <CommandLine onInput={pushCommand} setCustomResult={props.push} />
      <div>{result}</div>
    </>
  );
};

export default CommandBlock;
