import axios from 'axios'

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: process.env.API,
    timeout: 30000
  })
}
