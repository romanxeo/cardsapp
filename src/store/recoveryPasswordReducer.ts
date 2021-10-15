
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionRecoveryPasswordType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const RecoveryPasswordReducer = (state: InitStateType = initState, action: actionRecoveryPasswordType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}