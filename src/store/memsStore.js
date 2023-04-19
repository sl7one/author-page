import { makePersistable } from 'mobx-persist-store';
const { GET_ALL_MEMS } = require('API/memsApi');
const { makeAutoObservable, runInAction } = require('mobx');

class MemsStore {
   isLoading = false;
   memslist = [];
   error = '';

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      makePersistable(this, {
         name: 'memsList',
         properties: ['memslist'],
         storage: window.localStorage,
      });
   }

   async getMems() {
      this.isLoading = true;
      try {
         const list = await GET_ALL_MEMS();
         runInAction(() => (this.memslist = list));
      } catch (e) {
         runInAction(() => (this.error = e.message));
      } finally {
         runInAction(() => (this.isLoading = false));
      }
   }
}

export const memsStore = new MemsStore();
