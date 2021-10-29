import {Dispatch} from 'redux'
import {cardsAPI} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";


export type SetUserDataACType = ReturnType<typeof setUserDataAC>

export type ActionProfileType = SetUserDataACType | setLoadingStatusAT | setAppErrorAT
type ThunkDispatch = Dispatch<ActionProfileType>

export const initState = {
    name: "",
    avatar: "",
    _id: "",
    publicCardPacksCount: 0,
}

type InitStateType = typeof initState

export const setUserData = "profile/SET-USER-DATA"

export const ProfileReducer = (state: InitStateType = initState, action: ActionProfileType): InitStateType => {
    switch (action.type) {
        case setUserData: {
            debugger
            return {...state, name: action.name, avatar: action.avatar, _id: action._id, publicCardPacksCount: action.publicCardPacksCount}
        }
        default: {
            return state
        }
    }
}

export const setUserDataAC = (name: string, avatar: string, _id: string, publicCardPacksCount: number) => ({
    type: setUserData, name, avatar, _id, publicCardPacksCount
} as const)


// thunks
export const setUserDataTC = () => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.me()
            .then((res) => {
                dispatch(setUserDataAC(res.data.name, res.data.avatar ? res.data.avatar : "", res.data._id,
                    res.data.publicCardPacksCount))
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }

}