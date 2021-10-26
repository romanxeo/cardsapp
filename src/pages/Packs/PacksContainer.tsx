import React, {useEffect} from 'react';
import Packs from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {PackType} from "../../api/cardsAPI";
import {fetchPacksTC} from "../../store/packsReducer";
import {Redirect} from "react-router-dom";


function PacksContainer() {
    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.Packs)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);
    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>
    }
    const addPacks = () => {

    }

    return (

        <Packs packs = {packs} onClickHandler = {addPacks}/>
    )
}

export default PacksContainer