// AXIOS
import axios, {  AxiosRequestConfig } from "axios"
// UTILS
import { SessionToken } from "utils/sessionToken"

const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})
http.interceptors.request.use((config) => {
  const user_token = SessionToken.getToken()
  if (user_token && config.headers){
    config.headers.Authorization = `Bearer ${user_token}`
  }
  return config
}, (err) => {
  console.log('Erro no interceptor do axios')
  return Promise.reject(err)
})

export class AxiosHandler{
  static post<Response>(request_url:string, data:any){
    return http.post<Response>(request_url, data)
  }

  static get<Response>(request_url:string, config?: AxiosRequestConfig<any>){
    return http.get<Response>(request_url, config)
  }

}