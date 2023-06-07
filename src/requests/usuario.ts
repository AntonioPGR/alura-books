import { AxiosHandler } from "./axiosHandler"


const request_url = 'public/'
export class UserRequester{

  static async loginUsuario(user:IUserLogin){
    return await AxiosHandler.post<IUserResponse>(request_url + 'login/', user)
  }

  static async registerUsuario(user:IUserSignUp){
    return await AxiosHandler.post(request_url + 'registrar/', user)
  }
}