import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cardsAPI";
import {fetchCardsTC} from "../../store/cardsReducer";
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
        forthCell: c.updated
    }))
    return (
        <Cards
            cardsForTable = {cardsForTable }/>
    )
}

export default CardsContainer;