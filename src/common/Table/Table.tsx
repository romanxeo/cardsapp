import React from 'react';
import s from './Table.module.css'
import Button from "@material-ui/core/Button";
import {NavLink} from 'react-router-dom';
import ModalQuestionContainer from "../Modals/ModalQuestion/ModalQuestionContainer";

type PropsType = {
    tableHeaders: Array<string>
    tableDate: Array<any>
    deleteHandler: (_id: string) => void
    updateHandler: (_id: string) => void
    questionText: string
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
                    const onClickHandler = (answer: boolean) => {
                        answer && props.deleteHandler(d._id)
                    }
                    return <tr className={s.table}>
                        <td className={s.table}>{d.firstCell}</td>
                        <td className={s.table}>{d.secondCell}</td>
                        <td className={s.table}>{d.thirdCell}</td>
                        <td className={s.table}>
                            {d.forthCell ? d.forthCell : <NavLink to={`/Cards/${d._id}`}>Cards</NavLink>}
                        </td>
                        <td className={s.table}>
                            <ModalQuestionContainer
                                questionText={props.questionText}
                                onClickHandler={onClickHandler}
                                buttonName={"Delete"}
                            />
                            {/*<Button*/}
                            {/*    variant={'outlined'}*/}
                            {/*    color={"primary"}*/}
                            {/*    size={"small"}*/}
                            {/*    onClick={() => props.deleteHandler(d._id)}*/}
                            {/*>*/}
                            {/*    Delete*/}
                            {/*</Button>*/}
                        </td>
                        <td className={s.table}>
                            <Button
                                variant={'outlined'}
                                color={"primary"}
                                size={"small"}
                                onClick={() => props.updateHandler(d._id)}
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