import { getDynamicParams } from 'utils/getDynamicParams/getDynamicParams';
import { normalizeFirstRenderPosition } from 'utils/normalizeFirstRenderPosition/normalizeFirstRenderPosition';
import { normalizePositionAfterRotate } from 'utils/normalizePositionAfterRotate/normalizePositionAfterRotate';
import { normalizeWidthHeightAfterRotate } from 'utils/normalizeWidthHeightAfterRotate/normalizeWidthHeightAfterRotate';

const { makeAutoObservable } = require('mobx');

class GameStore {
   count = 144;
   element = { ref: null, staticParams: {} };
   mesh = { ref: null, staticParams: {}, width: 12 * 50 };
   size = 50;
   isGameStarted = false;
   speedMoveDown = 1000;
   array = [];

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
   }

   moveLeft() {
      const { elLeft } = this.getEl();

      if (elLeft <= 0) return;

      this.element.staticParams.left -= this.size;
   }

   moveRight() {
      const { elLeft } = this.getEl();
      const { elWidth } = this.getEl();
      const { meshWidth } = this.getMesh();
      if (elLeft >= meshWidth - elWidth) return;

      this.element.staticParams.left += this.size;
   }

   moveDown() {
      const { elTop } = this.getEl();
      const { height: elHeight } = getDynamicParams(this.element.ref);
      const { meshHeight } = this.getMesh();

      if (elTop >= meshHeight - elHeight) return;

      this.element.staticParams.top += this.size;
   }

   rotateElementLeft() {
      const { type } = this.getEl();
      if (type === 'box') return;

      this.element.staticParams.rotate -= 90;
      normalizeWidthHeightAfterRotate(this.element, this.getEl);
      normalizePositionAfterRotate(this.element, this.getEl, this.size);
   }

   rotateElementRight() {
      const { type } = this.getEl();
      if (type === 'box') return;

      this.element.staticParams.rotate += 90;
      normalizeWidthHeightAfterRotate(this.element, this.getEl);
      normalizePositionAfterRotate(this.element, this.getEl, this.size);
   }

   setElement(element) {
      this.element.ref = element;
      this.element.staticParams = getDynamicParams(element);
      normalizeFirstRenderPosition(this.element, this.mesh, this.size);

      this.element.staticParams.top = 0;
      this.element.staticParams.rotate = 0;
   }

   setMesh(element) {
      this.mesh.ref = element;
      this.mesh.staticParams = getDynamicParams(element);
   }

   startGame() {
      this.element.timer = setInterval(this.moveDown, this.speedMoveDown);
      this.isGameStarted = true;
   }

   stopMoveDown() {
      clearInterval(this.element.timer);
      this.isGameStarted = false;
   }

   nextElement() {
      this.array.push(15);
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
}

export const gameStore = new GameStore();
