import React, {ReactChildren, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

interface Props {
    children : any
    next() : void
}

function InfiniteScroll ({children ,next} : Props) {

    const [isInView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const options = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
    };

    useEffect(() => {
        const callback = (entries : any, observer : any) => {
            entries.forEach((entry : any) => {
                setInView(entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (ref.current) {
            observer.observe(ref.current);
        }
        if(isInView){
            next();
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref,isInView]);

    return(
        <Container>
            {children}
            <Checker ref={ref}/>
        </Container>
    )
};

const Container = styled.div`

`;
const Checker = styled.div`
`;

export default InfiniteScroll;

