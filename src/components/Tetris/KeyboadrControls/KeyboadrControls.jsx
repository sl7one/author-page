import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

export const KeyboadrControls = observer(() => {
   const { moveLeft, moveRight, rotateElementLeft, rotateElementRight } = gameStore;

   useEffect(() => {
      const keyPress = ({ key }) => {
         switch (key) {
            case 'ArrowLeft':
               moveLeft();
               break;
            case 'ArrowRight':
               moveRight();
               break;
            case 'ArrowUp':
               rotateElementLeft();
               break;
            case 'ArrowDown':
               rotateElementRight();
               break;
            default:
               return null;
         }
      };
      window.addEventListener('keydown', keyPress);
      return () => {
         window.removeEventListener('keydown', keyPress);
      };
   }, [moveLeft, moveRight, rotateElementLeft, rotateElementRight]);

   return <div></div>;
});
