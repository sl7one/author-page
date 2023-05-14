import { useRef } from 'react';

import { useIsTransitionStarted } from 'hooks/useIsTransitionStarted';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { TElementBox } = require('styles/styled');

export const TElement = observer(() => {
   const ref = useRef(null);
   const { size, setElement, setIsTransitionRun, element } = gameStore;
   useIsTransitionStarted({ ref, setIsTransitionRun });
   useSetRefToStore({ ref, setElement });

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
