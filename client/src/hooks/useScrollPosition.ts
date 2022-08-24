import { useEffect, useMemo, useState } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const rootElement = useMemo(() => {
    return document.getElementById('root') as HTMLElement;
  }, []);

  useEffect(() => {
    const onChangeScrollPosition = () =>
      requestAnimationFrame(() => {
        setScrollPosition(rootElement.scrollTop);
      });
    rootElement.addEventListener('scroll', onChangeScrollPosition);

    return () => {
      rootElement.removeEventListener('scroll', onChangeScrollPosition);
    };
  }, [rootElement]);

  return scrollPosition;
}
