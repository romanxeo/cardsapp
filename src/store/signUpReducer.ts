import {cardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setLoadingStatusAC} from "./appReducer";

const buttonDisabledAC = (buttonDisabled: boolean) => {
    return {
        type: "SIGN-UP/BUTTON-DISABLED",
        buttonDisabled
    } as const
}

const completedRequestAC = (completed: boolean) => {
    return {
        type: "SIGN-UP/COMPLETED-REQUEST",
        completed
    } as const
}

export type buttonDisabledAT = ReturnType<typeof buttonDisabledAC>
export type completedRequestAT = ReturnType<typeof completedRequestAC>

export type actionSignUpType =
    buttonDisabledAT | completedRequestAT

export const initState = {
    completed: false,
    buttonDisabled: false
}

type InitStateType = typeof initState

export const SignUpReducer = (state: InitStateType = initState, action: actionSignUpType): InitStateType => {
    switch (action.type) {
        case "SIGN-UP/BUTTON-DISABLED": {
            return {...state, buttonDisabled: action.buttonDisabled}
        }
        case "SIGN-UP/COMPLETED-REQUEST": {
            return {...state, completed: action.completed}
        }
        default: {
            return state
        }
    }
}

//thunk
export const registerTC = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(buttonDisabledAC(true))
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.register(email, password)
            .then(res => {
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
                dispatch(completedRequestAC(true))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : "some unknown error"
                dispatch(setAppErrorAC(error))
                //dispatch(setAppErrorAC('unknown error'))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}