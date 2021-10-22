import React from 'react';
import s from "./Profile.module.css"
import Button from '@material-ui/core/Button';

type ProfilePropsType = {
    name: string
    avatar?: string
    onClickHandler: () => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div className={s.background}>
            <div className={s.blockContainer}>
                <div className={s.imgContainer}><img src={props.avatar} alt={props.name}/></div>
                <div className={s.text}>{props.name}</div>
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