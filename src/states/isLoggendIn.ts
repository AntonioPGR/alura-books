import {selector} from 'recoil'
import { SessionToken } from 'utils/sessionToken'

export const StateIsLoggedIn = selector({
    key: 'IsLoggedIn',
    get: () => {
        const key = SessionToken.getToken();
        if(key){
            return true
        }
        return false
    }
})