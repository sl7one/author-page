export const normalizeWidthHeightAfterRotate = (element, getterFn) => {
   const { elRotate, elHeight, elWidth } = getterFn();

   switch (Math.abs(elRotate % 180)) {
      case 90:
         element.staticParams.width = elHeight;
         element.staticParams.height = elWidth;
         return;
      case 0:
         element.staticParams.width = elHeight;
         element.staticParams.height = elWidth;
         return;
      default:
         throw new Error('normalize Width Height AfterRotate');
   }
};
