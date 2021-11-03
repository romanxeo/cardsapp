import {packsAPI, PackType} from "../api/cardsAPI";
import {setAppErrorAC, setAppErrorAT, setLoadingStatusAC, setLoadingStatusAT} from "./appReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";


export const getPacksAC = (packs: Array<PackType>) => ({
    type: "packs/GET-PACKS", packs
} as const)

export const isMyPacksAC = (isMyPacks: boolean) => ({
    type: "packs/IS-MY-PACKS", isMyPacks
} as const)

export const allPacksDataAC = (cardPacksTotalCount: number, maxCardsCount: number, minCardsCount: number, page: number, pageCount: number) => ({
    type: "packs/ALL-PACKS-DATA", cardPacksTotalCount, maxCardsCount, minCardsCount, page, pageCount
} as const)

export const switchPageCountAC = (pageCount: number) => ({
    type: "packs/SWITCH-PAGE-COUNT", pageCount
} as const)

export const changePageAC = (page: number) => ({
    type: "packs/CHANGE-PAGE", page
} as const)

export const pagesButtonSwitcherAC = () => ({
    type: "packs/PAGES-BUTTON-SWITCHER"
} as const)

export const sortPacksAC = (sortPacks: string | null) => ({
    type: "packs/SORT-PACKS", sortPacks
} as const)

export const packNameAC = (packName: string) => ({
    type: "packs/PACK-NAME", packName
} as const)

export const changeRangeAC = (allMin: number, allMax: number) => ({
    type: "packs/CHANGE-RANGE", allMin, allMax
} as const)

type getPacksAT = ReturnType<typeof getPacksAC>
type isMyPacksAT = ReturnType<typeof isMyPacksAC>
type allPacksDataAT = ReturnType<typeof allPacksDataAC>
type switchPageCountAT = ReturnType<typeof switchPageCountAC>
type changePageAT = ReturnType<typeof changePageAC>
type pagesButtonSwitcherAT = ReturnType<typeof pagesButtonSwitcherAC>
type sortPacksAT = ReturnType<typeof sortPacksAC>
type packNameAT = ReturnType<typeof packNameAC>
type changeRangeAT = ReturnType<typeof changeRangeAC>

export type ActionsPacksType = setLoadingStatusAT
    | setAppErrorAT
    | getPacksAT
    | isMyPacksAT
    | allPacksDataAT
    | switchPageCountAT
    | changePageAT
    | pagesButtonSwitcherAT
    | sortPacksAT
    | packNameAT
    | changeRangeAT


export type InitialStateType = {
    packsArray: Array<PackType>
    isMyPacks: boolean
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number
    pagesButtonSwitcher: Array<number>
    sortPacks: string | null
    packName: string
    allMax: number,
    allMin: number
}

const initialState: InitialStateType = {
    packsArray: [],
    isMyPacks: false,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    pagesButtonSwitcher: [],
    sortPacks: null,
    packName: '',
    allMax: 0,
    allMin: 0
}


export const packsReducer = (state: InitialStateType = initialState, action: ActionsPacksType): InitialStateType => {
    switch (action.type) {
        case "packs/GET-PACKS": {
            return {...state, packsArray: action.packs}
        }
        case "packs/IS-MY-PACKS": {
            return {...state, isMyPacks: action.isMyPacks}
        }
        case "packs/ALL-PACKS-DATA": {
            return {
                ...state,
                cardPacksTotalCount: action.cardPacksTotalCount,
                maxCardsCount: action.maxCardsCount,
                minCardsCount: action.minCardsCount,
                page: action.page,
                pageCount: action.pageCount,
                allMax: state.allMax === 0 ? action.maxCardsCount : state.allMax
            }
        }
        case "packs/SWITCH-PAGE-COUNT": {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }
        case "packs/CHANGE-PAGE": {
            return {
                ...state,
                page: action.page
            }
        }
        case "packs/PAGES-BUTTON-SWITCHER": {

            let pagesCount = Math.ceil(state.cardPacksTotalCount / state.pageCount)

            let pagesButtonSwitcherNew = [];

            if (pagesCount < 6) {
                for (let i = 1; i <= pagesCount; i++) {
                    pagesButtonSwitcherNew.push(i)
                }
            }
            else {
                pagesButtonSwitcherNew.push(1)
                if (state.page < 5) {
                    for (let i = 2; i <= 6; i++) {
                        pagesButtonSwitcherNew.push(i)
                    }
                }
                else {
                    if (state.page > pagesCount-3) {
                        for (let i = 5; i >= 1; i--) {
                            pagesButtonSwitcherNew.push(pagesCount-i)
                        }
                    }
                    else {
                        for (let i = state.page-2; i <= state.page+2; i++) {
                            pagesButtonSwitcherNew.push(i)
                        }
                    }
                }
                pagesButtonSwitcherNew.push(pagesCount)
            }

            return {
                ...state,
                pagesButtonSwitcher: [...pagesButtonSwitcherNew]
            }
        }
        case "packs/SORT-PACKS": {
            return {
                ...state,
                sortPacks: action.sortPacks
            }
        }
        case "packs/PACK-NAME": {
            return {
                ...state,
                packName: action.packName
            }
        }
        case "packs/CHANGE-RANGE": {
            return {
                ...state,
                allMin: action.allMin,
                allMax: action.allMax
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsPacksType>

//thunk
/*export const fetchPacksTC = (): ThunkType => {
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
}*/

//thunk
export const fetchPacksTC = () => (dispatch: any, getState: () => AppRootStateType) => {
    const isMyPacks = getState().Packs.isMyPacks
    const _id = getState().Profile._id
    const pageCount = getState().Packs.pageCount
    const page = getState().Packs.page
    const sortPacks = getState().Packs.sortPacks
    const packName = getState().Packs.packName
    const allMin = getState().Packs.allMin
    const allMax = getState().Packs.allMax
    //debugger
    dispatch(setLoadingStatusAC('loading'))
    packsAPI.getPacks(isMyPacks, _id, pageCount, page, sortPacks, packName, allMin, allMax)
        .then((res) => {
            dispatch(getPacksAC(res.data.cardPacks))
            dispatch(allPacksDataAC(res.data.cardPacksTotalCount, res.data.maxCardsCount, res.data.minCardsCount, res.data.page, res.data.pageCount))
            dispatch(pagesButtonSwitcherAC())
            dispatch(setLoadingStatusAC('idle'))
        })
        .catch((e) => {
            dispatch(setLoadingStatusAC('idle'))
            const error = e.response ? e.response.data.error : e.message
            dispatch(setAppErrorAC(error))
        })
}

export const isMyPacksTC = (isMyPacks: boolean) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(isMyPacksAC(isMyPacks))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
}

export const switchPageCountTC = (pageCount: number) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(switchPageCountAC(pageCount))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
}

export const changePageTC = (page: number) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(changePageAC(page))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
}

export const sortPacksTC = (sortPacks: string | null) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(sortPacksAC(sortPacks))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
}

export const packNameTC = (packName: string) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(packNameAC(packName))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
}

export const changeRangeTC = (allMin: number, allMax: number) => async (dispatch: any) => {
    await dispatch(setLoadingStatusAC('loading'));
    await dispatch(changeRangeAC(allMin, allMax))
    await dispatch(fetchPacksTC())
    await dispatch(setLoadingStatusAC('idle'))
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






