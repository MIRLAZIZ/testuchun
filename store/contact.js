import { defineStore } from 'pinia'
import educationVue from '~/pages/education.vue'
import api from '~/utils/axios'


export const useContactStore = defineStore('contact', {
    state:()=>({
        vacansiec:null,
        contact:null,
        vacansiecId:null,
        student:null,
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
                console.log('this.student', this.student)
            })
          }
    }


})