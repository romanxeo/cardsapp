import {cardsAPI, UserDataType} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {setIsLoggedInAC} from "./logInReducer";


export const setUserDataAC = (data: UserDataType) => ({
    type: "PROFILE/SET-USER-DATA", data
} as const)

export type setUserDataAT = ReturnType<typeof setUserDataAC>

export type actionProfileType = setUserDataAT
    | setLoadingStatusAT
    | setAppErrorAT

export const initState = {
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

type InitStateType = typeof initState

export const ProfileReducer = (state: InitStateType = initState, action: actionProfileType): InitStateType => {
    switch (action.type) {
        case "PROFILE/SET-USER-DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }
    }
}




// thunks
export const setUserDataTC = () => {
    return (dispatch: any) => {
        dispatch(setLoadingStatusAC('loading'))
        cardsAPI.me()
            .then(res => {
                dispatch(setUserDataAC(res.data))
                dispatch(setIsLoggedInAC(true))
                dispatch(setLoadingStatusAC('idle'))

            })
            .catch(e => {
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
                dispatch(setLoadingStatusAC('idle'))
            })
    }
}








/*type ThunkDispatch = Dispatch<actionProfileType>*/
/*
export const setUserDataACTwo = (name: string, avatar: string, _id: string, publicCardPacksCount: number) => ({
    type: setUserData, name, avatar, _id, publicCardPacksCount
} as const)
*/
/*export const setUserDataTCtwo = () => {
    return (dispatch: any) => {
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

}*/