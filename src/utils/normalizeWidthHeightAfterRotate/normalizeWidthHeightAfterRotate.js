export const normalizeWidthHeightAfterRotate = (el, getterFn) => {
   const { elRotate, elHeight, elWidth } = getterFn();

   switch (Math.abs(elRotate % 180)) {
      case 90:
         el.staticParams.width = elHeight;
         el.staticParams.height = elWidth;
         return;
      case 0:
         el.staticParams.width = elHeight;
         el.staticParams.height = elWidth;
         return;
      default:
         throw new Error('normalize Width Height AfterRotate');
   }
};
