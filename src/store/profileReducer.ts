import {Dispatch} from 'redux'
import {cardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";


export type SetUserDataACType = ReturnType<typeof setUserDataAC>

export type ActionProfileType = SetUserDataACType |  setLoadingStatusAT | setAppErrorAT
type ThunkDispatch = Dispatch<ActionProfileType>

export const initState = {
    name: "",
    avatar: "",
}

type InitStateType = typeof initState

export const setUserData = "profile/SET-USER-DATA"

export const ProfileReducer = (state: InitStateType = initState, action: ActionProfileType): InitStateType => {
    switch (action.type) {
        case setUserData: {
            return {...state, name: action.name, avatar: action.avatar}
        }
        default: {
            return state
        }
    }
}

export const setUserDataAC = (name: string, avatar: string) => ({
    type: setUserData, name, avatar
} as const)


// thunks
export const setUserDataTC = () => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.me()
            .then((res) => {
                dispatch(setUserDataAC(res.data.name, res.data.avatar ? res.data.avatar : ""))
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch(() => {
                dispatch(setLoadingStatusAC('idle'))
                // dispatch(setAppErrorAC('unknown error'))
            })
    }

}