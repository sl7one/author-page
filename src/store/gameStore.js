import { checkerCriticalPoint } from 'utils/checkerCriticalPoint/checkerCriticalPoint';
import { fillArea } from 'utils/fillArea/fillArea';
import { getDynamicParams } from 'utils/getDynamicParams/getDynamicParams';
import { normalizeFirstRenderPosition } from 'utils/normalizeFirstRenderPosition/normalizeFirstRenderPosition';
import { normalizePositionAfterRotate } from 'utils/normalizePositionAfterRotate/normalizePositionAfterRotate';
import { normalizeWidthHeightAfterRotate } from 'utils/normalizeWidthHeightAfterRotate/normalizeWidthHeightAfterRotate';

const { makeAutoObservable } = require('mobx');

class GameStore {
   count = 144;
   element = { ref: null, staticParams: {} };
   mesh = { ref: null, staticParams: {}, filled: [], width: 12 * 50 };
   size = 50;
   isGameStarted = false;
   speedMoveDown = 300;

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true, deep: true });
   }

   moveLeft() {
      const criticalPoint = checkerCriticalPoint(
         this.getEl,
         this.getMesh,
         this.size,
         'move left'
      );
      if (criticalPoint) return;

      this.element.staticParams.left -= this.size;
   }

   moveRight() {
      const criticalPoint = checkerCriticalPoint(
         this.getEl,
         this.getMesh,
         this.size,
         'move right'
      );
      if (criticalPoint) return;

      this.element.staticParams.left += this.size;
   }

   moveDown() {
      const criticalPoint = checkerCriticalPoint(
         this.getEl,
         this.getMesh,
         this.size,
         'move down'
      );

      if (criticalPoint) {
         this.stopMoveDown();
         this.setFilledMeshAria();
         this.startGame();
         return;
      }

      this.element.staticParams.top += this.size;
   }

   rotateElementLeft() {
      const criticalPoint = checkerCriticalPoint(
         this.getEl,
         this.getMesh,
         this.size,
         'rotate left'
      );
      if (criticalPoint) return;

      this.element.staticParams.rotate -= 90;
      this.element.staticParams.rotation = 'left';

      normalizeWidthHeightAfterRotate(this.element, this.getEl);
      normalizePositionAfterRotate(this.element, this.getEl, this.size);
   }

   rotateElementRight() {
      const criticalPoint = checkerCriticalPoint(
         this.getEl,
         this.getMesh,
         this.size,
         'rotate right'
      );
      if (criticalPoint) return;

      this.element.staticParams.rotate += 90;
      this.element.staticParams.rotation = 'right';

      normalizeWidthHeightAfterRotate(this.element, this.getEl);
      normalizePositionAfterRotate(this.element, this.getEl, this.size);
   }

   startGame() {
      normalizeFirstRenderPosition(this.element, this.mesh, this.size);
      this.element.timer = setInterval(this.moveDown, this.speedMoveDown);
      this.isGameStarted = true;
   }

   pauseGame() {
      this.isGameStarted = false;
   }

   pauseMoveDown() {
      clearInterval(this.element.timer);
   }

   stopMoveDown() {
      this.element.staticParams.opacity = 0;
      clearInterval(this.element.timer);
   }

   getEl() {
      const {
         bottom: elBottom,
         top: elTop,
         x: elX,
         y: elY,
         right: elRight,
         left: elLeft,
         width: elWidth,
         height: elHeight,
         type: elType,
         rotate: elRotate,
         rotation: elRotation,
      } = this.element.staticParams;
      return {
         elBottom,
         elTop,
         elX,
         elY,
         elRight,
         elLeft,
         elWidth,
         elHeight,
         elType,
         elRotate,
         elRotation,
      };
   }

   getMesh() {
      const {
         bottom: meshBottom,
         top: meshTop,
         x: meshX,
         y: meshY,
         right: meshRight,
         left: meshLeft,
         width: meshWidth,
         height: meshHeight,
      } = this.mesh.staticParams;
      return {
         meshBottom,
         meshTop,
         meshX,
         meshY,
         meshRight,
         meshLeft,
         meshWidth,
         meshHeight,
      };
   }

   setElement(element) {
      this.element.ref = element;
      this.element.staticParams = getDynamicParams(element, this.size);
      this.element.staticParams.top = 0;

      normalizeFirstRenderPosition(this.element, this.mesh, this.size);
   }

   setMesh(element) {
      this.mesh.ref = element;
      this.mesh.staticParams = getDynamicParams(element);
   }

   setFilledMeshAria() {
      const { staticParams } = this.element;
      this.mesh.filled.push(JSON.parse(JSON.stringify(staticParams)));
      this.mesh.filled.forEach((params) =>
         fillArea(params, this.size, this.count, this.mesh)
      );
      console.log('');
   }
}

export const gameStore = new GameStore();
