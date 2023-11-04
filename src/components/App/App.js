import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
      <Header />
      
    </>
  );
};

const Main = styled.main`
  padding: 064px 32px 0px 32px;
  margin-top: calc(48px + 87.8px);
  isolation: isolate;
`;

export default App;
