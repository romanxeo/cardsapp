
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionSignUpType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const SignUpReducer = (state: InitStateType = initState, action: actionSignUpType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}