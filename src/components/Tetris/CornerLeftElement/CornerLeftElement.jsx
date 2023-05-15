import { useRef } from 'react';

import { useKeyboadrControls } from 'hooks/useKeyboadrControls';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { CornerLeftElementBox } = require('styles/styled');

export const CornerLeftElement = observer(() => {
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
      <CornerLeftElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         ref={ref}
         type="cornerLeft"
      >
         <ElementsBlocks count={6} />
      </CornerLeftElementBox>
   );
});
