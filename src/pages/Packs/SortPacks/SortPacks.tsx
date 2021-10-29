import React, {ChangeEvent} from 'react'
import {changePageTC, isMyPacksTC, switchPageCountTC} from "../../../store/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import { Checkbox } from '@material-ui/core';
import {Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import s from './SortPacks.module.css'

const SortPacks = () => {

    let isMyPacks = useSelector<AppRootStateType, boolean>(state => state.Packs.isMyPacks);
    let cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.Packs.cardPacksTotalCount);
    let pageCount = useSelector<AppRootStateType, number>(state => state.Packs.pageCount);
    let page = useSelector<AppRootStateType, number>(state => state.Packs.page);
    let pagesButtonSwitcher = useSelector<AppRootStateType, Array<number>>(state => state.Packs.pagesButtonSwitcher);
    const dispatch = useDispatch()

    const isMyPacksOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isMyPacksTC(e.currentTarget.checked))
    }

    const switchPageCount = (e: SelectChangeEvent<string>) => {
        const val = Number(e.target.value)
        dispatch(switchPageCountTC(val))
    }

    return (
        <div>
            <div>
                <input
                    type={'checkbox'}
                    onChange={isMyPacksOnChange}
                    checked={isMyPacks}
                /> My Packs
            </div>
            <div>
                cardPacksTotalCount: {cardPacksTotalCount}
            </div>
            <div>
                In One Page:
                <Select
                    //labelId="demo-simple-select-label"
                    //id="demo-simple-select"
                    value={pageCount.toString()}
                    variant="filled"
                    label="Count"
                    onChange={switchPageCount}
                >
                    <MenuItem value={10}>10 Ten</MenuItem>
                    <MenuItem value={20}>20 Twenty</MenuItem>
                    <MenuItem value={30}>30 Thirty</MenuItem>
                    <MenuItem value={40}>40 Forty</MenuItem>
                    <MenuItem value={50}>50 Fifty</MenuItem>
                </Select>
            </div>
            <div>
                {pagesButtonSwitcher.map(b =>
                    <Button
                        size="small"
                        variant={page === b ? "contained" : "text"}
                        onClick={(e) => {
                            dispatch(changePageTC(b))
                        }}>{b}</Button>
                )}
            </div>
        </div>
    )
}

export default SortPacks



/*
<Button
variant={page === b ? "contained" : "text"}
onClick={(e) => {dispatch(changePageTC(b))
>{b}</Button>

<Button variant="contained">Contained</Button>*/
