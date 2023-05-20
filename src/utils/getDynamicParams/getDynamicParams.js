export const getDynamicParams = (el, size) => {
   let { bottom, top, x, y, right, left, width, height } = el.getBoundingClientRect();
   const rotate = 0;
   const opacity = 1;

   const type = el.attributes.type.value;

   switch (type) {
      case 'mesh':
      case 'box':
         break;
      case 'line':
         width = size * 4;
         height = size;
         break;
      case 't':
      case 'cornerLeft':
      case 'cornerRight':
         width = size * 3;
         height = size * 2;
         break;
      default:
         throw new Error('get Dynamic Params');
   }

   return {
      bottom,
      top,
      x,
      y,
      right,
      left,
      width,
      height,
      type,
      rotate,
      opacity,
   };
};
