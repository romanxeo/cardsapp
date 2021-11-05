import {setLoadingStatusAC, setAppErrorAC, setLoadingStatusAT, setAppErrorAT} from './appReducer'
import {LoginParamsType, cardsAPI, UserDataType} from "../api/cardsAPI";
import {Dispatch} from 'redux';
import {setUserDataAC, setUserDataAT} from "./profileReducer";

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)

const buttonDisabledAC = (buttonDisabled: boolean) => {
    return {
        type: "LOGIN/BUTTON-DISABLED",
        buttonDisabled
    } as const
}

export type setIsLoggedInAT = ReturnType<typeof setIsLoggedInAC>
export type buttonDisabledAT = ReturnType<typeof buttonDisabledAC>

// types
type actionLogInType = setIsLoggedInAT
    | buttonDisabledAT
    | setLoadingStatusAT
    | setUserDataAT
    | setAppErrorAT

const initialState = {
    isLoggedIn: false,
    buttonDisabled: false
}

type InitialStateType = typeof initialState

export const LogInReducer = (state: InitialStateType = initialState, action: actionLogInType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case "LOGIN/BUTTON-DISABLED": {
            return {...state, buttonDisabled: action.buttonDisabled}
        }
        default:
            return state
    }
}


// thunks
/*export const loginTwTC = (data: LoginParamsType) => (dispatch: any) => {
    dispatch(setLoadingStatusAC('loading'))
    cardsAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setLoadingStatusAC('idle'))
            dispatch(setUserDataAC(res.data.name, res.data.avatar ? res.data.avatar : "", res.data._id,
                res.data.publicCardPacksCount))
        })
        .catch(e => {
            //dispatch(setAppErrorAC('dfdgfd'))
            const error = e.response ? e.response.data.error : e.message
            dispatch(setAppErrorAC(error))
            dispatch(setLoadingStatusAC('idle'))
        })
}*/

//thunk
export const loginTC = (data: LoginParamsType) => {
    return (dispatch: Dispatch<actionLogInType>) => {
        dispatch(buttonDisabledAC(true))
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.login(data)
            .then(res => {
                dispatch(setUserDataAC(res.data))
                dispatch(setIsLoggedInAC(true))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))

            })
            .catch(e => {
                const error = e.response ? e.response.data.error : "some unknown error"
                dispatch(setAppErrorAC(error))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}

export const logoutTC = () => {
    return (dispatch: Dispatch<actionLogInType>) => {
        const LogoutData: UserDataType = {
            _id: '',
            email: '',
            name: '',
            avatar: '',
            publicCardPacksCount: 0,
            created: '',
            updated: '',
            isAdmin: false,
            verified: false,
            rememberMe: false,
        }
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.logOut()
            .then((res) => {
                dispatch(setUserDataAC(LogoutData))
                dispatch(setIsLoggedInAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}
