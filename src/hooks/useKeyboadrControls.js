import { useEffect } from 'react';

export const useKeyboadrControls = ({
   moveLeft,
   moveRight,
   rotateElementLeft,
   rotateElementRight,
}) => {
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
};
