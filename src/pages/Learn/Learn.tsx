import React, {useCallback, useEffect, useState} from 'react'
import cs from "../../common/commonStyles.module.css";
import {Redirect, useParams} from "react-router-dom";
import {CardType, PackType} from "../../api/cardsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {fetchCardsTC} from "../../store/cardsReducer";
import {learnCardsTC} from "../../store/learnReducer";
import {LearnQuestion} from "./LearnQuestion";
import { LearnAnswer } from './LearnAnswer';

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

const Learn = () => {

    const {cardsCount} = useParams<{ cardsCount: string }>()
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn)
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.Cards.cardsArray)

    const dispatch = useDispatch()

    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [firstCard, setFirstCard] = useState<boolean>(true)
    const [card, setCard] = useState<CardType>({_id: ""} as CardType)

    useEffect(() => {
        if (firstCard) {
            dispatch(fetchCardsTC(cardsPack_id, Number(cardsCount)))
            setFirstCard(false)
        }
        if (cards.length > 0) {
            setCard(getCard(cards))
        }
    }, [dispatch, cards, firstCard, cardsPack_id]);

    const onNextCard = useCallback((grade: number) => {
        if (cards.length > 0) {
            if (grade !== -1) {
                setShowAnswer(false)
                dispatch(learnCardsTC(grade, card._id))
                setCard(getCard(cards))
            }

        }
    }, [dispatch, cards, card]);

    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={cs.background}>
            <div className={cs.blockContainer}>
                <h3 className={cs.text}>Learn</h3>
                {!showAnswer
                    ? <LearnQuestion
                        setShowAnswer={setShowAnswer}
                        card={card}

                    />
                    : <LearnAnswer
                        setShowAnswer={setShowAnswer}
                        card={card}
                        onNextCard={onNextCard}
                    />}
            </div>
        </div>
    )
}

export default Learn