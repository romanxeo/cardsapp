import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cardsAPI";
import {addCardTC, deleteCardTC, fetchCardsTC} from "../../store/cardsReducer";
import {useParams} from "react-router-dom";
import Cards from "./Cards";


function CardsContainer() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.Cards)
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()
    useEffect(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }, [])

    const cardsForTable = cards.map((c) => ({
        firstCell: c.question,
        secondCell: c.answer,
        thirdCell: c.grade,
        forthCell: c.updated,
        _id: c._id,

    }))

    const addCardHandler = (cardsPack_id: string) => {
        dispatch(addCardTC(cardsPack_id, "test question", "test answer", 0))
    }

    const deleteCardHandler = (_id: string) => {
        dispatch(deleteCardTC(_id, cardsPack_id))
    }

    return (
        <Cards
            cardsForTable = {cardsForTable}
            cardsPack_id = {cardsPack_id}
            addCardHandler={addCardHandler}
            deleteCardHandler = {deleteCardHandler}


        />
    )
}

export default CardsContainer;