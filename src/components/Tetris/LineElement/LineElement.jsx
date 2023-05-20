import { useRef } from 'react';

import { useKeyboadrControls } from 'hooks/useKeyboadrControls';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { LineElementBox } = require('styles/styled');

export const LineElement = observer(() => {
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
      <LineElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         opacity={element.staticParams.opacity}
         ref={ref}
         type="line"
      >
         <ElementsBlocks count={4} />
      </LineElementBox>
   );
});
