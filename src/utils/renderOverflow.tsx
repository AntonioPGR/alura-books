import { LoginForm } from "components/loginForm";
import { SignUpForm } from "components/singUpForm";
import { useRecoilState } from "recoil";
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen";

export const renderOverflow = () => {
    return () => {    
        const [whatOverflow, setWhatOverflow] = useRecoilState(StatewhatOverflowIsOpen);
        const onClose = () => setWhatOverflow('');
        
        switch(whatOverflow){
            case 'login':
                return <LoginForm onClose={onClose} />
            case 'signUp':
                return <SignUpForm onClose={onClose} />
            default:
                return ''
        }
    }
}