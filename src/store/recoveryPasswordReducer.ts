import {cardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setLoadingStatusAC} from "./appReducer";

const buttonDisabledAC = (buttonDisabled: boolean) => {
    return {
        type: "RECOVERY-PASSWORD/BUTTON-DISABLED",
        buttonDisabled
    } as const
}

const completedRequestAC = (completed: boolean) => {
    return {
        type: "RECOVERY-PASSWORD/COMPLETED-REQUEST",
        completed
    } as const
}

export type buttonDisabledAT = ReturnType<typeof buttonDisabledAC>
export type completedRequestAT = ReturnType<typeof completedRequestAC>

export type actionRecoveryPasswordType =
    buttonDisabledAT | completedRequestAT

export const initState = {
    completed: false,
    buttonDisabled: false
}

type InitStateType = typeof initState

export const RecoveryPasswordReducer = (state: InitStateType = initState, action: actionRecoveryPasswordType): InitStateType => {
    switch (action.type) {
        case "RECOVERY-PASSWORD/BUTTON-DISABLED": {
            return {...state, buttonDisabled: action.buttonDisabled}
        }
        case "RECOVERY-PASSWORD/COMPLETED-REQUEST": {
            return {...state, completed: action.completed}
        }
        default: {
            return state
        }
    }
}



//thunk
export const forgotPasswordTC = (email: string) => {
    return (dispatch: any) => {
        dispatch(buttonDisabledAC(true))
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.forgotPassword(email)
            .then(res => {
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
                dispatch(completedRequestAC(true))
            })
            .catch(err => {
                dispatch(setAppErrorAC('E-mail not found'))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}