import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import s from './ModalUpdatePack.module.css'
import {updatePackTC} from '../../store/packsReducer';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


type propsType = {
    _id: string
}

const ModalUpdatePack = (props: propsType) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState<string>('')

    const showModal = () => {
        setShow(true);
    }
    const onClickYes = () => {
        dispatch(updatePackTC(props._id, title))
        setShow(false);
        setTitle('');
    }
    const onClickNo = () => {
        setShow(false);
    }
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <>
            <Button
                type={'submit'}
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                onClick={showModal}
            >
                ⚙️
            </Button>
            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickNo}></div>
                <div className={s.modalContainer}>
                    <div className={s.title}>Update pack:</div>
                    <TextField
                        variant={"outlined"}
                        size={'small'}
                        label='Pack name'
                        value={title}
                        onChange={handleChangeInput}
                    />
                    <div className={s.buttonBlock}>
                        <Button
                            className={s.button}
                            variant={'contained'}
                            color={"primary"}
                            size={"small"}
                            onClick={onClickYes}
                        >
                            Update pack
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

export default ModalUpdatePack