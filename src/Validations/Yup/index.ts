import { YubEmailSignIn, YubEmailSignUp, YubEmailSignUpForm } from "./Email";

export const useYup = () => {
    return {
        YubEmailSignUp: YubEmailSignUp(),
        YubEmailSignUpForm: YubEmailSignUpForm(),
        YubEmailSignIn: YubEmailSignIn(),
    };
};
