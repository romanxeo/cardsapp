import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import s from './ModalAddPack.module.css'
import {addPackTC} from '../../../store/packsReducer';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';

const ModalAddPack = () => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState<string>('')
    const [isPrivate, setIsPrivate] = useState<boolean>(false)

    const showModal = () => {
        setShow(true);
    }

    const onClickYes = () => {
        dispatch(addPackTC(title, isPrivate))
        setShow(false);
        setIsPrivate(false);
        setTitle('');
    }
    const onClickNo = () => {
        setShow(false);
    }

    const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPrivate(event.target.checked);
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <div>
            <Button
                type={'submit'}
                variant={'contained'}
                color={"primary"}
                size={"small"}
                onClick={showModal}
            >
                Add pack
            </Button>
            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickNo}></div>
                <div className={s.modalContainer}>
                    <div className={s.title}>Add pack:</div>
                    <TextField
                        variant={"outlined"}
                        size={'small'}
                        label='Pack name'
                        value={title}
                        onChange={handleChangeInput}
                    />
                    <div>
                        <Switch
                            checked={isPrivate}
                            onChange={handleChangeSwitch}
                            inputProps={{'aria-label': 'controlled'}}
                        />
                        {isPrivate ? 'Private' : 'Public'}
                    </div>
                    <div className={s.buttonBlock}>
                        <Button
                            className={s.button}
                            variant={'contained'}
                            color={"primary"}
                            size={"small"}
                            onClick={onClickYes}
                        >
                            Add pack
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
        </div>
    )
}

export default ModalAddPack