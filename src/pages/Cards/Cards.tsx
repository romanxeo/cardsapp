import React from 'react';
import Table from "../../common/Table/Table";
import Button from "@material-ui/core/Button";

type PropsType = {
    cardsForTable: Array<any>
    addCardHandler: (cardsPack_id: string) => void
    cardsPack_id: string
    deleteCardHandler: (cardsPack_id: string, _id?: string) => void
    updateCardCardHandler: (cardsPack_id: string) => void

}

function Cards(props: PropsType) {


    return (
        <div>
            <Button
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                onClick={() => props.addCardHandler(props.cardsPack_id)}>
                Add card
            </Button>
            <Table
                tableHeaders={["Question", "Answer", "Grade", "Updated", "Delete card", "Update card"]}
                tableDate={props.cardsForTable}
                deleteHandler={props.deleteCardHandler}
                updateHandler={props.updateCardCardHandler}

            />
        </div>
    )
}

export default Cards;