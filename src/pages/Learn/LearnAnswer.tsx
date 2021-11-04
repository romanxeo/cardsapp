import React, {ChangeEvent, useCallback, useState} from "react";
import Button from "@mui/material/Button";
import s from './Learn.module.css'
import {CardType} from "../../api/cardsAPI";

type LearnAnswerPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
    onNextCard: (grade: number) => void
}

const grades = ['не знаю', 'немного знаю', 'есть неточность', 'знаю почти всё', 'всё знаю'];

export const LearnAnswer: React.FC<LearnAnswerPropsType> = React.memo((props) => {

    const {
        setShowAnswer,
        card,
        onNextCard,
    } = props;

    const [value, setValue] = useState<number>(-1);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value) as number)
    }, []);

    return (
        <div className={s.container}>
            <div className={s.blockOne}>
                <span className={s.title}>Question: </span>
                <span className={s.text}>{props.card.question}</span>
            </div>
            <div className={s.blockOne}>
                <span className={s.title}>Answer: </span>
                <span className={s.text}>{props.card.answer}</span>
            </div>
            <div className={s.blockOne}>
                <div>
                    <input
                        type={"radio"}
                        value={1}
                        checked={value === 1}
                        onChange={onChangeHandler}
                    /><span className={s.answerText}>{grades[0]}</span>
                </div>
                <div>
                    <input
                        type={"radio"}
                        value={2}
                        checked={value === 2}
                        onChange={onChangeHandler}
                    /><span className={s.answerText}>{grades[1]}</span>
                </div>
                <div>
                    <input
                        type={"radio"}
                        value={3}
                        checked={value === 3}
                        onChange={onChangeHandler}
                    /><span className={s.answerText}>{grades[2]}</span>
                </div>
                <div>
                    <input
                        type={"radio"}
                        value={4}
                        checked={value === 4}
                        onChange={onChangeHandler}
                    /><span className={s.answerText}>{grades[3]}</span>
                </div>
                <div>
                    <input
                        type={"radio"}
                        value={5}
                        checked={value === 5}
                        onChange={onChangeHandler}
                    /><span className={s.answerText}>{grades[4]}</span>
                </div>
            </div>
            <div className={s.blockOne}>
                <Button
                    onClick={() => setShowAnswer(false)}
                    size="small"
                    variant={"text"}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => onNextCard(value)}
                    size="small"
                    variant={"contained"}
                >
                    Next
                </Button>
            </div>
        </div>
    )
})