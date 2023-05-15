import { useCallback, useState } from 'react';

export const useStartStop = ({ element, moveDown, speedMoveDown }) => {
   const [startButton, setStartButton] = useState(false);

   const start = useCallback(() => {
      setStartButton(true);
      element.timer = setInterval(moveDown, speedMoveDown);
   }, [element, moveDown, speedMoveDown]);

   const stop = () => {
      setStartButton(false);
      clearInterval(element.timer);
   };
   return {
      start,
      stop,
      startButton,
   };
};
