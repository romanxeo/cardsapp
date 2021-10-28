import React from 'react';
import s from './Table.module.css'
import Button from "@material-ui/core/Button";
import {NavLink} from 'react-router-dom';

type PropsType = {
    tableHeaders: Array<string>
    tableDate: Array<any>
    deleteHandler: (cardsPack_id: string) => void
    updateHandler: (_id: string, name: string) => void
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
                    <td className={s.table}>{d.firstCell}</td>
                    <td className={s.table}>{d.secondCell}</td>
                    <td className={s.table}>{d.thirdCell}</td>
                    <td className={s.table}>
                        {d.forthCell ? d.forthCell : <NavLink to={`/Cards/${d.cardsPack_id}`}>Cards</NavLink>}
                    </td>
                    <td className={s.table}>
                        <Button
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={() => props.deleteHandler(d._id)}
                        >
                            Delete
                        </Button>
                    </td>
                    <td className={s.table}>
                        <Button
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={() => props.updateHandler(d.cardsPack_id, "Updated name")}
                        >
                            Update
                        </Button>
                    </td>

                </tr>

            }

        )
        }

            </tbody>

            </table>

            )
        }

        export default Table;