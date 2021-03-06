import React from 'react';
import Table from "../../common/Table/Table";
import Button from "@material-ui/core/Button";

type PropsType = {
    cardsForTable: Array<any>
    cardsPack_id: string
    deleteCardHandler: (cardsPack_id: string, _id?: string) => void
}

function Cards(props: PropsType) {


    return (
        <div>
            <Button
                variant={'outlined'}
                color={"primary"}
                size={"small"}
                /*onClick={() => props.addCardHandler(props.cardsPack_id)}*/
            >
                Add card
            </Button>
            <Table
                tableHeaders={["Question", "Answer", "Grade", "Updated", "Delete card", "Update card"]}
                tableDate={props.cardsForTable}
                deleteHandler={props.deleteCardHandler}
                questionText={"Do you really want to delete this card?"}
            />
        </div>
    )
}

export default Cards;