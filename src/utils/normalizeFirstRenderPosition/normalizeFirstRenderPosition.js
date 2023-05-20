export const normalizeFirstRenderPosition = (element, mesh, size) => {
   let isDirectionHorizontal = element.staticParams.width > element.staticParams.height;
   const meshCenterPoint = mesh.staticParams.width / 2;
   const elementCenterPoint = element.staticParams.width / 2;
   const result = meshCenterPoint - elementCenterPoint;

   switch (element.staticParams.type) {
      case 'box':
         element.staticParams.left = result;
         return;
      case 'line':
         element.staticParams.left = isDirectionHorizontal ? result : result - size / 2;
         return;
      case 't':
      case 'cornerLeft':
      case 'cornerRight':
         element.staticParams.left = isDirectionHorizontal ? result + size / 2 : result;
         return;
      default:
         throw new Error('normalize First RenderPosition');
   }
};
