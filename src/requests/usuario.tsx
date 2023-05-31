import axios from "axios"


export const cadastrarUsuario = (usuario:IUserSignUp, thenCallBack:(access_token:string) => void, catchCallBack:(status:number, message:string) => void) => {
  axios.post('http://localhost:8000/public/registrar', usuario)
    .then((response) => {
      const data = response.data
      thenCallBack(data.access_token)
    })
    .catch((response) => {
      const error = response.response.data
      catchCallBack(error.status, error.message)
    })
}

export const logarUsuario = (usuario:IUserLogin, thenCallBack:(access_token:string) => void, catchCallBack:(status:number, message:string) => void) => {
  axios.post('http://localhost:8000/public/login', usuario)
    .then((response) => {
      const data = response.data
      thenCallBack(data.access_token)
    })
    .catch((response) => {
      const error = response.response.data
      catchCallBack(error.status, error.message)
    })
}