import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.span`
  color: ${props => props.theme.spinnerColor};
  font-weight: bolder;
  font-size: 18px;
`;

const frames: string[] = ['.  ', '.. ', '...', '   '];

const Loader = (): JSX.Element => {
  const [indicator, setIndicator] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndicator((indicator: number): number => {
        if (indicator >= 3) {
          return 0;
        }

        return indicator + 1;
      });
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <StyledSpinner>{frames[indicator]}</StyledSpinner>;
};

export default Loader;
