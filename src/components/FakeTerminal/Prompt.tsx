import React from 'react';
import styled from 'styled-components';

interface IProps {
  path?: string;
}

const StyledPrompt = styled.div`
  margin-right: 8px;
`;

const StyledUser = styled.span`
  color: ${(props) => props.theme.userInfo};
`;

const StyledPath = styled.span`
  color: ${(props) => props.theme.pathInfo};
`;

const Prompt = (props: IProps): JSX.Element => (
  <StyledPrompt>
    <StyledUser>darteil@github</StyledUser>
    <span>:</span>
    <StyledPath>{props.path}</StyledPath>
    <span>$</span>
  </StyledPrompt>
);

Prompt.defaultProps = {
  path: '~'
};

export default Prompt;
