import {instance} from "./api"

export const authAPI = {
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