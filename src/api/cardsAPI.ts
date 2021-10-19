import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const cardsAPI = {
    forgotPassword(email: string) {
        const payload = {
            email,
            from: `test-front-admin <romanxeo@gmail.com>`,
            message: `<div style="background-color: #e3c486; padding: 10px">
                        password recovery link: 
                        <a href='http://localhost:3000/#/SetNewPassword/$token$'>
                        link</a></div>`
        }
        const promise = instance.post<any>('auth/forgot', payload);
        return promise;
    },

    setNewPassword(password: string, resetPasswordToken: string) {
        const payload = {
            password,
            resetPasswordToken
        }
        const promise = instance.post<any>('auth/set-new-password', payload);
        return promise;
    }
}