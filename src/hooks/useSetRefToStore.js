import { useEffect } from 'react';

export const useSetRefToStore = ({ ref, setElement }) => {
   useEffect(() => {
      const element = ref.current;
      const wrapper = () => {
         setElement(element);
      };

      setTimeout(wrapper, 0);
   }, [setElement, ref]);
};
