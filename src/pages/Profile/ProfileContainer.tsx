import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setUserDataTC} from "../../store/profileReducer";
import {Redirect, useHistory} from "react-router-dom";
import {setIsLoggedInAC} from "../../store/logInReducer";
import Profile from "./Profile";
import {UserDataType} from "../../api/cardsAPI";

function ProfileContainer() {

    const userData = useSelector<AppRootStateType, UserDataType>(state => state.Profile)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);
    const dispatch = useDispatch()
    const history = useHistory();

    //const _id = useSelector<AppRootStateType, string>(state => state.Profile._id)
    //const name = useSelector<AppRootStateType, string>(state => state.Profile.name);
    //const avatar = useSelector<AppRootStateType, string>(state => state.Profile.avatar);
    //const publicCardPacksCount = useSelector<AppRootStateType, number>(state => state.Profile.publicCardPacksCount);

    useEffect(() => {
        dispatch(setUserDataTC())
    }, [])

    const onClickHandler = () => {
        history.push('/EditProfile');
    }

    if (!isLoggedIn) {
        dispatch(setUserDataTC());
        if (!userData._id) {
            return <Redirect to={"/login"}/>
        } else {
            dispatch(setIsLoggedInAC(true))
        }

    }
    return <Profile userData={userData}
                    onClickHandler={onClickHandler}/>

}

export default ProfileContainer