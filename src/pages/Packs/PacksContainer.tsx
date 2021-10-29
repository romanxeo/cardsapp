import React, {ChangeEvent, useEffect} from 'react';
import Packs from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {PackType} from "../../api/cardsAPI";
import {addPackTC, deletePackTC, fetchPacksTC, isMyPacksTC, updatePackTC} from "../../store/packsReducer";
import {Redirect} from "react-router-dom";
import SortPacks from "./SortPacks/SortPacks";


function PacksContainer() {
    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.Packs.packsArray)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);

    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>
    }
    const addPackHandler = () => {
        dispatch(addPackTC("NewName-R", false))
    }
    const deletePackHandler = (_id: string) => {
        dispatch(deletePackTC(_id))
    }
    const updatePackHandler = (_id: string, name: string) => {
        // debugger
        dispatch(updatePackTC(_id, name))
    }
    const packsForTable = packs.map((p) => (
        {

        firstCell: p.name,
        secondCell: p.cardsCount,
        thirdCell: p.updated,
        _id: p._id
    }))



    return (
        <div>
            <SortPacks />
            <Packs packsForTable={packsForTable}
                   addPackHandler={addPackHandler}
                   deletePackHandler={deletePackHandler}
                   updatePackHandler={updatePackHandler}
            />
        </div>

    )
}

export default PacksContainer