import { normalizeLeftTop } from 'utils/normalizeLeftTop/normalizeLeftTop';

export const fillArea = (params, size, count, mesh) => {
   const { type, width, height, left: dirtyLeft, top: dirtyTop, rotation } = params;
   const { left, top } = normalizeLeftTop(dirtyLeft, dirtyTop, size);

   const coordX = left / size;
   const coordY = top / size;
   const coordWidthSize = width / size;
   const coordHeightSize = height / size;

   for (let i = 0; i <= coordHeightSize - 1; i++) {
      const pointStart = coordX + (coordY + i) * Math.sqrt(count);
      const pointEnd = pointStart + coordWidthSize;

      for (let q = pointStart; q <= pointEnd - 1; q++) {
         mesh.ref.children[q].attributes.val.value = 1;
         mesh.ref.children[q].style.backgroundColor = 'red';
      }
   }
};
