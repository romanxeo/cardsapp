import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    // baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const cardsAPI = {
    login(data: LoginParamsType) {
        return instance.post<UserDataType>(`/auth/login`, data)
    },
    me() {
        return instance.post<UserDataType>(`auth/me`)
    },
    register(email: string, password: string) {
        const payload = {
            email,
            password
        }
        const promise = instance.post<any>('auth/register', payload);
        return promise;
    },
    updateProfileData(name: string, avatar: string) {
        //change profile data
        const payload = {
            name,
            avatar
        }
        return instance.put<UserDataType>(`auth/me`, payload)
    },
    logOut() {
        return instance.delete<any>('auth/me')
    },
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
    setNewPassword(password: string, resetPasswordToken: string) {
        const payload = {
            password,
            resetPasswordToken
        }
        const promise = instance.post<any>('auth/set-new-password', payload);
        return promise;
    },
}

export const packsAPI = {
    getPacks(isMyPacks: boolean,
             _id: string,
             pageCount: number,
             page: number,
             sortPacks: string | null,
             _name: string,
             allMin: number,
             allMax: number) {
        let user_id = ''
        if (isMyPacks) {
            user_id = `&user_id=${_id}`
        }
        let packName = ''
        if (_name) {
            packName = `&packName=${_name}`
        }
        return instance.get<PacksResponseType>(`cards/pack?pageCount=${pageCount}&page=${page}&sortPacks=${sortPacks}&min=${allMin}&max=${allMax}`+user_id+packName)
    },
    addPack(name: string, isPrivate: boolean) {
        const payload = {
            cardsPack: {
                name, ['private']: isPrivate
            }
        }
        return instance.post<PackType>('cards/pack', payload)
    },
    deletePack(_id: string) {
        return instance.delete<PackType>(`cards/pack?id=${_id}`)
    },
    updatePack(_id: string, name: string) {
        const payload = {
            cardsPack: {name, _id}
        }
        return instance.put<PackType>(`cards/pack`, payload)
    }
}

export const learnAPI = {
    gradeCard(grade: number, card_id: string) {
        return instance.put<GradeDataType>(`cards/grade`, {grade, card_id})
    }
}

export const trainingCardsAPI = {
    getCards(cardsPack_id: string, pageCount: number) {
        return instance.get<CardsResponseType>(`cards/card?cardsPack_id=${cardsPack_id}&pageCount=${pageCount}`)
    },


    addCard(cardsPack_id: string, question: string, answer: string, grade: number) {
        const payload = {
            card: {cardsPack_id, question, answer, grade},
        }
        return instance.post<CardType>(`cards/card`, payload)
    },
    deleteCard(_id: string) {
        return instance.delete<CardType>(`cards/card?id=${_id}`)
    },
    updateCard(_id: string, question: string, answer: string, grade: number) {
        const payload = {
            card: {_id, question, answer, grade},
        }
        return instance.put<CardType>(`cards/card`, payload)
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
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export type PackType = {
    _id: string
    user_name: string
    user_id: string
    updated: string
    shots: number
    rating: number
    private: boolean
    name: string
    grade: number
    created: string
    cardsCount: number
}

export type PacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number// выбранная страница
    pageCount: number // количество элементов на странице
}

export type CardType = {
    answer: string
    answerImg: string
    answerVideo: string
    cardsPack_id: string
    comment: string
    created: string
    grade: number
    more_id: string
    question: string
    questionImg: string
    questionVideo: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    _id: string
}

export type CardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    packUserId: string
    page: number
    pageCount: number
}

export type GradeDataType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
}