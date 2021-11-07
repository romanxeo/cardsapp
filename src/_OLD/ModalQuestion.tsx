import React from 'react';
import s from "./ModalQuestion.module.css"
import Button from "@material-ui/core/Button";

type PropsType = {
    onClickBackground: () => void
    onClickYes: () => void
    onClickNo: () => void
    questionText: string
    show: boolean

}


const ModalQuestion: React.FC<PropsType> = (
    {
        onClickBackground,
        onClickYes,
        onClickNo,
        questionText,
        show,

    }
) => {
    if (!show) {
        return null
    }

    return (
        <>

            <div className={s.backgroundModal} onClick={onClickBackground}></div>
            <div className={s.modalContainer}>
                <span>{questionText}</span>
                <div>
                    <Button
                        className={s.button}
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={onClickYes}>
                        Yes
                    </Button>
                    <Button
                        className={s.button}
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={onClickNo}>
                        No
                    </Button>
                </div>

            </div>

        </>
    )

}

export default ModalQuestion;