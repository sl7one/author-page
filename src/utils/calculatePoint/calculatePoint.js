export const calculatePoint = ({ type, left, top, width, height, count, size, i }) => {
   const coordX = left / size;
   const coordY = top / size;
   const coordWidthSize = width / size;

   const fixValue = type === 'line' && height > width ? i - 1 : i;

   const pointStart = coordX + (coordY + fixValue) * Math.sqrt(count);
   const pointEnd = pointStart + coordWidthSize;

   return { pointStart, pointEnd, coordX, coordY };
};
