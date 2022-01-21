import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useIntersection from './hooks/useIntersection';

interface Props {
    children : any
    next() : void
}

const options = {
  threshold: 0,
  rootMargin: '0px 0px 0px 0px',
};

function InfiniteScroll({ children, next } : Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView] = useIntersection(ref, options);

  useEffect(() => {
    if (inView) {
      next();
    }
  }, [inView]);

  return (
    <Container>
      {children}
      <Checker ref={ref} />
    </Container>
  );
}

const Container = styled.div`

`;
const Checker = styled.div`
`;

export default InfiniteScroll;
