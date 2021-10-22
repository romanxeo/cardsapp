import {cardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setLoadingStatusAC} from "./appReducer";

const buttonDisabledAC = (buttonDisabled: boolean) => {
    return {
        type: "SET-NEW-PASSWORD/BUTTON-DISABLED",
        buttonDisabled
    } as const
}

const completedRequestAC = (completed: boolean) => {
    return {
        type: "SET-NEW-PASSWORD/COMPLETED-REQUEST",
        completed
    } as const
}

export type buttonDisabledAT = ReturnType<typeof buttonDisabledAC>
export type completedRequestAT = ReturnType<typeof completedRequestAC>

export type actionSetNewPasswordType =
    buttonDisabledAT | completedRequestAT

export const initState = {
    completed: false,
    buttonDisabled: false
}

type InitStateType = typeof initState

export const setNewPasswordReducer = (state: InitStateType = initState, action: actionSetNewPasswordType): InitStateType => {
    switch (action.type) {
        case "SET-NEW-PASSWORD/BUTTON-DISABLED": {
            return {...state, buttonDisabled: action.buttonDisabled}
        }
        case "SET-NEW-PASSWORD/COMPLETED-REQUEST": {
            return {...state, completed: action.completed}
        }
        default: {
            return state
        }
    }
}


//thunk
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => {
    return (dispatch: any) => {
        dispatch(buttonDisabledAC(true))
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.setNewPassword(password, resetPasswordToken)
            .then(res => {
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
                dispatch(completedRequestAC(true))
            })
            .catch(e => {
                //console.log(err)
                const error = e.response ? e.response.data.error : "some unknown error"
                dispatch(setAppErrorAC(error))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}
