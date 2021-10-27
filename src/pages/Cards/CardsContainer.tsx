import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cardsAPI";
import {fetchPacksTC} from "../../store/packsReducer";

function CardsContainer() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.Cards)
    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])
    return(
        <div>

        </div>
    )
}
export default CardsContainer;