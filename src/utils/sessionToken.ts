

export class SessionToken{
  static setToken(token:string){
    sessionStorage.setItem('session_token', token)
  }

  static excludeToken(){
    sessionStorage.removeItem('session_token');
  }

  static getToken(){
    return sessionStorage.getItem('session_token')
  }
}