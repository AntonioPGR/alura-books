import { atom } from 'recoil'
import { SessionToken } from 'utils/sessionToken'

export const StateIsLoggedIn = atom<boolean>({
    key: 'IsLoggedIn',  
    default: SessionToken.getToken()? true : false
})