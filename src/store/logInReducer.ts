import {setLoadingStatusAC, setAppErrorAC, setLoadingStatusAT, setAppErrorAT} from './appReducer'
import {LoginParamsType, cardsAPI} from "../api/cardsAPI";
import {setUserDataAC, SetUserDataACType} from "./profileReducer";
import {Dispatch} from 'redux';


const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const LogInReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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


// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: any) => {
    dispatch(setLoadingStatusAC('loading'))
    cardsAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setLoadingStatusAC('idle'))
            dispatch(setUserDataAC(res.data.name, res.data.avatar ? res.data.avatar : ""))
        })
        .catch(e => {
            //dispatch(setAppErrorAC('dfdgfd'))
            const error = e.response ? e.response.data.error : "some unknown error"
            dispatch(setLoadingStatusAC('idle'))
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    cardsAPI.logOut()
        .then((res) => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setLoadingStatusAC('idle'))
            dispatch(setUserDataAC("",""))
        })
        .catch(e => {
            dispatch(setLoadingStatusAC('idle'))
            //dispatch(setAppErrorAC("some error"))
            const error = e.response ? e.response.data.error : "some unknown error"
            dispatch(setAppErrorAC(error))
        })


}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | setLoadingStatusAT | SetUserDataACType | setAppErrorAT
