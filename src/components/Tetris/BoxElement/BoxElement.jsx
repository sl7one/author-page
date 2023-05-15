import { useRef } from 'react';

import { useKeyboadrControls } from 'hooks/useKeyboadrControls';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { BoxElementBox } = require('styles/styled');

export const BoxElement = observer(() => {
   const ref = useRef(null);
   const {
      size,
      setElement,
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
      element,
   } = gameStore;

   useSetRefToStore({ ref, setElement });
   useKeyboadrControls({
      moveLeft,
      moveRight,
      rotateElementLeft,
      rotateElementRight,
   });

   return (
      <BoxElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         ref={ref}
         type="box"
      >
         <ElementsBlocks count={4} />
      </BoxElementBox>
   );
});
