export const normalizeLeftTop = (dirtyLeft, dirtyTop, size) => {
   let left,
      top = null;

   if (dirtyLeft < 0) {
      left = 0;
   } else if (dirtyLeft % size !== 0) {
      left = dirtyLeft + size / 2;
   } else {
      left = dirtyLeft;
   }

   top = dirtyTop % size !== 0 ? dirtyTop - size / 2 : dirtyTop;

   return { left, top };
};
