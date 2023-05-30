import axios from "axios"


export const cadastrarUsuario = (usuario:IUserSignUp, thenCallBack:voidFunction, catchCallBack:voidFunction) => {
  axios.post('http://localhost:8000/public/registrar', usuario)
    .then(() => {
      thenCallBack()
    })
    .catch(() => {
      catchCallBack()
    })
}

export const logarUsuario = (usuario:IUserLogin, thenCallBack:voidFunction, catchCallBack:voidFunction) => {
  axios.post('http://localhost:8000/public/login', usuario)
    .then(() => {
      thenCallBack()
    })
    .catch(() => {
      catchCallBack()
    })
}