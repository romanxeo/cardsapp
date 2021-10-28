import {CardType, trainingCardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


type InitStateType = typeof initState;
type GetCardsActionType = ReturnType<typeof getCardsAC>
export type ActionsCardsType = setLoadingStatusAT | setAppErrorAT | GetCardsActionType
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsCardsType>

export const initState: Array<CardType> = [];
const getCards = "cards/GET-CARDS"


export const cardsReducer = (state: InitStateType = initState, action: ActionsCardsType): InitStateType => {
    switch (action.type) {
        case getCards: {
            return action.cards
        }
        default: {
            return state
        }
    }
}

export const getCardsAC = (cards: Array<CardType>) => ({
    type: getCards, cards
} as const)

export const fetchCardsTC = (cardsPack_id: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>) => {
        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.getCards(cardsPack_id)
            .then((res) => {
                dispatch(getCardsAC(res.data.cards))
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
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>) => {
        dispatch(setLoadingStatusAC('loading'));
        trainingCardsAPI.addCard(cardsPack_id, question, answer, grade)
            .then(() => {
                dispatch(fetchCardsTC(cardsPack_id));
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
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsCardsType>) => {
        dispatch(setLoadingStatusAC('loading'));
        debugger
        trainingCardsAPI.deleteCard(_id)
            .then(() => {
                dispatch(fetchCardsTC(cardsPack_id));
                dispatch(setLoadingStatusAC('idle'));
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}
