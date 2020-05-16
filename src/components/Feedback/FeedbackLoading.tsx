import React from 'react';
import styled from 'styled-components';
import Loader from '../FakeLoading/Loader';

const StyledWrap = styled.div`
  width: 800px;
  margin: 10px auto;
`;

const FeedbackLoading = () => (
  <StyledWrap>
    Form loading <Loader />
  </StyledWrap>
);

export default FeedbackLoading;
