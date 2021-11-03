import React, {useState} from "react";
import ModalQuestion from "./ModalQuestion";
import Button from "@material-ui/core/Button";

type PropsType = {
    questionText: string
    onClickHandler: (answer: boolean) => void
    buttonName: string
}

const ModalQuestionContainer: React.FC<PropsType> = (
    {
        questionText,
        buttonName,
        onClickHandler,
    }
) => {
    const [show, setShow] = useState(false);

    const onClickYes = () => {
        setShow(false);
        onClickHandler(true)
    }
    const onClickNo = () => {
        setShow(false);
    }
    const onClickBackground = () => {
        setShow(false)
    }

    return (
        <>
            <Button
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                onClick={() => setShow(true)}>
                {buttonName}
            </Button>
            <ModalQuestion onClickBackground={onClickBackground}
                           onClickYes={onClickYes}
                           onClickNo={onClickNo}
                           questionText={questionText}
                           show={show}
            />

        </>

    )
}

export default ModalQuestionContainer;
