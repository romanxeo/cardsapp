import React from 'react';
import s from './Table.module.css'
import Button from "@material-ui/core/Button";
import {NavLink, Redirect} from 'react-router-dom';
import ModalQuestionContainer from "../../_OLD/ModalQuestionContainer";
import ModalUpdatePack from "../ModalUpdatePack/ModalUpdatePack";

type PropsType = {
    tableHeaders: Array<string>
    tableDate: Array<any>
    deleteHandler: (_id: string) => void
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
                            {d.forthCell ? d.forthCell : <NavLink to={`/Cards/${d._id}/${d.secondCell}`}>Cards</NavLink>}
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
                            <ModalUpdatePack _id={d._id}/>
                        </td>
                        <td className={s.table}>
                            <NavLink to={`/learn/${d._id}/${d.secondCell}`}>
                                <Button
                                    variant={'outlined'}
                                    color={"primary"}
                                    size={"small"}
                                >
                                    Learn
                                </Button>
                            </NavLink>
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