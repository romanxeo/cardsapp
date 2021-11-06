import React from 'react'
import {sortPacksTC} from "../../store/packsReducer";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

type PropsType = {
    sortDirUp: string
    sortDirDown: string
}

const SortButtonD: React.FC<PropsType> = props => {

    const {
        sortDirUp,
        sortDirDown
    } = props

    let sortPacks = useSelector<AppRootStateType, string | null>(state => state.Packs.sortPacks);
    const dispatch = useDispatch()


    return (
        <>
            {sortPacks !== sortDirUp && sortPacks !== sortDirDown &&
            <Button
                size="small"
                variant={sortPacks === sortDirUp ? "contained" : "text"}
                onClick={(e) => {
                    dispatch(sortPacksTC(sortDirUp))
                }}
            >▲</Button>}

            {sortPacks === sortDirUp &&
            <Button
                size="small"
                variant={sortPacks === sortDirUp ? "contained" : "text"}
                onClick={(e) => {
                    dispatch(sortPacksTC(sortDirDown))
                }}
            >▲</Button>}

            {sortPacks === sortDirDown &&
            <Button
                size="small"
                variant={sortPacks === sortDirDown ? "contained" : "text"}
                onClick={(e) => {
                    dispatch(sortPacksTC(sortDirUp))
                }}
            >▼</Button>}
        </>


    )
}

export default SortButtonD

