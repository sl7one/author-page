import { getStaticParams } from 'utils/getStaticParams/getStaticParams';

const { makeAutoObservable } = require('mobx');

class GameStore {
   count = 144;
   element = { ref: null, staticParams: {} };
   mesh = { ref: null, staticParams: {}, width: 12 * 50 };
   size = 50;
   isTransitionRun = false;
   isGameStarted = false;
   speedMoveDown = 1500;
   array = [];

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
   }

   moveLeft() {
      if (this.isTransitionRun) return;
      const elLeft = this.element.staticParams.left;
      if (elLeft <= 0) return;

      this.element.staticParams.left -= this.size;
   }

   moveRight() {
      if (this.isTransitionRun) return;
      const elLeft = this.element.staticParams.left;
      if (elLeft >= 600 - this.element.staticParams.width) return;

      this.element.staticParams.left += this.size;
   }

   moveDown() {
      const elTop = this.element.staticParams.top;
      const { height: elHeight } = getStaticParams(this.element.ref);
      const meshHeight = this.mesh.staticParams.height;

      if (elTop >= meshHeight - elHeight) return;

      this.element.staticParams.top += this.size;
   }

   rotateElementLeft() {
      console.log('object');
      this.element.staticParams.rotate -= 90;
      const { width } = getStaticParams(this.element.ref);

      if (width === 100) {
         this.element.staticParams.left -= 25;
         this.element.staticParams.top -= 25;
      } else {
         this.element.staticParams.left += 25;
         this.element.staticParams.top += 25;
      }
   }

   rotateElementRight() {
      this.element.staticParams.rotate += 90;

      const { width } = getStaticParams(this.element.ref);

      if (width === 100) {
         this.element.staticParams.left -= 25;
         this.element.staticParams.top -= 25;
      } else {
         this.element.staticParams.left += 25;
         this.element.staticParams.top += 25;
      }
   }

   setElement(element) {
      this.element.ref = element;
      this.element.staticParams = getStaticParams(element);
      this.element.staticParams.left = this.mesh.staticParams.width / 2 - this.size;
      this.element.staticParams.top = 0;
      this.element.staticParams.rotate = 0;
   }

   setMesh(element) {
      this.mesh.ref = element;
      this.mesh.staticParams = getStaticParams(element);
      console.log(this.mesh.staticParams.height);
   }

   setIsTransitionRun(bool) {
      this.isTransitionRun = bool;
   }

   startGame() {
      this.element.timer = setInterval(this.moveDown, this.speedMoveDown);
      this.isGameStarted = true;
   }

   stopGame() {
      clearInterval(this.element.timer);
      this.isGameStarted = false;
   }

   nextElement() {
      this.array.push(15);
   }
}

export const gameStore = new GameStore();
