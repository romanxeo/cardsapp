import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
/*import s from './App.module.css';*/
import Error404 from './pages/Error404/Error404';
import {LogIn} from './pages/LogIn/LogIn';
import Profile from "./pages/Profile/Profile";
import SetNewPassword from "../src/pages/SetNewPassword/SetNewPassword";
import RecoveryPassword from "./pages/RecoveryPassword/RecoveryPassword";
import SignUp from './pages/SignUp/SignUp';
import LoadingLine from './common/LoadingLine/LoadingLine';
import {ErrorSnackbar} from './common/ErrorSnackbar/ErrorSnackbar';
import EditProfile from "./pages/EditProfile/EditProfile";
import Header from "./pages/Header/Header";
import TestPage from "./pages/TestPage/TestPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <LoadingLine/>
            <Switch>
                <Route exact path={'/'} render={() => <TestPage/>}/>
                <Route path={'/SetNewPassword/:token'} render={() => <SetNewPassword/>}/>
                <Route path={'/Error404'} render={() => <Error404/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path={'/Profile'} render={() => <Profile/>}/>
                <Route path={'/RecoveryPassword'} render={() => <RecoveryPassword/>}/>
                <Route path={'/SignUp'} render={() => <SignUp/>}/>
                <Route path={'/EditProfile'} render={() => <EditProfile/>}/>
                <Redirect from={'*'} to={'/error404'}/>
            </Switch>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
