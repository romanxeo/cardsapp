
export const testAC = () => ({
    type: "TEST",
} as const)

export type testAT = ReturnType<typeof testAC>

export type actionProfileType =
    testAT

export const initState = {

}

type InitStateType = typeof initState

export const ProfileReducer = (state: InitStateType = initState, action: actionProfileType): InitStateType => {
    switch (action.type) {
        case "TEST": {
            return state
        }
        default: {
            return state
        }
    }
}