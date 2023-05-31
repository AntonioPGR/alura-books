

export class SessionToken{
  static setToken(token:string | null){
    if(token == null){
      sessionStorage.removeItem('session_token');
      return
    }
    sessionStorage.setItem('session_token', token)
  }

  static getToken(){
    return sessionStorage.getItem('session_token')
  }
}