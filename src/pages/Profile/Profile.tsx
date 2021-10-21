import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setUserDataTC} from "../../store/profileReducer";
import {Redirect, useHistory} from "react-router-dom";
import s from "./Profile.module.css"
import Button from '@material-ui/core/Button';
import {setIsLoggedInAC} from "../../store/logInReducer";

function Profile() {
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
    return (
        <div className={s.background}>
            <div className={s.blockContainer}>
                <div className={s.imgContainer}><img src={avatar} alt={name}/></div>
                <div className={s.text}>{name}</div>
                <div className={s.button}>
                    <Button
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={onClickHandler}>
                        Edit profile
                    </Button>
                </div>

            </div>


        </div>
    )

}

export default Profile