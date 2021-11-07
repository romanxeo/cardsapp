import {CardsResponseType, CardType, trainingCardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


export const getCardsAC = (payload: CardsResponseType) => ({
    type: "cards/GET-CARDS", payload
} as const)

export const getCardsTotalCountAC = (pageCount: number) => ({
    type: "cards/SET-CARDS-TOTAL-COUNT", pageCount
} as const)


type getCardsAT = ReturnType<typeof getCardsAC>
type getCardsTotalCountAT = ReturnType<typeof getCardsTotalCountAC>

export type ActionsCardsType = setLoadingStatusAT
    | setAppErrorAT
    | getCardsAT
    | getCardsTotalCountAT


export type InitialStateType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    packUserId: string
    page: number
    pageCount: number
}

const initialState: InitialStateType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packUserId: '',
    page: 0,
    pageCount: 0,
}


export const cardsReducer = (state: InitialStateType = initialState, action: ActionsCardsType): InitialStateType => {
    switch (action.type) {
        case "cards/GET-CARDS": {
            return {...state, ...action.payload}
        }

        case "cards/SET-CARDS-TOTAL-COUNT": {
            return {
                ...state,
                cardsTotalCount: action.pageCount
            }
        }


        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsCardsType>

export const fetchCardsTC = (cardsPack_id: string, pageCount: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>) => {
        dispatch(setLoadingStatusAC('loading'));
        dispatch(getCardsTotalCountAC(pageCount))

        trainingCardsAPI.getCards(cardsPack_id, pageCount)
            .then((res) => {
                dispatch(getCardsAC(res.data))
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}



export const addCardTC = (cardsPack_id: string, question: string, answer: string, grade: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>, getState: () => AppRootStateType) => {
        const cardsTotalCount = getState().Cards.cardsTotalCount

        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.addCard(cardsPack_id, question, answer, grade)
            .then(() => {
                dispatch(fetchCardsTC(cardsPack_id, cardsTotalCount));
                dispatch(setLoadingStatusAC('idle'));

            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}
export const deleteCardTC = (_id:string, cardsPack_id: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>, getState: () => AppRootStateType) => {
        const cardsTotalCount = getState().Cards.cardsTotalCount

        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.deleteCard(_id)
            .then(() => {
                dispatch(fetchCardsTC(cardsPack_id, cardsTotalCount));
                dispatch(setLoadingStatusAC('idle'));
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}

export const updateCardTC = (cardsPack_id: string, _id: string, question: string, answer: string, grade: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>, getState: () => AppRootStateType) => {
        const cardsTotalCount = getState().Cards.cardsTotalCount

        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.updateCard(_id, question, answer, grade)
            .then(() => {
                dispatch(fetchCardsTC(cardsPack_id, cardsTotalCount));
                dispatch(setLoadingStatusAC('idle'));
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}
