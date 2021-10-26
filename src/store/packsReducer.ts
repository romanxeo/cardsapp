import {packsAPI, PackType} from "../api/cardsAPI";
import {Dispatch} from "redux";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";

type InitStateType = typeof initState;
type getPacksACType = ReturnType<typeof getPacksAC>
export type ActionsPacksType = setLoadingStatusAT | setAppErrorAT | getPacksACType
type ThunkDispatch = Dispatch<ActionsPacksType>

const setPacks = "packs/SET-PACKS"

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

//thunk
export const fetchPacksTC = () => {
    return (dispatch: ThunkDispatch) => {
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




