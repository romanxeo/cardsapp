import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import s from './ModalDeletePack.module.css'
import {deletePackTC, updatePackTC} from '../../store/packsReducer';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


type propsType = {
    _id: string
}

const ModalDeletePack = (props: propsType) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }
    const onClickYes = () => {
        dispatch(deletePackTC(props._id))
        setShow(false);
    }
    const onClickNo = () => {
        setShow(false);
    }

    return (
        <>
            <Button
                type={'submit'}
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                onClick={showModal}
            >
                ❌️
            </Button>
            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickNo}></div>
                <div className={s.modalContainer}>
                    <div className={s.title}>Delete pack?</div>
                    <div className={s.buttonBlock}>
                        <Button
                            className={s.button}
                            variant={'contained'}
                            color={"primary"}
                            size={"small"}
                            onClick={onClickYes}
                        >
                            Delete
                        </Button>
                        <Button
                            className={s.button}
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={onClickNo}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default ModalDeletePack