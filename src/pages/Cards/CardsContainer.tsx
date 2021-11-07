import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../api/cardsAPI";
import {addCardTC, deleteCardTC, fetchCardsTC, updateCardTC} from "../../store/cardsReducer";
import {useParams} from "react-router-dom";
import Cards from "./Cards";
import s from "./Cards.module.css";
import SortPacks from "../Packs/SortPacks/SortPacks";
import ModalAddPack from "../../common/ModalAddPack/ModalAddPack";
import SortButton from "../../common/SortButton/SortButton";
import Button from "@mui/material/Button";
import ModalUpdatePack from "../../common/ModalUpdatePack/ModalUpdatePack";
import ModalDeletePack from "../../common/ModalDeletePack/ModalDeletePack";


function CardsContainer() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.Cards.cards)
    const myProfileId = useSelector<AppRootStateType, string>(state => state.Profile._id);
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()
    const {cardsCount} = useParams<{ cardsCount: string }>()

    useEffect(() => {
        console.log(cardsCount)
        dispatch(fetchCardsTC(cardsPack_id, Number(cardsCount)))
    }, [])



/*    const cardsForTable = cards.map((c) => ({
        firstCell: c.question,
        secondCell: c.answer,
        thirdCell: c.grade,
        forthCell: c.updated,
        _id: c._id,

    }))*/

/*    const addCardHandler = (cardsPack_id: string) => {
        dispatch(addCardTC(cardsPack_id, "test question", "test answer", 0))
    }*/

/*    const deleteCardHandler = (_id: string) => {
        dispatch(deleteCardTC(_id, cardsPack_id))
    }*/
/*    const updateCardCardHandler = (_id: string) => {
        dispatch(updateCardTC(cardsPack_id, _id, "updated question", "updated answer", 1))
    }*/

    const resultCard = cards.map(p => {
        let date = new Date(p.updated);
        let formatter = new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        const time = formatter.format(date);

/*        const onClickerWatch = () => {
            history.push(`/Cards/${p._id}/${p.cardsCount}`);
        }

        const onClickerLearn = () => {
            history.push(`/Learn/${p._id}/${p.cardsCount}`);
        }*/

        return (
            <div className={s.resultCard} key={p._id}>
                <div className={s.spanQuestion}>{p.question}</div>
                <div className={s.spanAnswer}>{p.answer}</div>
                <div className={s.spanNumber}>{String(p.grade).substring(0, 4)}</div>
                <div className={s.spanNumber}>{time}</div>
                <div className={s.spanButton}>
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
                <div className={s.containerOne}>
                    <ModalAddPack/>
                </div>
                <div className={s.resultTitle}>
                    <div className={s.question}>Question <SortButton sortDirUp={'1question'} sortDirDown={'0question'}/></div>
                    <div className={s.answer}>Answer <SortButton sortDirUp={'1answer'} sortDirDown={'0answer'}/></div>
                    <div className={s.spanNumber}>Grade <SortButton sortDirUp={'1grade'} sortDirDown={'0grade'}/></div>
                    <div className={s.spanNumber}>Time <SortButton sortDirUp={'1updated'} sortDirDown={'0updated'}/></div>
                    <div className={s.spanDesc}>Learn</div>
                    <div className={s.spanDesc}>Update</div>
                    <div className={s.spanDesc}>Delete</div>
                </div>
                {resultCard}
            </div>
        </div>
    )
}

export default CardsContainer;