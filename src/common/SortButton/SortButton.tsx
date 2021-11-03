import React from 'react'
import {sortPacksTC} from "../../store/packsReducer";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

type PropsType = {
    sortDir: string
    nameButton: string
}

const SortButton: React.FC<PropsType> = props => {

    const {
        sortDir,
        nameButton
    } = props

    let sortPacks = useSelector<AppRootStateType, string | null>(state => state.Packs.sortPacks);
    const dispatch = useDispatch()

    return (
        <Button
            size="small"
            variant={sortPacks === sortDir ? "contained" : "text"}
            onClick={(e) => {
                dispatch(sortPacksTC(sortDir))
            }}
        >{nameButton}</Button>
    )
}

export default SortButton