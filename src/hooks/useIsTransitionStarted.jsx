import { useEffect } from 'react';

export const useIsTransitionStarted = ({ ref, setIsTransitionRun }) => {
   useEffect(() => {
      const handlerStart = () => {
         setIsTransitionRun(true);
      };
      const handlerEnd = () => {
         setIsTransitionRun(false);
      };
      const element = ref.current;

      element.addEventListener('transitionstart', handlerStart);
      element.addEventListener('transitionend', handlerEnd);

      return () => {
         element.removeEventListener('transitionstart', handlerStart);
         element.removeEventListener('transitionend', handlerEnd);
      };
   });
};
