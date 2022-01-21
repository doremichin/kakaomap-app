import { RefObject, useEffect, useState } from 'react';

function useIntersection(ref : RefObject<HTMLDivElement>, options : any) {
  const [inView, setInView] = useState(false);
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
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [inView]);

  return [inView];
}

export default useIntersection;
