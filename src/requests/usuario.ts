import { AxiosHandler } from "./axiosHandler"


const request_url = 'public/'
export class UserRequester{

  static loginUsuario<Response>(user:IUserLogin){
    return AxiosHandler.post<Response>(request_url + 'login/', user)
  }

  static registerUsuario<Response>(user:IUserSignUp){
    return AxiosHandler.post<Response>(request_url + 'registrar/', user)
  }
}