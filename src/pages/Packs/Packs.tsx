import React from 'react';
import s from './Packs.module.css'
import {PackType} from "../../api/cardsAPI";
import Button from "@material-ui/core/Button";


type PropsType = {
    packs: PackType[]
    addPackHandler: () => void
    deletePackHandler: (_id: string) => void
}


function Packs(props: PropsType) {

    return (
        <div>
            <Button
                variant={'contained'}
                color={"primary"}
                size={"small"}
                onClick={props.addPackHandler}>
                Add pack
            </Button>
            {props.packs.map((p, key) => {
                return <div key={p._id}>
                    <span>{p.name}</span>
                    <span>{p.cardsCount}</span>
                    <span>{p.updated}</span>
                    <Button
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={() => props.deletePackHandler(p._id)}
                        >
                        Delete
                    </Button>
                    <Button
                        variant={'contained'}
                        color={"primary"}
                        size={"small"}
                        onClick={() => {}}
                    >
                        Update
                    </Button>
                </div>


            })}

        </div>
    )
}

export default Packs