import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setUserDataTC} from "../../store/profileReducer";
import {Redirect, useHistory} from "react-router-dom";
import {setIsLoggedInAC} from "../../store/logInReducer";
import Profile from "./Profile";

function ProfileContainer() {
    const dispatch = useDispatch()
    const _id = useSelector<AppRootStateType, string>(state => state.Profile._id)
    const name = useSelector<AppRootStateType, string>(state => state.Profile.name);
    const avatar = useSelector<AppRootStateType, string>(state => state.Profile.avatar);
    const publicCardPacksCount = useSelector<AppRootStateType, number>(state => state.Profile.publicCardPacksCount);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/EditProfile');
    }

    if (!isLoggedIn) {
        dispatch(setUserDataTC());
        if (!_id) {
            return <Redirect to={"/login"}/>
        } else {
            dispatch(setIsLoggedInAC(true))
        }

    }
    return <Profile name={name}
                    avatar={avatar}
                    publicCardPacksCount={publicCardPacksCount}
                    onClickHandler={onClickHandler}/>


}

export default ProfileContainer