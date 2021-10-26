import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
/*import s from './App.module.css';*/
import Error404 from './pages/Error404/Error404';
import {LogIn} from './pages/LogIn/LogIn';
import SetNewPassword from "../src/pages/SetNewPassword/SetNewPassword";
import RecoveryPassword from "./pages/RecoveryPassword/RecoveryPassword";
import SignUp from './pages/SignUp/SignUp';
import LoadingLine from './common/LoadingLine/LoadingLine';
import {ErrorSnackbar} from './common/ErrorSnackbar/ErrorSnackbar';
import EditProfile from "./pages/EditProfile/EditProfile";
import Header from "./pages/Header/Header";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import StartPage from "./pages/StartPage/StartPage";
import PacksContainer from "./pages/Packs/PacksContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <LoadingLine/>
            <Switch>
                <Route exact path={'/'} render={() => <StartPage/>}/>
                <Route path={'/SetNewPassword/:token'} render={() => <SetNewPassword/>}/>
                <Route path={'/Error404'} render={() => <Error404/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path={'/Profile'} render={() => <ProfileContainer/>}/>
                <Route path={'/RecoveryPassword'} render={() => <RecoveryPassword/>}/>
                <Route path={'/SignUp'} render={() => <SignUp/>}/>
                <Route path={'/EditProfile'} render={() => <EditProfile/>}/>
                <Route path={'/Packs'} render={() => <PacksContainer/>}/>
                <Redirect from={'*'} to={'/error404'}/>
            </Switch>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
