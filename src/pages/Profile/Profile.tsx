import React from 'react';
import s from "./Profile.module.css"
import cs from "../../common/commonStyles.module.css";
import Button from '@material-ui/core/Button';
import ModalQuestionContainer from "../../common/Modals/ModalQuestion/ModalQuestionContainer";

type ProfilePropsType = {
    name: string
    avatar?: string
    publicCardPacksCount: number
    onClickHandler: () => void
}

function Profile(props: ProfilePropsType) {



    return (
        <div className={cs.background}>
            <div className={s.blockContainer}>
                <div className={s.imgContainer}><img src={props.avatar} alt={props.name}/></div>
                <div className={s.text}>{props.name}</div>
                <div className={s.text}>{`You have ${props.publicCardPacksCount} public packs`}</div>
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