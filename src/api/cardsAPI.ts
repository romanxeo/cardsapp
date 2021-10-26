import axios from "axios";

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const cardsAPI = {
    forgotPassword(email: string) {
        const payload = {
            email,
            from: `test-front-admin <romanxeo@gmail.com>`,
            message: `<div style="background-color: #a3c486; padding: 10px">
                        password recovery link: 
                        <a href='http://localhost:3000/#/SetNewPassword/$token$'>
                        link local</a>
                        <a href='https://romanxeo.github.io/cardsapp/#/SetNewPassword/$token$'>
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

export const packsAPI = {
    getPacks() {
        return instance.get<PacksResponseType>('cards/pack')
    },
    // addPack() {
    //     return instance.post
    // }
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
    publicCardPacksCount: number
}
export type PackType = {
    _id: string
    name: string
    user_id: string
    user_name: string
    private: boolean
    created: string
    updated: string
    cardsCount: number
}
export type PacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount:number
    page: number// выбранная страница
    pageCount: number // количество элементов на странице


}