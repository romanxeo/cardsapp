import React from 'react';
import s from './Packs.module.css'
import {PackType} from "../../api/cardsAPI";
import Button from "@material-ui/core/Button";


type PropsType = {
    packs: PackType[]
    onClickHandler: () => void
}


function Packs(props: PropsType) {

    return (
        <div>
            <Button
                variant={'contained'}
                color={"primary"}
                size={"small"}
                onClick={props.onClickHandler}>
                Add pack
            </Button>
            {props.packs.map((p, key) => {
                // debugger
                return <div key={p._id}>
                    <div>{p.name}</div>
                    <div>{p.cardsCount}</div>
                    <div>{p.updated}</div>
                </div>


            })}

        </div>
    )
}

export default Packs