export const normalizePositionAfterRotate = (element, getterEl, size) => {
   const { elRotate, elRotation, elType } = getterEl();

   switch (elType) {
      case 'box':
         return;
      case 'line':
         switch (Math.abs(elRotate % 360)) {
            case 90:
               element.staticParams.left -= size / 2;
               element.staticParams.top -= size / 2;
               return;
            case 180:
               element.staticParams.left += size / 2;
               element.staticParams.top += size / 2;
               return;
            case 270:
               element.staticParams.left -= size / 2;
               element.staticParams.top -= size / 2;
               return;
            case 0:
               element.staticParams.left += size / 2;
               element.staticParams.top += size / 2;
               return;
            default:
               throw new Error('LINE-ELEMENT ROTATE WRONG');
         }
      case 't':
      case 'cornerLeft':
         switch (elRotation) {
            case 'right':
               switch (Math.abs(elRotate % 360)) {
                  case 90:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 180:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 270:
                     element.staticParams.left += size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 0:
                     element.staticParams.left += size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  default:
                     throw new Error(
                        'T-ELEMENT, CORNER_LEFT-ELEMEN, CORNER_RIGHT-ELEMENT ROTATE WRONG'
                     );
               }
            case 'left':
               switch (Math.abs(elRotate % 360)) {
                  case 90:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 180:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 270:
                     element.staticParams.left += size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 0:
                     element.staticParams.left += size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  default:
                     throw new Error(
                        'T-ELEMENT, CORNER_LEFT-ELEMEN, CORNER_RIGHT-ELEMENT ROTATE WRONG'
                     );
               }
            default:
               throw new Error('elRotation wrong');
         }
      case 'cornerRight':
         switch (elRotation) {
            case 'right':
               switch (Math.abs(elRotate % 360)) {
                  case 90:
                     element.staticParams.left += size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 180:
                     element.staticParams.left += size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 270:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 0:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  default:
                     throw new Error(
                        'T-ELEMENT, CORNER_LEFT-ELEMEN, CORNER_RIGHT-ELEMENT ROTATE WRONG'
                     );
               }
            case 'left':
               switch (Math.abs(elRotate % 360)) {
                  case 90:
                     element.staticParams.left += size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  case 180:
                     element.staticParams.left += size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 270:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top -= size / 2;
                     return;
                  case 0:
                     element.staticParams.left -= size / 2;
                     element.staticParams.top += size / 2;
                     return;
                  default:
                     throw new Error(
                        'T-ELEMENT, CORNER_LEFT-ELEMEN, CORNER_RIGHT-ELEMENT ROTATE WRONG'
                     );
               }
            default:
               throw new Error('elRotation wrong');
         }
      default:
         throw new Error('normalize Position After Rotate');
   }
};
