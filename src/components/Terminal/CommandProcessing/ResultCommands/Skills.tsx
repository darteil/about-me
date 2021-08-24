import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  ul {
    list-style: none;
  }
  ul li {
    margin-bottom: 5px;
  }
`;

const StyledCompleteStatus = styled.span`
  color: ${props => props.theme.profSkillsComplete};
`;

const StyledWaitStatus = styled.span`
  color: ${props => props.theme.profSkillsWait};
`;

const CompleteStatus = () => <StyledCompleteStatus>✔️</StyledCompleteStatus>;
const WaitStatus = () => <StyledWaitStatus>●</StyledWaitStatus>;

const Skills = (): JSX.Element => (
  <StyledWrap>
    <ul>
      <li>
        HTML <CompleteStatus />
      </li>
      <li>
        CSS <CompleteStatus />
      </li>
      <li>
        React <CompleteStatus />
      </li>
      <li>
        Redux <CompleteStatus />
      </li>
      <li>
        Webpack <CompleteStatus />
      </li>
      <li>
        Gulp <CompleteStatus />
      </li>
      <li>
        TypeScript <WaitStatus /> (знаком с ним, но нет опыта коммерческой разработки)
      </li>
    </ul>
  </StyledWrap>
);

export default Skills;
