import React from "react";
import {CardType} from "../../api/cardsAPI";
import Button from "@mui/material/Button";
import s from "./Learn.module.css";

type LearnQuestionPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
}


export const LearnQuestion: React.FC<LearnQuestionPropsType> = React.memo((props) => {
    return (

        <div className={s.container}>
            <div className={s.blockOne}>
                <span className={s.title}>Question: </span>
                <span className={s.text}>{props.card.question}</span>
            </div>
            <div className={s.blockOne}>
                <Button
                    onClick={() => props.setShowAnswer(true)}
                    size="small"
                    variant={"contained"}
                >
                    Show answer
                </Button>
            </div>
        </div>
    )
})