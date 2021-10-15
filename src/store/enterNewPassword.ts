
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionEnterNewPasswordType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const EnterNewPasswordReducer = (state: InitStateType = initState, action: actionEnterNewPasswordType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}