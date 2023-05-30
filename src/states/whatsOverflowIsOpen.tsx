import { atom } from "recoil";


type OverflowComponents = 'login' | 'signUp' | ''
export const StatewhatOverflowIsOpen = atom<OverflowComponents>({
    key: "whatOverflowIsOpen",
    default: ""
})