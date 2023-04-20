import { makePersistable } from 'mobx-persist-store';

const { GET_ALL_NEWS } = require('API/newsApi');
const { makeAutoObservable, runInAction } = require('mobx');

class NewsStore {
   isLoading = false;
   newslist = [];
   error = '';

   constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      makePersistable(this, {
         name: 'newsList',
         properties: ['newslist'],
         storage: window.localStorage,
      });
   }

   async getNews() {
      this.isLoading = true;
      try {
         const list = await GET_ALL_NEWS();
         console.log(list);
         runInAction(() => (this.newslist = list));
      } catch (e) {
         runInAction(() => (this.error = e.message));
      } finally {
         runInAction(() => (this.isLoading = false));
      }
   }
}

export const newsStore = new NewsStore();
