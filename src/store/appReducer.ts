export type RequestStatusType = 'idle' | 'loading'
//test2
export const setLoadingStatusAC = (statusRequest: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS",
        statusRequest
    } as const
}

export const setAppErrorAC = (error: null | string) => {
    return {
        type: "APP/SET-ERROR",
        error
    } as const
}

export type setLoadingStatusAT = ReturnType<typeof setLoadingStatusAC>
export type setAppErrorAT = ReturnType<typeof setAppErrorAC>

export type actionAppType = setLoadingStatusAT | setAppErrorAT

export const initState = {
    status: 0,
    error: null as null | string

}

type InitStateType = typeof initState

export const appReducer = (state: InitStateType = initState, action: actionAppType): InitStateType => {
    switch (action.type) {
        case "APP/SET-STATUS": {
            let copyState = {...state};
            if (action.statusRequest === 'loading') {
                copyState.status++
            } else {
                copyState.status--
            }
            return copyState
        }
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default: {
            return state
        }
    }
}