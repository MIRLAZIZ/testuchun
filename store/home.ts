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
        link: '/institute',
        items: [
          { id: 1, name: 'Biz haqimizda', routerlink: '/institute' },
          { id: 2, name: 'Rahbariyat', routerlink: '/institute/management' },
          { id: 2, name: 'Tashkiliy tuzilma', routerlink: '/institute/structures' },
          { id: 3, name: 'Me’moriy hujjatlar', routerlink: '/institute/documents' },
          { id: 4, name: 'Litsenziya va sertifikatlar', routerlink: '/institute/licenses' },
          { id: 5, name: 'Bo’limlar', routerlink: '/institute/departments' },
          { id: 6, name: 'Kafedralar', routerlink: '/institute/faculties' },
          { id: 7, name: 'Противодейиствии коррупции', routerlink: '/institute/corruption' },
          { id: 8, name: 'Молодежная политика', routerlink: '/institute/young' },
          { id: 9, name: 'Гендерное равенство', routerlink: '/institute/gender' }
          
        ],
      },
      {
        id: 2,
        name: 'Ta’lim dasturlari',
        link: '/education',
        items:[
          {id:1, name: 'Bakalavr', routerlink: '/education'},
          {id:2, name: 'Magistir', routerlink: '/education/magistratura'},

          
        ],
       
      },
      {
        id: 3,
        name: 'Ilm fan',
        link: '/science',
        items: [
          { id: 1, name: 'Item 1', routerlink: '/science' },
          { id: 2, name: 'Item 2', routerlink: '/science' },
         
         

        ],
      },
      {
        id: 3,
        name: 'Abituriyentlar uchun ',
       link: '/student',
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
        link: '/news',
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
        link: '/studentlife',
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
        link: '/sdg',
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




