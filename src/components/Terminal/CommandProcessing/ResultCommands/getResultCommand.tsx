import React from 'react';
import { Results } from '../outputs';

const getResultCommand = (command: string): (() => JSX.Element) => {
  const trimCommand = command.trim();
  const notFound = (): JSX.Element => <div>{`${command}: command not found`}</div>;
  const result = Results.get(trimCommand);

  return result || notFound;
};

export default getResultCommand;
