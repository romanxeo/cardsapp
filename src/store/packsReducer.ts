import {packsAPI, PackType} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";

type InitStateType = typeof initState;
type getPacksACType = ReturnType<typeof getPacksAC>
// type addPacksACType = ReturnType<typeof addPacksAC>
export type ActionsPacksType = setLoadingStatusAT | setAppErrorAT | getPacksACType
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsPacksType>


const setPacks = "packs/SET-PACKS"
// const addPack = "packs/ADD-PACK"

export const initState: Array<PackType> = []

export const packsReducer = (state: InitStateType = initState, action: ActionsPacksType): InitStateType => {
    switch (action.type) {
        case "packs/SET-PACKS": {
            return action.packs;
        }
        default: {
            return state
        }
    }
}

export const getPacksAC = (packs: Array<PackType>) => ({
    type: setPacks, packs
} as const)
// export const addPacksAC = () => ({
//     type: addPack
// } as const)

//thunk
export const fetchPacksTC = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsPacksType>) => {
        dispatch(setLoadingStatusAC('loading'))
        packsAPI.getPacks()
            .then((res) => {
                dispatch(getPacksAC(res.data.cardPacks))
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}

export const addPackTC = (name: string, isPrivate: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsPacksType>) => {
        dispatch(setLoadingStatusAC('loading'));
        packsAPI.addPack(name, isPrivate)
            .then((res) => {
                // dispatch(addPacksAC())
                dispatch(fetchPacksTC())
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}

export const deletePackTC = (_id: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsPacksType>) => {
        dispatch(setLoadingStatusAC('loading'));
        packsAPI.deletePack(_id)
            .then(() => {
                dispatch(fetchPacksTC())
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}

export const updatePackTC = (_id: string, name: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsPacksType>) => {
        dispatch(setLoadingStatusAC('loading'));
        packsAPI.updatePack(_id, name)
            .then(() => {
                dispatch(fetchPacksTC())
                dispatch(setLoadingStatusAC('idle'))
            })
            .catch((e) => {
                dispatch(setLoadingStatusAC('idle'))
                const error = e.response ? e.response.data.error : e.message
                dispatch(setAppErrorAC(error))
            })
    }
}




