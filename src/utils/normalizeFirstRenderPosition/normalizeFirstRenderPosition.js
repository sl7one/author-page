export const normalizeFirstRenderPosition = (element, mesh, size) => {
   const meshPoint = mesh.staticParams.width / 2;
   switch (element.staticParams.type) {
      case 'box':
      case 'line':
         element.staticParams.left = meshPoint - element.staticParams.width / 2;
         return;
      case 't':
      case 'cornerLeft':
      case 'cornerRight':
         element.staticParams.left =
            meshPoint - element.staticParams.width / 2 + size / 2;
         return;
      default:
         throw new Error('NORMALIZE POSITION ERROR');
   }
};
