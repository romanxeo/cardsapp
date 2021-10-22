import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setUserDataTC} from "../../store/profileReducer";
import {Redirect, useHistory} from "react-router-dom";
import {setIsLoggedInAC} from "../../store/logInReducer";
import Profile from "./Profile";

function ProfileContainer() {
    const dispatch = useDispatch()

    const name = useSelector<AppRootStateType, string>(state => state.Profile.name);
    const avatar = useSelector<AppRootStateType, string>(state => state.Profile.avatar);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/EditProfile');
    }

    if (!isLoggedIn) {
        dispatch(setUserDataTC());
        if (!name) {
            return <Redirect to={"/login"}/>
        } else {
            dispatch(setIsLoggedInAC(true))
        }

    }
    return <Profile name={name} avatar={avatar} onClickHandler={onClickHandler}/>


}

export default ProfileContainer