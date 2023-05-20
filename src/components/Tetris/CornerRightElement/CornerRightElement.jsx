import { useRef } from 'react';

import { useKeyboadrControls } from 'hooks/useKeyboadrControls';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { CornerRightElementBox } = require('styles/styled');

export const CornerRightElement = observer(() => {
   const ref = useRef(null);
   const {
      size,
      setElement,
      element,
      mesh,
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
   } = gameStore;
   useSetRefToStore({ ref, setElement, mesh });
   useKeyboadrControls({
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
   });

   return (
      <CornerRightElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         ref={ref}
         type="cornerRight"
      >
         <ElementsBlocks count={6} />
      </CornerRightElementBox>
   );
});
