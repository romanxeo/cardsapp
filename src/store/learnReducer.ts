import {CardType, learnAPI, trainingCardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


export const getInfoCardAC = () => ({
    type: "learn/GET-INFO-CARD"
} as const);


type getInfoCardAT = ReturnType<typeof getInfoCardAC>


export type ActionsLearnType = setLoadingStatusAT
    | setAppErrorAT
    | getInfoCardAT


export type InitialStateType = {

}

const initialState: InitialStateType = {

}

export const learnReducer = (state: InitialStateType = initialState, action: ActionsLearnType): InitialStateType => {
    switch (action.type) {
        case "learn/GET-INFO-CARD": {
            return {...state}
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsLearnType>

export const learnCardsTC = (grade: number, card_id: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsLearnType>) => {
        dispatch(setLoadingStatusAC('loading'));
        learnAPI.gradeCard(grade, card_id)
            .then((res) => {
                //dispatch(getInfoCardAC())
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}