import React from 'react'
import Button from "@mui/material/Button";
import {changePageTC} from "../../store/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

const Paginator = () => {
    let pagesButtonSwitcher = useSelector<AppRootStateType, Array<number>>(state => state.Packs.pagesButtonSwitcher);
    let page = useSelector<AppRootStateType, number>(state => state.Packs.page);
    const dispatch = useDispatch()

    return (
        <div>
            Page: {pagesButtonSwitcher.map(b =>
                <Button
                    key={b}
                    size="small"
                    variant={page === b ? "contained" : "text"}
                    onClick={(e) => {
                        dispatch(changePageTC(b))
                    }}>{b}</Button>
            )}
        </div>
    )
}

export default Paginator