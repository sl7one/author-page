import { useRef } from 'react';

import { useIsTransitionStarted } from 'hooks/useIsTransitionStarted';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { CornerRightElementBox } = require('styles/styled');

export const CornerRightElement = observer(() => {
   const ref = useRef(null);
   const { size, setElement, setIsTransitionRun, element } = gameStore;
   useIsTransitionStarted({ ref, setIsTransitionRun });
   useSetRefToStore({ ref, setElement });

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
