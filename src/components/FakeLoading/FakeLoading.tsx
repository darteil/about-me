import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const StyledWrap = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
`;

const StyledOkIndicator = styled.span`
  color: ${(props) => props.theme.okIndicator};
`;

const StyledWaitIndicator = styled.span`
  color: ${(props) => props.theme.waitIndicator};
`;

const StyledLiStarting = styled.li`
  margin-top: 10px;
`;

const packagesList: string[] = [
  'React (18.0.0)...',
  'ReactDOM (18.0.0)...',
  'typewriter-effect (2.18.2)...',
  'uuid (3.4.0)...'
];

const FakeLoading = (): JSX.Element => (
  <StyledWrap>
    <ul>
      {packagesList.map(
        (packageItem: string): JSX.Element => (
          <li key={packageItem}>
            [ <StyledOkIndicator>ok</StyledOkIndicator> ] {packageItem}
          </li>
        )
      )}
      <StyledLiStarting>
        [ <StyledWaitIndicator>wait</StyledWaitIndicator> ] Starting app <Loader />
      </StyledLiStarting>
    </ul>
  </StyledWrap>
);

export default FakeLoading;
