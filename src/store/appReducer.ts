
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionAppType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const appReducer = (state: InitStateType = initState, action: actionAppType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}