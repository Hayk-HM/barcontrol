import axios from 'axios'

const instance = axios.create({
  baseURL: "https://barcontrol-backend.nextstack.org/api/web/home"
})

export const barApi = {
  slider() { return instance.get('/slider') },
  faq() { return instance.get('/faq') }
}