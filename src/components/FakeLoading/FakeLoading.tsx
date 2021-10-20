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
  'React (17.0.1)...',
  'ReactDOM (17.0.1)...',
  'react-typist (2.0.5)...',
  'axios (0.19.0)...',
];

const FakeLoading = (): JSX.Element => (
  <StyledWrap>
    <ul>
      {packagesList.map(
        (packageItem: string): JSX.Element => (
          <li key={packageItem}>
            [ <StyledOkIndicator>ok</StyledOkIndicator> ] {packageItem}
          </li>
        ),
      )}
      <StyledLiStarting>
        [ <StyledWaitIndicator>wait</StyledWaitIndicator> ] Starting app <Loader />
      </StyledLiStarting>
    </ul>
  </StyledWrap>
);

export default FakeLoading;
