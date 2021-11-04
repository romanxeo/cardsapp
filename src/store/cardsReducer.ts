import {CardType, trainingCardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


export const getCardsAC = (cards: Array<CardType>) => ({
    type: "cards/GET-CARDS", cards
} as const)

export const getCardsTotalCountAC = (cardsTotalCount: number) => ({
    type: "cards/SET-CARDS-TOTAL-COUNT", cardsTotalCount
} as const)


type getCardsAT = ReturnType<typeof getCardsAC>
type getCardsTotalCountAT = ReturnType<typeof getCardsTotalCountAC>

export type ActionsCardsType = setLoadingStatusAT
    | setAppErrorAT
    | getCardsAT
    | getCardsTotalCountAT


export type InitialStateType = {
    cardsArray: Array<CardType>
    cardsTotalCount: number
}

const initialState: InitialStateType = {
    cardsArray: [],
    cardsTotalCount: 0
}


export const cardsReducer = (state: InitialStateType = initialState, action: ActionsCardsType): InitialStateType => {
    switch (action.type) {
        case "cards/GET-CARDS": {
            return {...state, cardsArray: action.cards}
        }
        case "cards/SET-CARDS-TOTAL-COUNT": {
            return {
                ...state,
                cardsTotalCount: action.cardsTotalCount
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsCardsType>

export const fetchCardsTC = (cardsPack_id: string, cardsCount: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>) => {
        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.getCards(cardsPack_id, cardsCount)
            .then((res) => {
                dispatch(getCardsAC(res.data.cards))
                dispatch(getCardsTotalCountAC(res.data.cardsTotalCount))
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
