import { defineStore } from 'pinia'
// import  api from 'utils/axios'
import api from '~/utils/axios'



export const useHomeStore = defineStore('home', {
  state: () => ({
    count: 0,
    is_open: false,
    menus: [
      {
        id: 1,
        name: 'Institut',
        isOpen: false,
        items: [
          { id: 1, name: 'Biz haqimizda', routerlink: 'item1' },
          { id: 2, name: 'Rahbariyat', routerlink: 'item2' },
          { id: 3, name: 'Me’moriy hujjatlar', routerlink: 'item3' },
          { id: 4, name: 'Litsenziya va sertifikatlar', routerlink: 'item4' },
          { id: 5, name: 'Bo’limlar', routerlink: 'item1' },
          { id: 6, name: 'Kafedralar', routerlink: 'item2' },
          { id: 7, name: 'Противодейиствии коррупции', routerlink: 'item3' },
          { id: 8, name: 'Молодежная политика', routerlink: 'item1' },
          { id: 9, name: 'Гендерное равенство', routerlink: 'item2' }
          
        ],
      },
      {
        id: 2,
        name: 'Ta’lim dasturlari',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
          { id: 5, name: 'Item 5', routerlink: 'item1' },
          { id: 6, name: 'Item 6', routerlink: 'item2' },
          { id: 7, name: 'Item 7', routerlink: 'item3' },
          { id: 8, name: 'Item 8', routerlink: 'item1' },
          { id: 9, name: 'Item 9', routerlink: 'item2' },
          { id: 10, name: 'Item 10', routerlink: 'item3' },
          { id: 11, name: 'Item 11', routerlink: 'item1' },
       

        ],
      },
      {
        id: 3,
        name: 'Ilm fan',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
         

        ],
      },
      {
        id: 3,
        name: 'Abituriyentlar uchun ',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
         

        ],
      },
      {
        id: 3,
        name: 'Yangiliklar',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
         

        ],
      },
      {
        id: 3,
        name: 'Talabalar hayoti',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
         

        ],
      },
      {
        id: 3,
        name: 'SDG',
        isOpen: false,
        items: [
          { id: 1, name: 'Item 1', routerlink: 'item1' },
          { id: 2, name: 'Item 2', routerlink: 'item2' },
          { id: 3, name: 'Item 3', routerlink: 'item3' },
          { id: 4, name: 'Item 4', routerlink: 'item4' },
         

        ],
      },
    ],
    optionsData: [] as Object[]

  }),
  actions: {
    increment() {
      this.count++

    },

    async fetchData() {
      return await api.get('/posts')
    },

    menuDrop(data: Object): void {

    
      if(this.optionsData[0] === data){
        this.optionsData = []
        this.is_open = false
        return
      }
      this.optionsData = []
      this.optionsData.push(data)
      this.is_open = true
      
    }



  },
})
