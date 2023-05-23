export const calculateException = ({
   type,
   width,
   height,
   coordX,
   coordY,
   //    pointEnd,
   //    coordHeightSize,
   q,
   count,
}) => {
   const isDirectionHorizontal = width > height;
   //    const isDirectionVertical = width < height;
   const pointStart = coordX + coordY * Math.sqrt(count);

   let exception = false;

   switch (type) {
      case 'box':
      case 'line':
         exception = false;
         break;
      case 't':
         isDirectionHorizontal && pointStart === q
            ? (exception = true)
            : (exception = false);
         isDirectionHorizontal && pointStart + 2 === q
            ? (exception = true)
            : (exception = false);

         break;
      default:
         throw new Error('calculate Point');
   }

   return { exception };
};
