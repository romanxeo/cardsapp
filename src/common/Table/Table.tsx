import React from 'react';
import {PackType} from "../../api/cardsAPI";
import s from './Table.module.css'
import Button from "@material-ui/core/Button";

type PropsType = {
    tableHeaders: Array<string>
    tableDate: Array<PackType>
    deletePackHandler: (_id: string) => void
    updatePackHandler: (_id: string, name: string) => void
}

function Table(props: PropsType) {
    return (
        <table className={s.table}>
            <thead className={s.table}>
            <tr className={s.table}>
                {props.tableHeaders.map((h) => {
                    return <td className={s.table}>{h}</td>
                })}
            </tr>
            </thead>
            <tbody className={s.table}>

            {props.tableDate.map((d) => {
                return <tr className={s.table}>
                    <td className={s.table}>{d.name}</td>
                    <td className={s.table}>{d.cardsCount}</td>
                    <td className={s.table}>{d.updated}</td>
                    <td className={s.table}>
                        <Button
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={() => props.deletePackHandler(d._id)}
                        >
                            Delete
                        </Button>
                        </td>
                        <td className={s.table}>
                        <Button
                        variant={'outlined'}
                        color={"primary"}
                        size={"small"}
                        onClick={() => props.updatePackHandler(d._id, "Updated name")}
                        >
                        Update
                        </Button>
                    </td>
                </tr>

            })}

            </tbody>

        </table>

    )
}

export default Table;