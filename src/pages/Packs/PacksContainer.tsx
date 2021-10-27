import React, {useEffect} from 'react';
import Packs from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {PackType} from "../../api/cardsAPI";
import {addPackTC, deletePackTC, fetchPacksTC} from "../../store/packsReducer";
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
    const addPackHandler = () => {
        dispatch(addPackTC("NewName", false))
    }
    const deletePackHandler = (_id: string) => {
        dispatch(deletePackTC(_id))
    }

    return (

        <Packs packs = {packs}
               addPackHandler = {addPackHandler}
               deletePackHandler = {deletePackHandler}

        />
    )
}

export default PacksContainer