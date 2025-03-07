import { defineStore } from 'pinia'
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
    educationData: null,
    bgImg: null,
    slugData: null,
    currentImage2: null,
    menuOpen: true,
    educationFaqId: null,
    activeTab: null,
    dinamiMenuLoading: true,
    reklammaData: null,
    language:null,
    kampus: null,
    isFixed: false,
    leaderShipsdata: null,
    windowInnerHeight: null,



  }),
  actions: {
    increment() {
      this.count++

    },

    async fetchData() {
      return await api.get('/posts')
    },


    menuDrop(data) {

      if (data.title === 'SDG') {
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

      console.log(child, parentPage);
      
      if (this.menus.length) {
        this.menuData = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)

        console.log(this.menuData);
        

        this.getMenuShow(this.menuData?.id).then(res => {
          this.menuShow = res.data
          this.dinamiMenuLoading = false


        }).catch(() => {
          this.dinamiMenuLoading = false
        })

      } else {

        this.getMenu().then(() => {

          this.menuData = this.menus.find(menu => menu.path === parentPage).children.find(item => item.path === child)
          

          this.getMenuShow(this.menuData?.id).then(res => {
            this.menuShow = res.data
            this.dinamiMenuLoading = false

          }).catch(() => {
            this.dinamiMenuLoading = false
          })
        }).catch(() => {
          this.dinamiMenuLoading = false
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
        this.menuShow = this.menus.find(menu => menu.path === parentPage)?.children.find(item => item.path === child)
      } else {
        this.getMenu().then(() => {
          this.menuShow = this.menus.find(menu => menu.path === parentPage)?.children.find(item => item.path === child)


        })
      }
    },


    async getCertificat(page) {
      return await api.get(`/certificates?page=${page}`)
    },


    async getLeaderShips() {
      return await api.get(`/leaderships`)
    },

    async leaderships(id) {
      return await api.get(`/leaderships/${id}`)
    },



    async getDocuments() {
      return await api.get('/documents')
    },

    async getKafedra() {
      return await api.get('/kafedralar')
    },
    async getKafedraOne(id) {
      return await api.get(`/kafedralar/${id}`)
    },


    async getFacultet() {
      return await api.get('/fakultet')
    },

    async getFacultetOne(id) {
      return await api.get(`/fakultet/${id}`)
    },


    async getDepartament() {
      return await api.get('/department')
    },
    async getDepartamentOne(id) {
      return await api.get(`/department/${id}`)
    },

    async getKafedraEmploy(id) {
      return await api.get(`/kafedralar/user/${id}`)

    },
    async getFacultetaEmploy(id) {
      return await api.get(`/fakultet/user/${id}`)

    },
    async getKampus() {
      return await api.get('/kampus')
    },
    async getKampusOne(slug) {
      return await api.get(`/kampus/${slug}`)
    },

    async getFaq() {
      return await api.get('/faq')
    },

    async getCategorys() {
      return await api.get('/categories')
    },
    async getCategoryFilter(slug) {
      return await api.get(`/categories/${slug}`)
    },
    async getReklama() {
      return await api.get('/reklama')
        .then(res => {
          this.reklammaData = res.data
        })
    },
    downloadFile(url, filename) {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      // console.log(link);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    gotoRegister() {
      window.open("https://register.timeedu.uz/", "_blank")
    },
    async testingCenter() {
      return await  api.get('/test')
    },
    async testingSlug(slug)  {
      return await api.get(`/test/${slug}`)
    }





  }
})




