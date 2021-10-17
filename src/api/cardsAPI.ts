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
            message: `<div style="background-color: lime; padding: 15px">
                        password recovery link: 
                        <a href='http://localhost:3000/#/set-new-password/$token$'>
                        link</a></div>`
        }
        const promise = instance.post<any>('auth/forgot', payload);
        return promise;
    }
}