import { randomNumberInRange } from 'utils/randomNumberInRange/randomNumberInRange.js';

import { BoxElement } from '../components/Tetris/BoxElement/BoxElement.jsx';
import { CornerLeftElement } from '../components/Tetris/CornerLeftElement/CornerLeftElement.jsx';
import { CornerRightElement } from '../components/Tetris/CornerRightElement/CornerRightElement.jsx';
import { LineElement } from '../components/Tetris/LineElement/LineElement.jsx';
import { TElement } from '../components/Tetris/TElement/TElement.jsx';

export const useGameComponent = () => {
   // switch (randomNumberInRange(1, 5)) {
   //    case 1:
   //       return <BoxElement />;
   //    case 2:
   //       return <LineElement />;
   //    case 3:
   //       return <TElement />;
   //    case 4:
   //       return <CornerLeftElement />;
   //    case 5:
   //       return <CornerRightElement />;
   //    default:
   //       return null;
   // }
   switch (randomNumberInRange(1, 5)) {
      case 1:
         return <TElement />;
      case 2:
         return <TElement />;
      case 3:
         return <TElement />;
      case 4:
         return <TElement />;
      case 5:
         return <TElement />;
      default:
         return null;
   }
};
