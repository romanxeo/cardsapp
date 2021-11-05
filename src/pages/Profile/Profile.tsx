import React from 'react';
import s from "./Profile.module.css"
import cs from "../../common/commonStyles.module.css";
import Button from '@material-ui/core/Button';
import ModalQuestionContainer from "../../common/Modals/ModalQuestion/ModalQuestionContainer";
import {UserDataType} from "../../api/cardsAPI";
import noAvatar from '../../assets/noAvatar/noAvatar.png'

type ProfilePropsType = {
    userData: UserDataType
    onClickHandler: () => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div className={cs.background}>
            <div className={cs.blockContainer}>
                <div className={s.imgContainer}>
                    <img
                        src={props.userData.avatar ? props.userData.avatar : noAvatar}
                        alt={props.userData.name}
                        className={s.imgAvatar}
                    />
                </div>
                <div className={s.textBlock}><span className={s.textOne}>Name: </span><span className={s.textTwo}>{props.userData.name}</span></div>
                <div className={s.textBlock}><span className={s.textOne}>Email: </span><span className={s.textTwo}>{props.userData.email}</span></div>
                <div className={s.textBlock}><span className={s.textOne}>Admin: </span><span className={s.textTwo}>{props.userData.isAdmin ? 'Yes' : 'No'}</span></div>
                <div className={s.textBlock}><span className={s.textOne}>You have: </span><span className={s.textTwo}>{`${props.userData.publicCardPacksCount} public packs`}</span></div>

                {/*<div><span>Account Created: </span><span>{props.userData.created}</span></div>
                <div><span>Updated: </span><span>{props.userData.updated}</span></div>
                <div><span>Remember me: </span><span>{props.userData.rememberMe ? 'Yes' : 'No'}</span></div>
                <div><span>Verified: </span><span>{props.userData.verified ? 'Yes' : 'No'}</span></div>
                <div><span>id: </span><span>{props.userData._id}</span></div>*/}

                {/*<div className={s.text}>{props.userData.name}</div>
                <div className={s.text}>{`You have ${props.userData.publicCardPacksCount} public packs`}</div>*/}

                <div className={s.button}>
                    <Button
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={props.onClickHandler}>
                        Edit profile
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default Profile