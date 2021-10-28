import {setLoadingStatusAC, setAppErrorAC, setLoadingStatusAT, setAppErrorAT} from './appReducer'
import {LoginParamsType, cardsAPI} from "../api/cardsAPI";
import {setUserDataAC, SetUserDataACType} from "./profileReducer";
import {Dispatch} from 'redux';

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
    | SetUserDataACType
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
    return (dispatch: any) => {
        dispatch(buttonDisabledAC(true))
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.login(data)
            .then(res => {
                alert('good')
                dispatch(setIsLoggedInAC(true))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
                dispatch(setUserDataAC(res.data.name, res.data.avatar ? res.data.avatar : "", res.data._id,
                    res.data.publicCardPacksCount))
            })
            .catch(e => {
                alert('bad')
                const error = e.response ? e.response.data.error : "some unknown error"
                dispatch(setAppErrorAC(error))
                dispatch(buttonDisabledAC(false))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}

export const logoutTC = () => (dispatch: Dispatch<actionLogInType>) => {
    dispatch(setLoadingStatusAC('loading'))
    cardsAPI.logOut()
        .then((res) => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setLoadingStatusAC('idle'))
            dispatch(setUserDataAC("", "", "", 0))
        })
        .catch(e => {
            dispatch(setLoadingStatusAC('idle'))
            //dispatch(setAppErrorAC("some error"))
            const error = e.response ? e.response.data.error : e.message
            dispatch(setAppErrorAC(error))
        })

}

