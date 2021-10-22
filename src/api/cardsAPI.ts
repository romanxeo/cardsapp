import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
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
                        link local</a>
                        <a href='https://romanxeo.github.io/#/SetNewPassword/$token$'>
                        link gh-pages</a></div>`
        }
        const promise = instance.post<any>('auth/forgot', payload);
        return promise;
    },

    login(data: LoginParamsType) {
        return instance.post<UserDataType>(`/auth/login`, data)
    },

    setNewPassword(password: string, resetPasswordToken: string) {
        const payload = {
            password,
            resetPasswordToken
        }
        const promise = instance.post<any>('auth/set-new-password', payload);
        return promise;
    },

    register(email: string, password: string) {
        const payload = {
            email,
            password
        }
        const promise = instance.post<any>('auth/register', payload);
        return promise;
    },
    me() {
        return instance.post <UserDataType>(`auth/me`)
    },
    logOut() {
        return instance.delete<any>('auth/me')
    }
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
    avatar?: string
}