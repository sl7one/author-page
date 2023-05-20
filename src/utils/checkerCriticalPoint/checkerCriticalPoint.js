export const checkerCriticalPoint = (getEl, getMesh, size, option) => {
   const { elLeft, elWidth, elTop, elHeight, elType } = getEl();
   const { meshWidth, meshHeight } = getMesh();

   const isDirectionHorizontal = elWidth > elHeight;
   const isDirectionVertical = elWidth < elHeight;

   let criticalPoint,
      val1,
      val2,
      val3 = null;

   switch (option) {
      case 'move right':
         switch (elType) {
            case 'box':
               return elLeft + elWidth >= meshWidth;
            case 'line':
               val1 = isDirectionHorizontal && elLeft + elWidth >= meshWidth;
               val2 = isDirectionVertical && elLeft + elHeight - size >= meshWidth;
               criticalPoint = val1 || val2;
               return criticalPoint;
            case 't':
            case 'cornerLeft':
            case 'cornerRight':
               return elLeft + elWidth + size / 2 >= meshWidth;
            default:
               throw new Error('checker Critical Point __EL-TYPE');
         }
      case 'move left':
         switch (elType) {
            case 'box':
               return elLeft <= 0;
            case 'line':
               val1 = isDirectionHorizontal && elLeft <= 0;
               val2 = isDirectionVertical && elLeft + size <= 0;
               criticalPoint = val1 || val2;
               return criticalPoint;
            case 't':
            case 'cornerLeft':
            case 'cornerRight':
               return elLeft <= 0;
            default:
               throw new Error('checker Critical Point __EL-TYPE');
         }
      case 'move down':
         switch (elType) {
            case 'box':
               return elTop + elHeight >= meshHeight;
            case 'line':
               val1 = isDirectionHorizontal && elTop + elHeight >= meshHeight;
               val2 =
                  isDirectionVertical && elTop + elHeight - size / 2 - size >= meshHeight;
               criticalPoint = val1 || val2;
               return criticalPoint;
            case 't':
            case 'cornerLeft':
            case 'cornerRight':
               return elTop + elHeight >= meshHeight;
            default:
               throw new Error('checker Critical Point __EL-TYPE');
         }
      case 'rotate left':
         switch (elType) {
            case 'box':
               return true;
            case 'line':
               val1 = isDirectionHorizontal && elLeft + elHeight + size / 2 >= meshWidth;
               val2 = isDirectionVertical && elLeft <= -size;
               val3 = isDirectionVertical && elLeft + elHeight >= meshWidth;
               criticalPoint = val1 || val2 || val3;
               return criticalPoint;
            case 't':
            case 'cornerLeft':
            case 'cornerRight':
               val1 = isDirectionVertical && elLeft <= 0;
               val2 = isDirectionVertical && elLeft + elHeight >= meshWidth;
               criticalPoint = val1 || val2;
               return criticalPoint;
            default:
               throw new Error('checker Critical Point __EL-TYPE');
         }
      case 'rotate right':
         switch (elType) {
            case 'box':
               return true;
            case 'line':
               val1 = isDirectionHorizontal && elLeft + elHeight >= meshWidth;
               val2 = isDirectionVertical && elLeft + elHeight >= meshWidth;
               val3 = isDirectionVertical && elLeft + size / 2 < 0;
               criticalPoint = val1 || val2 || val3;
               return criticalPoint;
            case 't':
            case 'cornerLeft':
            case 'cornerRight':
               val1 = isDirectionVertical && elLeft + elHeight >= meshWidth;
               val2 = isDirectionVertical && elLeft <= 0;
               criticalPoint = val1 || val2;
               return criticalPoint;
            default:
               throw new Error('checker Critical Point __EL-TYPE');
         }
      default:
         throw new Error('checker Critical Point __OPTION');
   }
};
