import { defineStore } from 'pinia'
// import educationVue from '~/pages/education.vue'
import api from '~/utils/axios'


export const useContactStore = defineStore('contact', {
    state:()=>({
        vacansiec:null,
        contact:null,
        vacansiecId:null,
        student:null,
        documents:null,
        certificate:null
    }),
    actions:{
        async getVacansiec() {
            return await api.get('/vacancies')
              .then(res => {
                this.vacansiec = res.data.data
                // console.log('this.vacansiec', this.vacansiec)
              })
      
          },
          async getVacansiecId(id) {
            return await api.get(`/vacancies/${id}`)
                .then(res => {
                    this.vacansiecId = res.data
                    // console.log('this.vacansiec1121', this.vacansiecId)
                })
          },
          async getStudents(filer){
            return await api.get(`/students/filter/${filer}`)
            .then(res => {
                this.student = res.data
            })
          },
          async postContact(name, phone_number, message) {
            
               return await api.post('/contacts', {
                name: name,
                phone_number:String(phone_number),
                message: message
              })
              .then(res => {
                // console.log('this.contact', this.contact)
              })
        
          },
          async getDocument(){
            return await api.get('/journals')
            .then(res => {
              this.documents = res.data.data
              console.log('this.documents', this.documents)
            })
          },
          async getCertificate(){
            return await api.get('/certificates')
            .then(res =>{
              this.certificate = res.data.data
              console.log('this.certificate', this.certificate)
            })
          }

    }


})