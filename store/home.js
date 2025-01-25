import { defineStore } from 'pinia'
import api from '~/utils/axios'



export const useHomeStore = defineStore('home', {
  state: () => ({
    dataTranslate: {},
    is_open: false,
    currentImage: "",
    menus: [],
    news: [],
    // menus: [
    //   {
    //     id: 1,
    //     name: 'Institut',
    //     link: '/institute',
    //     items: [
    //       { id: 1, name: 'Biz haqimizda', routerlink: '/institute' },
    //       { id: 2, name: 'Rahbariyat', routerlink: '/institute/management' },
    //       { id: 2, name: 'Tashkiliy tuzilma', routerlink: '/institute/structures' },
    //       { id: 3, name: 'Me’moriy hujjatlar', routerlink: '/institute/documents' },
    //       { id: 4, name: 'Litsenziya va sertifikatlar', routerlink: '/institute/licenses' },
    //       { id: 5, name: 'Bo’limlar', routerlink: '/institute/departments' },
    //       { id: 6, name: 'Kafedralar', routerlink: '/institute/faculties' },
    //       { id: 7, name: 'Противодейиствии коррупции', routerlink: '/institute/corruption' },
    //       { id: 8, name: 'Молодежная политика', routerlink: '/institute/young' },
    //       { id: 9, name: 'Гендерное равенство', routerlink: '/institute/gender' }

    //     ],
    //   },
    //   {
    //     id: 2,
    //     name: 'Ta’lim dasturlari',
    //     link: '/education',
    //     items: [
    //       { id: 1, name: 'Bakalavr', routerlink: '/education' },
    //       { id: 2, name: 'Magistir', routerlink: '/education/magistratura' },


    //     ],

    //   },
    //   {
    //     id: 3,
    //     name: 'Ilm fan',
    //     link: '/science',
    //     items: [
    //       { id: 1, name: 'Ilmiy jurnal', routerlink: '/science' },
    //       { id: 2, name: 'Sanoat 4.0 markazi', routerlink: '/science/industry' },
    //       { id: 3, name: 'Litsenziya va sertifikatlar', routerlink: '/science/certifications' }




    //     ],
    //   }, 
    //   {
    //     id: 4,
    //     name: 'Abituriyentlar uchun',
    //     link: '/prospective-students',
    //     items: [
    //       { id: 1, name: 'Qabul qilish jarayoni', routerlink: '/prospective-students/admission' },
    //       { id: 2, name: 'Talabalarga xizmat ko\'rsatish markazi', routerlink: '/prospective-students/service' },
    //       { id: 3, name: 'Shartnomalar va grantlar', routerlink: '/prospective-students/grants' },


    //     ],
    //   },
    //   {
    //     id: 5,
    //     name: 'Yangiliklar',
    //     link: '/news',
    //     items: [
    //       { id: 1, name: 'Yangiliklar', routerlink: '/news' },



    //     ],
    //   },
    //   {
    //     id: 6,
    //     name: 'Talabalar hayoti',
    //     link: '/students',
    //     items: [
    //       { id: 1, name: 'Kutubxona', routerlink: '/students/library' },
    //       { id: 2, name: 'Talabalar bilan tanishuv ', routerlink: '/students/meet_student' },
    //       { id: 3, name: 'Ijtimoiy hayot', routerlink: '/students/social' },
    //       // { id: 4, name: 'Tibbiyot punkiti', routerlink: 'Tibbiyot punkiti' },
    //       // { id: 5, name: 'Ijtimoiy Himoya markazi', routerlink: 'Ijtimoiy Himoya markazi' },
    //       // { id: 6, name: 'Sport majmuasi', routerlink: 'Tibbiyot punkiti' },
    //       // { id: 7, name: 'Oshxona', routerlink: 'Tibbiyot punkiti' },
    //       // { id: 8, name: 'Karyera markazi', routerlink: 'Tibbiyot punkiti' },
    //       // { id: 9, name: 'Ijtimoiy kulub', routerlink: 'Tibbiyot punkiti' },


    //     ],
    //   },
    //   {
    //     id: 3,
    //     name: 'SDG',
    //     // link: '/sdg',
    //     link: '/library',
    //     items: [
    //     ],
    //   },
    // ],
    optionsData: [],
    menuData: null,
    menuShow: null,
    siteInfo:null


  }),
  actions: {
    increment() {
      this.count++

    },

    async fetchData() {
      return await api.get('/posts')
    },


    menuDrop(data) {

      if (this.optionsData[0] === data || data.title === 'SDG') {
        this.optionsData = []
        this.is_open = false
        return
      }
      this.optionsData = []
      this.optionsData.push(data)
      this.is_open = true
    },

    async getTranslate() {
      return await api.get('/translations')
        .then(res => {
          this.dataTranslate = res.data
        })
    },
    async getNews() {
      return await api.get('/news')
        .then(res => {
          this.news = res.data

        })

    },

 
    async getYoutuveVideo() {
      return await api.get('/video_news')
    },

    async getStudents() {
      return await api.get('/students')
    },
    async getStudentShow(id) {
      return await api(`/students/${id}`)
    },

    async getBanner() {
      return await api.get('/banners')
    },

    async getMenu() {
      return await api.get('/menu')
        .then(res => {
          this.menus = res.data


        })
    },
    async getMenuShow(id) {
      return await api.get(`/menu/${id}`)
    },
    async getPartners() {
      return await api.get('/partners')
    },

    menuFind(parentPage, child) {
      if (this.menus.length) {
        this.menuData = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)

        this.getMenuShow(this.menuData.id).then(res => {
          this.menuShow = res.data

        })



      } else {

        this.getMenu().then(() => {

          this.menuData = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)

          this.getMenuShow(this.menuData.id).then(res => {
            this.menuShow = res.data

          })
        })
      }
    },
    async getuseful_links() {
      return await api.get('/partner-link')
    },
    async getsiteInfo () {
      return await api.get('/siteinfo')
        .then(res=> {
          this.siteInfo = res.data.data
        })
    }

    

  },

  




})




