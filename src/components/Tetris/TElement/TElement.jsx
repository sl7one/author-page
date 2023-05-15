import { useRef } from 'react';

import { useKeyboadrControls } from 'hooks/useKeyboadrControls';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { TElementBox } = require('styles/styled');

export const TElement = observer(() => {
   const ref = useRef(null);
   const {
      size,
      setElement,
      element,
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
   } = gameStore;
   useSetRefToStore({ ref, setElement });
   useKeyboadrControls({
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
   });

   return (
      <TElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         ref={ref}
         type="t"
      >
         <ElementsBlocks count={6} />
      </TElementBox>
   );
});
