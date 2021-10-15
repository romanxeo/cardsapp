
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionLogInType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const LogInReducer = (state: InitStateType = initState, action: actionLogInType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}