import { setLoadingStatusAC, setAppErrorAC} from './appReducer'
import { LoginParamsType, cardsAPI} from "../api/cardsAPI";


const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const LogInReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: any) => {
    dispatch(setLoadingStatusAC('loading'))
    cardsAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setLoadingStatusAC('idle'))
        })
        .catch((error) => {
            //dispatch(setAppErrorAC('dfdgfd'))
            dispatch(setLoadingStatusAC('idle'))
        })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
