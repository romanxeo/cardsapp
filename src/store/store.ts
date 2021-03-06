import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";
import {LogInReducer} from "./logInReducer";
import {ProfileReducer} from "./profileReducer";
import {RecoveryPasswordReducer} from "./recoveryPasswordReducer";
import {SignUpReducer} from "./signUpReducer";
import {packsReducer} from "./packsReducer";
import {cardsReducer} from "./cardsReducer";
import {learnReducer} from "./learnReducer";

// объединяя reducer-ы с помощью combineReducers,
const rootReducer = combineReducers({
    app: appReducer,
    setNewPassword: setNewPasswordReducer,
    LogIn: LogInReducer,
    Profile: ProfileReducer,
    RecoveryPassword: RecoveryPasswordReducer,
    SignUp: SignUpReducer,
    Packs: packsReducer,
    Cards: cardsReducer,
    Learn: learnReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;