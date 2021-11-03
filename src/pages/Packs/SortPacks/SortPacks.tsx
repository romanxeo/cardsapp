import React, {ChangeEvent} from 'react'
import {
    changePageTC,
    changeRangeTC,
    isMyPacksTC,
    packNameTC,
    sortPacksTC,
    switchPageCountTC
} from "../../../store/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {Checkbox} from '@material-ui/core';
import {Button, Input, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material';
import s from './SortPacks.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SortButton from "../../../common/SortButton/SortButton";

const SortPacks = () => {

    let isMyPacks = useSelector<AppRootStateType, boolean>(state => state.Packs.isMyPacks);
    let cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.Packs.cardPacksTotalCount);
    let pageCount = useSelector<AppRootStateType, number>(state => state.Packs.pageCount);
    let page = useSelector<AppRootStateType, number>(state => state.Packs.page);
    let pagesButtonSwitcher = useSelector<AppRootStateType, Array<number>>(state => state.Packs.pagesButtonSwitcher);
    let sortPacks = useSelector<AppRootStateType, string | null>(state => state.Packs.sortPacks);
    let packName = useSelector<AppRootStateType, string>(state => state.Packs.packName)
    let maxCardsCount = useSelector<AppRootStateType, number>(state => state.Packs.maxCardsCount);
    let minCardsCount = useSelector<AppRootStateType, number>(state => state.Packs.minCardsCount);
    let allMin = useSelector<AppRootStateType, number>(state => state.Packs.allMin);
    let allMax = useSelector<AppRootStateType, number>(state => state.Packs.allMax);

    const dispatch = useDispatch()

    const isMyPacksOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(isMyPacksTC(e.currentTarget.checked))
    }

    const switchPageCount = (e: SelectChangeEvent<string>) => {
        const val = Number(e.target.value)
        dispatch(switchPageCountTC(val))
    }

    /*const [value, setValue] = React.useState<number[]>([20, 37]);


    };*/

    const changeRange = (e: any) => {
        //console.log(e.target.value)
        dispatch(changeRangeTC(e.target.value[0], e.target.value[1]))
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
            <div>
                Sort by:
                <SortButton sortDir={'1name'} nameButton={'Up Name'}/>
                <SortButton sortDir={'0name'} nameButton={'Down Name'}/>
                <SortButton sortDir={'1cardsCount'} nameButton={'Up Cards Count'}/>
                <SortButton sortDir={'0cardsCount'} nameButton={'Down Cards Count'}/>
                <SortButton sortDir={'1updated'} nameButton={'Up Updated'}/>
                <SortButton sortDir={'0updated'} nameButton={'Down Updated'}/>
            </div>
            <div>
                Search:
                <TextField
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                    value={packName}
                    onChange={(e)=>{dispatch(packNameTC(e.target.value))}}
                />
            </div>
            <div style={{'width': '300px', 'margin': '20px'}}>

                    <Slider
                        min={minCardsCount}
                        max={maxCardsCount}
                        value={[allMin, allMax]}
                        onChange={(e) => {changeRange(e)}}
                        valueLabelDisplay="auto"
                    />

            </div>
        </div>
    )
}

export default SortPacks
/*changeRangeTC*/

/*
<Button
variant={page === b ? "contained" : "text"}
onClick={(e) => {dispatch(changePageTC(b))
>{b}</Button>

<Button variant="contained">Contained</Button>*/
