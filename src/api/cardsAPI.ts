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
                        <a href='http://localhost:3000/#/EnterNewPassword/$token$'>
                        link</a></div>`
        }
        const promise = instance.post<any>('auth/forgot', payload);
        return promise;
    },
    login(data: LoginParamsType) {
        return instance.post<UserDataType>(`/auth/login`, data)
    },
}


export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type UserDataType = {
    _id: string
    email: string
    name: string
    rememberMe?: boolean
}