import React from 'react';
import styled from 'styled-components';

import Map from '../../_shared/Map/Map';
import SearchList from '../../_shared/Map/addressSearch/SearchList';

function MapSearch() {
  return (
    <Container>
      <Map />
      <SearchList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export default MapSearch;
