import React, {ChangeEvent, useEffect} from 'react';
import Packs from "./Packs";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {PackType} from "../../api/cardsAPI";
import {addPackTC, deletePackTC, fetchPacksTC, isMyPacksTC, updatePackTC} from "../../store/packsReducer";
import {Redirect} from "react-router-dom";
import SortPacks from "./SortPacks/SortPacks";
import cs from "../../common/commonStyles.module.css";
import s from "./Packs.module.css";
import Button from "@mui/material/Button";
import ModalUpdatePack from "../../common/ModalUpdatePack/ModalUpdatePack";
import ModalDeletePack from '../../common/ModalDeletePack/ModalDeletePack';
import SortButton from "../../common/SortButton/SortButton";
import SortButtonD from "../../common/SortButton/SortButtonD";
import Paginator from "../../common/Paginator/Paginator";
import ModalAddPack from "../../common/ModalAddPack/ModalAddPack";

function PacksContainer() {
    const dispatch = useDispatch()
    const cardPacks = useSelector<AppRootStateType, Array<PackType>>(state => state.Packs.cardPacks)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.LogIn.isLoggedIn);
    const myProfileId = useSelector<AppRootStateType, string>(state => state.Profile._id);

    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>
    }

    const resultPack = cardPacks.map(p => {
        let date = new Date(p.updated);
        let formatter = new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        const time = formatter.format(date);

        return (
            <div className={s.resultPack}>
                <div className={s.spanName}>{p.name.substring(0, 23)}</div>
                <div className={s.spanNumber}>{p.cardsCount}</div>
                <div className={s.spanNumber}>{p.grade}</div>
                <div className={s.spanAuthor}>{p.user_name.substring(0, 17)}</div>
                <div className={s.spanNumber}>{time}</div>
                <div className={s.spanButton}>
                    <Button
                        type={'submit'}
                        variant={'outlined'}
                        color={"primary"}
                        size={"small"}
                        onClick={alert}
                    >
                        🗃️
                    </Button>
                    <Button
                        type={'submit'}
                        variant={'outlined'}
                        color={"primary"}
                        size={"small"}
                        onClick={alert}
                    >
                        💡️
                    </Button>
                    {myProfileId === p.user_id &&
                        <>
                        <ModalUpdatePack _id={p._id}/>
                        <ModalDeletePack _id={p._id}/>
                        </>
                    }

                </div>
            </div>
        )
    })

    return (
        <div className={s.background}>
            <div className={s.blockContainer}>

                <SortPacks/>

                <div className={s.containerOne}>
                    <ModalAddPack/>
                </div>
                <div className={s.resultPack}>
                    <div className={s.spanName}>Name <SortButtonD sortDirUp={'1name'} sortDirDown={'0name'}/></div>
                    <div className={s.spanNumber}>Cards <SortButtonD sortDirUp={'1cardsCount'} sortDirDown={'0cardsCount'}/></div>
                    <div className={s.spanNumber}>Grade <SortButtonD sortDirUp={'1grade'} sortDirDown={'0grade'}/></div>
                    <div className={s.spanAuthor}>Author <SortButtonD sortDirUp={'1user_name'} sortDirDown={'0user_name'}/></div>
                    <div className={s.spanNumber}>Time <SortButtonD sortDirUp={'1updated'} sortDirDown={'0updated'}/></div>
                    <div className={s.spanDesc}>Watch</div>
                    <div className={s.spanDesc}>Learn</div>
                    <div className={s.spanDesc}>Update</div>
                    <div className={s.spanDesc}>Delete</div>
                </div>

                {resultPack}

                <div className={s.containerOne}>
                    <Paginator/>
                </div>
            </div>
        </div>
    )
}

export default PacksContainer