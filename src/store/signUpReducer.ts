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

export const SignUpReducer = (state: InitStateType = initState, action: actionSignUpType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}