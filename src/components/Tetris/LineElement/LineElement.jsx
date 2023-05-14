import { useRef } from 'react';

import { useIsTransitionStarted } from 'hooks/useIsTransitionStarted';
import { useSetRefToStore } from 'hooks/useSetRefToStore';
import { observer } from 'mobx-react-lite';
import { gameStore } from 'store/gameStore';

import { ElementsBlocks } from '../ElementsBlocks/ElementsBlocks';

const { LineElementBox } = require('styles/styled');

export const LineElement = observer(() => {
   const ref = useRef(null);
   const { size, setElement, setIsTransitionRun, element } = gameStore;
   useIsTransitionStarted({ ref, setIsTransitionRun });
   useSetRefToStore({ ref, setElement });

   return (
      <LineElementBox
         width={size}
         height={size}
         left={element.staticParams.left}
         top={element.staticParams.top}
         rotate={element.staticParams.rotate}
         ref={ref}
         type="line"
      >
         <ElementsBlocks count={4} />
      </LineElementBox>
   );
});
