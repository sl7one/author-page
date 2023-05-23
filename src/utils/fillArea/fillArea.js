import { calculateException } from 'utils/calculateException/calculateException';
import { calculatePoint } from 'utils/calculatePoint/calculatePoint';
import { normalizeLeftTop } from 'utils/normalizeLeftTop/normalizeLeftTop';

export const fillArea = (params, size, count, mesh) => {
   const {
      type,
      width,
      height,
      left: dirtyLeft,
      top: dirtyTop,
      //   rotate,
      //   rotation,
   } = params;
   const { left, top } = normalizeLeftTop(dirtyLeft, dirtyTop, size);

   const coordHeightSize = height / size;

   for (let i = 0; i <= coordHeightSize - 1; i++) {
      const { pointStart, pointEnd, coordX, coordY } = calculatePoint({
         type,
         left,
         top,
         width,
         height,
         count,
         size,
         i,
      });

      for (let q = pointStart; q <= pointEnd - 1; q++) {
         const { exception } = calculateException({
            type,
            width,
            height,
            coordX,
            coordY,
            pointEnd,
            coordHeightSize,
            q,
            count,
         });

         if (exception) {
            continue;
         }
         mesh.ref.children[q].attributes.val.value = 1;
         mesh.ref.children[q].style.backgroundColor = 'red';
      }
   }
   console.log('');
};
