import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
/*import s from './App.module.css';*/
import Error404 from './pages/Error404/Error404';
import LogIn from './pages/LogIn/LogIn';
import Profile from "./pages/Profile/Profile";
import EnterNewPassword from "./pages/EnterNewPassword/EnterNewPassword";
import RecoveryPassword from "./pages/RecoveryPassword/RecoveryPassword";
import SignUp from './pages/SignUp/SignUp';
import TestPage from './pages/TestPage/TestPage';


function App() {
    return (
        <div className="App">

            <Switch>
                <Route exact path={'/'} render={() => <TestPage/>}/>
                <Route path={'/EnterNewPassword'} render={() => <EnterNewPassword/>}/>
                <Route path={'/Error404'} render={() => <Error404/>}/>
                <Route path={'/LogIn'} render={() => <LogIn/>}/>
                <Route path={'/Profile'} render={() => <Profile/>}/>
                <Route path={'/RecoveryPassword'} render={() => <RecoveryPassword/>}/>
                <Route path={'/SignUp'} render={() => <SignUp/>}/>
                <Redirect from={'*'} to={'/error404'}/>
            </Switch>

        </div>
    );
}

export default App;
