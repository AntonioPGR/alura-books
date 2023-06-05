import { LoginForm } from "components/loginForm";
import { SignUpForm } from "components/singUpForm";
import { useRecoilValue } from "recoil";
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen";


export const renderOverflow = () => {
  return () => {
    const whatOverflow = useRecoilValue(StatewhatOverflowIsOpen);

    switch (whatOverflow) {
      case "login":
        return <LoginForm />;
      case "signUp":
        return <SignUpForm />;
      default:
        return "";
    }
  };
};
