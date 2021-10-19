import { Dispatch } from 'redux'
import { SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType } from '../../app/app-reducer'
import {authAPI, LoginParamsType} from "../api/auth-api";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const setLoginErrorAC = (state, error: string) {

    //state.error = action.payload.error
}

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
        })
        .catch((error) => {
            dispatch(setLoginErrorAC(error: error.response.data.error))
        })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
