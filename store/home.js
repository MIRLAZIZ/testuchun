import { defineStore } from 'pinia'
import educationVue from '~/pages/education.vue'
import api from '~/utils/axios'



export const useHomeStore = defineStore('home', {
  state: () => ({
    dataTranslate: {},
    is_open: false,
    currentImage: "",
    menus: [],
    news: null,
    optionsData: [],
    menuData: null,
    menuShow: null,
    siteInfo: null,
    educationData: null


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
    async getsiteInfo() {
      return await api.get('/siteinfo')
        .then(res => {
          this.siteInfo = res.data.data
        })
    },
    async getNewsOne(slug) {
      return await api.get(`/news/${slug}`)
    },

    async getEducation() {
      return await api.get('/educational-programs')
        .then(res => {
          this.educationData = res.data
        })
    },
    async getEducutionOne(slug) {
      return await api.get(`/educational-programs/${slug}`)
    },

    getMenuStatick(parentPage, child) {
      if (this.menus.length) {
        this.menuShow = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)
      } else {
        this.getMenu().then(() => {
          this.menuShow = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)


        })
      }
    },
    async getCertificat() {
      return await api.get('/certificates')
    }

  
  }
})




